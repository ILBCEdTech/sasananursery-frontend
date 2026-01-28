import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "") ?? "");
const buildApiUrl = (endpoint) => (API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint);
const normalizeList = (payload) => {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (payload.data && Array.isArray(payload.data)) return payload.data;
  if (payload.items && Array.isArray(payload.items)) return payload.items;
  return [];
};
const getImageSource = (item) =>
  item?.imageUrl?.trim() || item?.image?.trim() || item?.imageKey?.trim() || null;

const mapNoviceToMember = (record) => ({
  img: getImageSource(record) || "img/team/01.jpg",
  name: record.novice_name || record.name || "Novice",
  id: record.novice_id ?? record.id ?? record.noviceId ?? null,
});

export const Team = ({ data }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(buildApiUrl("/novices"));
        if (!response.ok) throw new Error("Unable to load team members");
        const payload = await response.json();
        const list = normalizeList(payload).map(mapNoviceToMember).slice(0, 8);
        if (isMounted && list.length) {
          setMembers(list);
        }
      } catch (error) {
        console.error("Error loading team members", error);
      }
    };
    fetchTeamMembers();
    return () => {
      isMounted = false;
    };
  }, []);

  const membersToRender = useMemo(() => {
    const fallback = (data ?? []).slice(0, 8);
    return members.length ? members : fallback;
  }, [data, members]);

  if (!membersToRender.length) return null;

  return (
    <section id="team" className="speakers-section-three">
      <div className="container">
        <div className="sec-title text-center">
          <h2>ရဟန်း / သာမဏေများ</h2>
          <p>
            သံဃာအဖွဲ့ဝင်များစွာကို တရားဦးရာကြီးများမျှဝေမှုပေးကာ ဆက်သွယ်မှုများကို
            အပြိုင်အဆိုင်ကြားဖြတ်လမ်းညွှန်ပေးနေပါတယ်။
          </p>
        </div>

          <div className="row">
            {membersToRender.map((member, index) => {
              const content = (
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={member.img} alt={member.name} />
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">{member.name}</h4>
                  </div>
                </div>
              );

              const wrapperProps = {
                key: `${member.name}-${index}`,
                className: "speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
              };

              if (member.id) {
                return (
                  <Link {...wrapperProps} to={`/novices/${member.id}`} aria-label={`View ${member.name}`}>
                    {content}
                  </Link>
                );
              }

              return (
                <div {...wrapperProps}>
                  {content}
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

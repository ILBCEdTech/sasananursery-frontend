import React from "react";

export const Team = ({ data }) => {
  if (!data?.length) return null;

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
          {data.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="/gallery">
                      <img src={member.img} alt={member.name} />
                    </a>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <a href="/gallery">{member.name}</a>
                  </h4>
                  <span className="designation">
                    {member.designation || ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

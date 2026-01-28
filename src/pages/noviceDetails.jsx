import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./noviceDetails/noviceDetails.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "") ?? "";
const buildApiUrl = (endpoint) => (API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint);

const getImageSource = (novice) =>
  novice?.imageUrl?.trim() || novice?.image?.trim() || novice?.imageKey?.trim() || "/img/team/01.jpg";

const extractNovice = (payload) => {
  if (!payload) return null;
  if (payload.data && typeof payload.data === "object") return payload.data;
  if (payload.item && typeof payload.item === "object") return payload.item;
  return payload;
};

export const NoviceDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [novice, setNovice] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setStatus("error");
      setError(new Error("No novice selected"));
      setNovice(null);
      return;
    }

    let isMounted = true;

    const fetchNovice = async () => {
      setStatus("loading");
      setError(null);
      try {
        const response = await fetch(buildApiUrl(`/novices/${id}`));
        if (!response.ok) throw new Error("Unable to load novice");
        const payload = await response.json();
        const record = extractNovice(payload);
        if (isMounted) {
          setNovice(record);
          setStatus("loaded");
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError(err);
          setStatus("error");
        }
      }
    };

    fetchNovice();
    return () => {
      isMounted = false;
    };
  }, [id]);

  const fields = useMemo(() => {
    if (!novice) return [];
    const name = novice.novice_name || novice.name || "Novice";
    const email = novice.email || novice.email_address || novice.contact_email || "Add email account";
    const mobile = novice.mobile || novice.mobile_number || novice.phone || novice.phone_number || "Add number";
    const location = novice.location || novice.country || (novice.address && novice.address.country) || "Unknown";
    const building = novice.building?.building_name || novice.building_name || "Unassigned";
    const room = novice.room?.room_name || novice.room_name || "Unassigned";
    const joined = novice.joined_date || novice.start_date || novice.date_joined || novice.created_at || null;
    const formattedJoined = joined
      ? new Date(joined).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
      : "Unknown";

    return [
      { label: "Name", value: name },
      { label: "Email account", value: email },
      { label: "Mobile number", value: mobile },
      { label: "Location", value: location },
      { label: "Building", value: building },
      { label: "Room", value: room },
      { label: "Joined", value: formattedJoined },
    ];
  }, [novice]);

  const headerName = novice?.novice_name || novice?.name || "Novice";
  const headerEmail = novice?.email || novice?.email_address || "No email provided";
  const isLoading = status === "loading";
  const hasError = status === "error";

  return (
    <>
      <Navigation />
      <main className="novice-details">
        <section className="novice-details__panel">
          <header className="novice-details__header">
            <div className="novice-details__avatar">
              <img src={getImageSource(novice)} alt={headerName} />
            </div>
            <div className="novice-details__header-copy">
              <p className="novice-details__subtitle">Novice profile</p>
              <h2>{isLoading ? "Loading..." : headerName}</h2>
              <p className="novice-details__email">{isLoading ? "Fetching data..." : headerEmail}</p>
            </div>
            <button
              className="novice-details__close"
              type="button"
              aria-label="Close detail view"
              onClick={() => navigate(-1)}
            >
              ×
            </button>
          </header>
          <div className="novice-details__divider" />
          {hasError ? (
            <p className="novice-details__error">{error?.message || "Unable to load novice data"}</p>
          ) : (
            <dl className="novice-details__fields">
              {fields.map((field) => (
                <div className="novice-details__row" key={field.label}>
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <button className="novice-details__cta" type="button" disabled={isLoading || hasError}>
            Save Change
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoviceDetailsPage;

import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./noviceDetails/noviceDetails.css";

const novice = {
  name: "Lily Andrews",
  dateJoined: "Joined: March 2022",
  stats: [
    { label: "Workshops led", value: 38 },
    { label: "Saplings nurtured", value: "1,240+" },
    { label: "Volunteer hours", value: "960 h" },
  ],
  highlights: [
    "Seasonal planting plans for tropical and temperate climates",
    "Guides novices through data collection and conservation reporting",
    "Specializes in low-water irrigation tech and compost education",
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80",
      alt: "Hands-on planting workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80",
      alt: "Novice team collaborating outdoors",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80",
      alt: "Community event",
    },
  ],
};

export const NoviceDetailsPage = () => {
  return (
    <>
      <Navigation />
      <main className="novice-details">
        <header className="novices-page__hero">
          <h3>ကိုယ်ရေး အကျဥ်း</h3>
        </header>
      
        <section className="novice-details__content">
          <div className="novice-details__card">
            <h4>ရှင်ကောမလ</h4>
            <ul className="novice-details__highlight-list">
              {novice.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button type="button" className="novice-details__cta">
              Request a session
            </button>
          </div>
          <div className="novice-details__gallery">
            {novice.gallery.map((item) => (
              <figure key={item.alt}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoviceDetailsPage;

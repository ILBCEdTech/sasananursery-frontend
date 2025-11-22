import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./gallery.css";

const galleryItems = [
  {
    src: "https://sasananursery.com/storage/images/1761017213tt002.jpg",
    alt: "First description",
    description: "First description",
  },
  {
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Second description",
    description: "Second description",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Third description",
    description: "Third description",
  },
  {
    src: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Fourth description",
    description: "Fourth description",
  },
  {
    src: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Fifth description",
    description: "Fifth description",
  },
  {
    src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Sixth description",
    description: "Sixth description",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Seventh description",
    description: "Seventh description",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Eighth description",
    description: "Eighth description",
  },
  {
    src: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Ninth description",
    description: "Ninth description",
  },
  {
    src: "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Tenth description",
    description: "Tenth description",
  },
  {
    src: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Eleventh description",
    description: "Eleventh description",
  },
  {
    src: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Twelfth description",
    description: "Twelfth description",
  },
];

const GalleryPage = () => (
  <>
    <Navigation />
    <main className="gallery-page">
      <div className="gallery-page__content">
        <header className="gallery-page__hero">
          <p className="gallery-page__eyebrow">ဓာတ်ပုံများ</p>
          <h1 className="gallery-page__title">Sasan Nursery Gallery</h1>
          <p className="gallery-page__subtitle">
            A curated selection of our community moments and nature highlights.
          </p>
        </header>
        <section className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article key={`${item.alt}-${index}`} className="gallery-grid__item">
              <img src={item.src} alt={item.alt} />
              <span className="description">{item.description}</span>
            </article>
          ))}
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default GalleryPage;

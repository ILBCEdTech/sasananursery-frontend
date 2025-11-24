import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./gallery.css";

const galleryItems = [
  {
    src: "img/gallery/g-1.jpg",
    alt: "First description",
    description: "First description",
  },
  {
    src: "img/gallery/g-2.jpg",
    alt: "Second description",
    description: "Second description",
  },
  {
    src: "img/gallery/g-3.jpg",
    alt: "Third description",
    description: "Third description",
  },
  {
    src: "img/gallery/g-4.jpg",
    alt: "Fourth description",
    description: "Fourth description",
  },
  {
    src: "img/gallery/g-5.jpg",
    alt: "Fifth description",
    description: "Fifth description",
  },
  {
    src: "img/gallery/g-6.jpg",
    alt: "Sixth description",
    description: "Sixth description",
  },
  {
    src: "img/gallery/g-7.jpg",
    alt: "Seventh description",
    description: "Seventh description",
  },
  {
    src: "img/gallery/g-8.jpg",
    alt: "Eighth description",
    description: "Eighth description",
  },
  {
    src: "img/gallery/g-9.jpg",
    alt: "Ninth description",
    description: "Ninth description",
  },
  {
    src: "img/gallery/g-10.jpg",
    alt: "Tenth description",
    description: "Tenth description",
  },
  {
    src: "img/gallery/g-11.jpg",
    alt: "Eleventh description",
    description: "Eleventh description",
  },
  {
    src: "img/gallery/g-12.jpg",
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
          <h1 className="gallery-page__title">ကျောင်းတိုက်လှုပ်ရှားမှုများ</h1>
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

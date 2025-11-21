import React, { useEffect, useState } from "react";
import { Navigation } from "./navigation";


const defaultSlides = [
  {
    image:
      "img/intro-bg.jpg",
    heroIntro: "လှည်းကူးမြို့နယ် ရန်ကုန်တိုင်း‌ဒေသကြီး",
    heroTitle: "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်",
    heroButton: "About Us",
    indicatorImage:
      "https://images.unsplash.com/photo-1475180098004-b3c2d8e0b7c3?auto=format&fit=crop&w=60&q=80",
  },
  {
    image:
      "https://sasananurserymonastery.com/wp-content/uploads/2019/09/Slider.jpg",
    heroIntro: "လှည်းကူးမြို့နယ် ရန်ကုန်တိုင်း‌ဒေသကြီး",
    heroTitle: "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်",
    heroButton: "Our Work",
    indicatorImage:
      "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=60&q=80",
  },
  {
    image:
      "img/intro-bg-2.jpg",
    heroIntro: "လှည်းကူးမြို့နယ် ရန်ကုန်တိုင်း‌ဒေသကြီး",
    heroTitle: "သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်",
    heroButton: "Contact Us",
    indicatorImage:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=60&q=80",
  },
];

export const Home = ({ data = {} }) => {
  const heroSlides = data.heroSlides ?? defaultSlides;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlideData = heroSlides[activeSlide];

  return (
    <>
      <Navigation />
      <section id="home" className="hero-page">
        <div className="hero-section">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`hero-slide ${index === activeSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}

          <div className="hero-content">
            <p className="hero-intro">{activeSlideData.heroIntro}</p>
            <h1>{activeSlideData.heroTitle}</h1>
            <button className="hero-cta" type="button">
              {activeSlideData.heroButton}
            </button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

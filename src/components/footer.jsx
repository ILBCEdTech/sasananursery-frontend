import React, { useEffect, useMemo, useState } from "react";
import { Phone, Facebook } from "lucide-react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "") ?? "";

const buildApiUrl = (endpoint) =>
  API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint;

const fallbackGalleryItems = [
  {
    alt: "စာအုပ်အလှူတော်",
    image:
      "img/news/new-1.jpg",
    link: "/news",
  },
  {
    alt: "ဝန်ထမ်းများ ခေါ်ယူခြင်း",
    image:
      "img/news/new-3.png",
    link: "/news",
  },
  {
    alt: "Facebook Post များ",
    image:
      "img/news/new-2.jpg",
    link: "/news",
  },
];

const getImageSource = (item) =>
  item?.imageUrl?.trim() ||
  item?.image?.trim() ||
  item?.imageKey?.trim() ||
  null;

const normalizeList = (payload) => {
  if (!payload) {
    return [];
  }
  if (Array.isArray(payload)) {
    return payload;
  }
  if (payload.data && Array.isArray(payload.data)) {
    return payload.data;
  }
  if (payload.items && Array.isArray(payload.items)) {
    return payload.items;
  }
  return [];
};

const mapNewsToGalleryItem = (item, index) => {
  if (!item) return null;
  const image =
    getImageSource(item) || fallbackGalleryItems[index % fallbackGalleryItems.length].image;
  return {
    alt: item.title || item.category || "News image",
    image,
    link: item.id ? `/news/${item.id}` : "/news",
  };
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/SarsanaNurseryMonastery",
    label: "www.facebook.com/SarsanaNurseryMonastery",
    icon: <Facebook aria-hidden="true" size={20} />,
  },
  {
    name: "Telegram",
    href: "https://t.me/SarsanaNurseryMonastery",
    label: "t.me/SarsanaNurseryMonastery",
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        alt=""
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Viber",
    href: "viber://chat?number=%2B959765003300",
    label: "+95 9 7650 03300",
    icon: (
      <img
        src="https://images.sftcdn.net/images/t_app-icon-m/p/038d9aec-96d2-11e6-bf4e-00163ec9f5fa/3644051220/viber-Viber-2.png"
        alt=""
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Call us",
    href: "tel:+959765003300",
    label: "09-765003300, 09-795003300",
    icon: <Phone aria-hidden="true" size={20} />,
  },
];

export const Footer = () => {
  const [newsItems, setNewsItems] = useState([]);
  const currentYear = new Date().getFullYear();
  const galleryFeed = useMemo(() => {
    const mapped = newsItems
      .map((item, index) => mapNewsToGalleryItem(item, index))
      .filter(Boolean)
      .slice(0, fallbackGalleryItems.length);
    return mapped.length ? mapped : fallbackGalleryItems;
  }, [newsItems]);

  useEffect(() => {
    let isMounted = true;
    const fetchNews = async () => {
      try {
        const response = await fetch(buildApiUrl("/news"));
        if (!response.ok) throw new Error("Unable to load footer news");
        const payload = await response.json();
        if (isMounted) {
          setNewsItems(normalizeList(payload));
        }
      } catch (err) {
        console.error("Error fetching footer news", err);
      }
    };
    fetchNews();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-section__container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="img/icon.png"
                alt="အောင်လံဆရာတော်ဘုရားကြီး၏သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်"
              />
            </div>
            <p>
              သဲအင်းဂူတိုက်ခွဲ (၃၂) အောင်လံဆရာတော်ဘုရားကြီး၏သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="/">ပင်မစာမျက်နှာ</a>
                </li>
                <li>
                  <a href="/about">အကြောင်းအရာ</a>
                </li>
                <li>
                  <a href="/donors">သာသနာ့အလှူ</a>
                </li>
                <li>
                  <a href="/news">သတင်းများ</a>
                </li>
                <li>
                  <a href="/gallery">ဓာတ်ပုံများ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-gallery">
            <div className="footer-gallery__heading">
              <h3>နောက်ဆုံး သတင်းများ</h3>
            </div>
            <div className="footer-gallery__grid">
              {galleryFeed.map((item, index) => (
                <a
                  key={`gallery-${index}`}
                  href={item.link ?? "/news"}
                  aria-label={item.alt}
                  className="footer-gallery__item"
                >
                  <img src={item.image} alt={item.alt} />
                </a>
              ))}
            </div>
            <div className="footer-gallery__socials">
              <div className="footer-social-grid">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="footer-social-link"
                    aria-label={`Visit our ${link.name} page`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright-text">
            <p>
              Copyright &copy; {currentYear}, {" "}
              <a href="/">သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

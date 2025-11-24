import React from "react";
import { Phone, Facebook } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "www.facebook.com/SarsanaNurseryMonastery",
    className: "facebook-bg",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
];

const galleryItems = [
  {
    alt: "စာအုပ်အလှူတော်",
    image:
      "img/news/new-1.jpg",
  },
  {
    alt: "ဝန်ထမ်းများ ခေါ်ယူခြင်း",
    image:
      "img/news/new-3.png",
  },
  {
    alt: "Facebook Post များ",
    image:
      "img/news/new-2.jpg",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              {galleryItems.map((item, index) => (
                <a
                  key={`gallery-${index}`}
                  href="/news"
                  aria-label={item.alt}
                  className="footer-gallery__item"
                >
                  <img src={item.image} alt={item.alt} />
                </a>
              ))}
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
          <div className="footer-cta footer-cta--compact">
            <div className="footer-row">
                <div className="footer-col">
                  <div className="single-cta">
                    <Facebook aria-hidden="true" size={20} />
                    <div className="cta-text">
                      <h4>Follow us</h4>
                      <span>www.facebook.com/SarsanaNurseryMonastery</span>
                    </div>
                  </div>
                </div>
                <div className="footer-col">
                  <div className="single-cta">
                    <Phone aria-hidden="true" size={20} />
                    <div className="cta-text">
                      <h4>Call us</h4>
                      <span>09-765003300, 09-795003300</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

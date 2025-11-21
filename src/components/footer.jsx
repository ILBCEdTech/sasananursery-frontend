import React from "react";
import { Phone, Mail } from "lucide-react";

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
    alt: "Professional montage",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=70",
  },
  {
    alt: "Woman with coffee mug",
    image:
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=400&q=70",
  },
  {
    alt: "Minimal workspace",
    image:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=70",
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
            <div className="footer-social-icon">
              <span>Follow us</span>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={link.className}
                >
                  <img src={link.icon} alt={`${link.label} logo`} />
                </a>
              ))}
            </div>
          </div>
          <div className="footer-links">
            <div>
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href="#">ပင်မစာမျက်နှာ</a>
                </li>
                <li>
                  <a href="#">အကြောင်းအရာ</a>
                </li>
                <li>
                  <a href="#">သာသနာ့အလှူ</a>
                </li>
                <li>
                  <a href="#">သတင်းများ</a>
                </li>
                <li>
                  <a href="#">ဓာတ်ပုံများ</a>
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
                  href="#"
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
              Copyright &copy; {currentYear}, All Right Reserved{" "}
              <a href="#">သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်</a>
            </p>
          </div>
          <div className="footer-cta footer-cta--compact">
            <div className="footer-row">
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

import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./contact/contact.css";

const infoItems = [
  {
    label: "Email",
    value: "hi@agency.com",
    iconSrc: "/img/icons/sms.png",
    iconBackground: "linear-gradient(135deg, #fff4ec 0%, #ffd6b3 100%)",
    columnClass: "contact-info__item--column1",
  },
  {
    label: "Phone",
    value: "09-765003300",
    value2: "09-795003300",
    iconSrc: "/img/icons/call.png",
    iconBackground: "linear-gradient(135deg, #f4f2ff 0%, #d7ccff 100%)",
    columnClass: "contact-info__item--column2",
  },
  {
    label: "Address",
    value: "သဲအင်းဂူတိုက်ခွဲ (၃၂)",
    description: "အောင်လံဆရာတော်ဘုရားကြီး၏သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်",
    iconSrc: "/img/icons/location.png",
    iconBackground: "linear-gradient(135deg, #e5fbf0 0%, #c3fbdf 100%)",
    columnClass: "contact-info__item--column1",
  },
  {
    label: "Telegram",
    value: "@SarsanaNurseryMonastery",
    description: "Quick updates and chat",
    link: "https://t.me/SarsanaNurseryMonastery",
    iconSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    iconBackground: "linear-gradient(135deg, #e3f2ff 0%, #c6e7ff 100%)",
  },
  {
    label: "Viber",
    value: "+95 9 7650 03300",
    description: "Message us directly on Viber",
    link: "viber://chat?number=%2B959765003300",
    iconSrc:
      "https://images.sftcdn.net/images/t_app-icon-m/p/038d9aec-96d2-11e6-bf4e-00163ec9f5fa/3644051220/viber-Viber-2.png",
    iconBackground: "linear-gradient(135deg, #fde8ff 0%, #ffd7fb 100%)",
  },
];

const contactCards = [
  {
    title: "ရဟန်းသံဃာနှင့် သာမဏေရေးရာ",
    phones: ["09 792 908 908", "09 770 077 292"],
  },
  {
    title: "ဆွမ်းအဟာရ အလှူအတွက်",
    phones: ["09 9 500 042 22"],
  },
  {
    title: "အထွေထွေ",
    phones: ["09 792 908 908", "09 770 077 292"],
  },
];

const ContactPage = () => (
  <>
    <Navigation />
    <div className="contact-page">
      <div className="contact-content">
      <div className="contact-page__title">
        <h2 className="donor-hero__title">ဆက်သွယ်ရန်</h2>
      </div>
      <section className="contact-hero">
        <div className="contact-hero__form">
          <p className="contact-label">Get in touch</p>
          <p className="contact-subtitle">
            We're here to help — share a few details and we will get back to you
            shortly.
          </p>
          <form className="contact-form">
            <div className="contact-form__row">
              <label>
                First name
                <input type="text" placeholder="First name" />
              </label>
              <label>
                Last name
                <input type="text" placeholder="Last name" />
              </label>
            </div>
            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              Phone number
              <input type="tel" placeholder="MM +95 (9) 000-0000" />
            </label>
            <label>
              Message
              <textarea rows="4" placeholder="Leave us a message..." />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-hero__info">
          <div className="contact-hero__info-heading">
            <h2>We'd love to hear from you</h2>
            <p>
              Need something cleared up? Here are our most frequently asked
              questions.
            </p>
          </div>
          <div className="contact-info">
            {infoItems.map((info) => (
              <article
                key={info.label}
                className={`contact-info__item ${info.columnClass ?? ""}`}
              >
                <span
                  className="contact-info__icon"
                  style={{ background: info.iconBackground }}
                >
                  {info.iconSrc ? (
                    <img src={info.iconSrc} alt={`${info.label} icon`} />
                  ) : (
                    info.icon
                  )}
                </span>
                <div className="contact-info__text">
                  <p className="contact-info__label">{info.label}</p>
                  {info.link ? (
                    <a
                      className="contact-info__value contact-info__link"
                      href={info.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="contact-info__value">{info.value}</p>
                  )}
                  {info.value2 && (
                    <p className="contact-info__value">{info.value2}</p>
                  )}
                  {info.description && (
                    <p className="contact-info__value">
                      {info.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cards">
        {contactCards.map((card) => (
          <article key={card.title} className="contact-card">
            <h3>{card.title}</h3>
            {card.phones.map((phone) => (
              <div key={phone} className="contact-card__phone-entry">
                <p className="contact-card__phone-label">PHONE NUMBER</p>
                <div className="contact-card__phone">
                  <span>{phone}</span>
                  <button type="button" aria-label={`Copy ${phone}`} className="contact-card__copy">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-120dh41-MuiSvgIcon-root"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ContentCopyIcon"
                    >
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </article>
        ))}
      </section>

      <div className="contact-highlight">
        <iframe
          title="Sasan Nursery monastery map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15259.132572683468!2d96.1954226!3d17.0343039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19b5a4b621345%3A0x5755adae7021ec6a!2sSarsana%20Nursery%20Monastery!5e0!3m2!1sen!2smm!4v1568866626397!5m2!1sen!2smm"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ContactPage;

import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./contact.css";

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
    value: "100 Smith Street",
    description: "Collingwood VIC 3066 AU",
    iconSrc: "/img/icons/location.png",
    iconBackground: "linear-gradient(135deg, #e5fbf0 0%, #c3fbdf 100%)",
    columnClass: "contact-info__item--column1",
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
                  <p className="contact-info__value">{info.value}</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.05516745969!2d145.10063952033037!3d-37.89677052796918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad623a3b79ebf77%3A0x4032d80a1d4c6c0!2sSasan%20Nursery%20Monastery!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
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

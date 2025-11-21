import React, { useEffect, useRef, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Navigation } from "../components/navigation";
import "./PaymentAccounts.css";

const paymentCards = [
  {
    id: "aya",
    holder: "U Kitibala, U Tin Maung Win, U Win Tun",
    logoPlacement: "left",
    logoUrl: "/img/banks/AYA-Bank 1.png",
    brandGradient: "#fff",
    details: [
      { label: "Account Number", value: "0124202010034208" },
      { label: "Account Number", value: "40029422797" },
    ],
  },
  {
    id: "mab",
    holder: "U Kitibala, U Tin Maung Win, U Win Tun",
    logoPlacement: "right",
    brandMark: "MAB",
    brandGradient: "#fff",
    logoUrl: "/img/banks/mab.png",
    details: [
      { label: "Account Number", value: "0124202010034208" },
      { label: "Account Number", value: "40029422797" },
    ],
  },
  {
    id: "kbz-bank",
    holder: "U Kitibala, U Tin Maung Win, U Win Tun",
    logoPlacement: "left",
    brandMark: "KBZ",
    brandGradient: "#fff",
    logoUrl: "/img/banks/kbz.png",
    details: [
      { label: "Account Number", value: "0124202010034208" },
      { label: "Account Number", value: "40029422797" },
    ],
  },
  {
    id: "yoma",
    holder: "U Kitibala, U Tin Maung Win, U Win Tun",
    logoPlacement: "right",
    brandMark: "YOMA",
    brandGradient: "#fff",
    logoUrl: "/img/banks/Yoma.png",
    details: [
      { label: "Account Number", value: "0124202010034208" },
      { label: "Account Number", value: "40029422797" },
    ],
  },
  {
    id: "cb-bank",
    holder: "U Kitibala, U Tin Maung Win, U Win Tun",
    logoPlacement: "left",
    brandMark: "CB",
    brandGradient: "#fff",
    logoUrl: "/img/banks/cb-bank.png",
    details: [
      { label: "Account Number", value: "0124202010034208" },
      { label: "Account Number", value: "40029422797" },
    ],
  },
  {
    id: "wave-pay",
    holder: "U Kitibala",
    logoPlacement: "right",
    brandMark: "wave",
    brandGradient: "#fff",
    logoUrl: "/img/banks/Wave-Money.png",
    details: [{ label: "Phone Number", value: "09775177825" }],
  },
  {
    id: "kbz-pay",
    holder: "U Kitibala",
    logoPlacement: "left",
    brandMark: "KBZ",
    brandGradient: "#fff",
    logoUrl: "/img/banks/kpay.png",
    details: [{ label: "Phone Number", value: "0951778285" }],
  },
];

const PaymentAccounts = () => {
  const [copiedValue, setCopiedValue] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopy = (value) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedValue(value);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setCopiedValue(""), 1400);
  };

  return (
    <>
      <Navigation />
      <div className="payment-page">
        <div className="payment-page__glow" aria-hidden="true" />
        <main className="payment-page__content">
        <div className="payment-page__intro">
          <p className="payment-page__eyebrow">Bank & wallet details</p>
          <h1>သာသနာ့အလှူ</h1>
          <p className="payment-page__summary">ဘဏ်အကောင့်ရှိသူများတစ်လလျှင် လစဉ်(၅၀ဝ) ကျပ်နှင့်အထက်လှူဒါန်းလိုပါက အောက်ပါဘဏ်အကောင့်အတိုင်းလှူဒါန်းနိုင်ပါသည်။</p>
        </div>
        <section className="payment-page__cards">
          {paymentCards.map((card) => {
            const logoOnRight = card.logoPlacement === "right";
            return (
              <article
                key={card.id}
                className={`account-card ${
                  logoOnRight ? "account-card--logo-right" : "account-card--logo-left"
                }`}
              >
                <div
                  className="account-card__brand"
                  style={{ background: card.brandGradient }}
                >
                  {card.logoUrl ? (
                    <div className="account-card__brand-logo-wrap">
                      <img
                        src={card.logoUrl}
                        alt={`${card.name} logo`}
                        className="account-card__brand-logo"
                      />
                    </div>
                  ) : (
                    <span className="account-card__brand-mark">{card.brandMark}</span>
                  )}
                </div>
                <div className="account-card__content">
                  <div className="account-card__field">
                    <p className="account-card__label">Account Name</p>
                    <p className="account-card__value">{card.holder}</p>
                  </div>
                  {card.details.map((detail) => {
                    const detailKey = `${card.id}-${detail.label}-${detail.value}`;
                    return (
                      <div className="account-card__field" key={detailKey}>
                        <p className="account-card__label">{detail.label}</p>
                        <div className="account-card__value-row">
                          <span>{detail.value}</span>
                          <button
                            type="button"
                            className="account-card__copy"
                            onClick={() => handleCopy(detail.value)}
                            aria-label={`Copy ${detail.label} for ${card.name}`}
                          >
                            <ContentCopyIcon fontSize="small" />
                          </button>
                        </div>
                        {copiedValue === detail.value && (
                          <span className="account-card__copied">Copied</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
        <p className="payment-page__footer-note">
          All donations are processed securely. Thank you for your generosity! 💙
        </p>
        </main>
      </div>
    </>
  );
};

export default PaymentAccounts;

import React, { useMemo, useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./donors/donors.css";

const donorRecords = [
  {
    name: "ဒေါ်လှ",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "789 Maple Drive, Seattle, WA 98101",
    phone: "09-123456789",
  },
  {
    name: "ဦးလွင်",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "321 Olive Street, Seattle, WA 98101",
    phone: "09-123456780",
  },
  {
    name: "ဦးမြတ်လှိုင်",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "456 Pine Avenue, Seattle, WA 98101",
    phone: "09-123456781",
  },
  {
    name: "ဦးသက်ပိုင်",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "890 Cedar Street, Seattle, WA 98101",
    phone: "09-123456782",
  },
  {
    name: "ဒေါ်ချမ်းမြင့်",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "234 Birch Lane, Seattle, WA 98101",
    phone: "09-123456783",
  },
  {
    name: "ဒေါ်ချစ်ခင်",
    image:
      "https://sasananursery.com/storage/images/1755007092a1.jpg",
    address: "567 Willow Road, Seattle, WA 98101",
    phone: "09-123456784",
  },
];

const tabs = ["အဆောက်အဦအလှူရှင်များ", "ဆွမ်းအဟာရ အလှူရှင်များ", "ညနေခင်းဖျော်ရည် အလှူရှင်များ"];

const DonorsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const filteredDonors = useMemo(() => {
    if (!searchValue) return donorRecords;
    const normalized = searchValue.toLowerCase();
    return donorRecords.filter((donor) =>
      donor.name.toLowerCase().includes(normalized)
    );
  }, [searchValue]);

  return (
    <>
      <Navigation />
      <div className="donors-page">
        <section className="donor-hero">
          <h2 className="donor-hero__title">အလှူရှင်များ</h2>
          <p className="donor-hero__description">
            ကျေးဇူးရှင် ဒါယကာ၊ ဒါယိကာမကြီးများ၏ ရက်ရောလှသော ပစ္စယာနုဂ္ဂဟကို ခံယူကာ၊ ဤ သာသနာ့ဝန်ထမ်း အရေးကိစ္စအဝဝကို အောင်မြင်စွာ ဆောင်ရွက်နိုင်ပါသည်။ ဤ ကျေးဇူးတရားကို "ဥဒ္ဒိဿ" တည်းဟူသော ကျေးဇူးသိမ်းဆည်းမှုဖြင့် ချီးမြှင့်လိုက်ပါသည်။
          </p>
          <div className="donor-tabs">
            {tabs.map((tab, index) => (
              <button
                type="button"
                key={tab}
                className={`donor-tabs__item ${index === 0 ? "is-active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </section>

        <div className="donor-search">
          <input
            type="search"
            placeholder="Search by name, address, or contact..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>

        <section className="donor-grid">
          {filteredDonors.map((donor) => (
            <article key={donor.name} className="donor-card">
              <img src={donor.image} alt={donor.name} />
              <div className="donor-card__body">
                <h2>{donor.name}</h2>
                <p>{donor.address}</p>
                <span>{donor.phone}</span>
              </div>
            </article>
          ))}
        </section>

        <div className="donor-load">
          <button type="button">LOAD MORE</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonorsPage;

import React from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./novices/novices.css";

const profiles = [
  {
    name: "ရှင်ကောမလ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/08.jpg",
  },
  {
    name: "ရှင်ကိတ္တိဝရ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/01.jpg",
  },
  {
    name: "ရှင်ခေမန္တ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/02.jpg",
  },
  {
    name: "ရှင်ပါကဋ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/03.jpg",
  },
  {
    name: "ရှင်နိဿရဏ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/04.jpg",
  },
  {
    name: "ရှင်သုဓမ္မ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/05.jpg",
  },
  {
    name: "ရှင်ပဏ္ဍိတဝံသ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/06.jpg",
  },
  {
    name: "ရှင်ရာဇဓမ္မ",
    role: "သာမဏေကျောင်းဆောင် (၂)",
    room: "အိပ်ဆောင် ( A )",
    image:
      "img/team/07.jpg",
  },
];

const NovicesPage = () => (
  <>
    <Navigation />
    <div className="novices-page">
      <header className="novices-page__hero">
        <h3>သာမဏေများ</h3>
      </header>
      <div className="novices-page__main">
        {profiles.map((profile) => (
          <article className="profile-card" key={profile.name}>
            <div className="img">
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className="caption">
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <p>{profile.room}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default NovicesPage;

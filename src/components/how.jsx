import * as React from "react";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBullhorn,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  "fa fa-comments-o": faComments,
  "fa fa-bullhorn": faBullhorn,
  "fa fa-group": faUsers,
};

const colors = ["#fef5ef", "#f3eeff", "#e8fbff"];

export default function How() {
  const howPoints = data.How || [];

  return (
    <section id="how" className="how-section">
      <div className="how-heading">
        <p className="how-eyebrow">သံဃာကို မည်သို့တည်တံ့စေမည်နည်း</p>
        <h2>လှုပ်ရှားမှုအသစ်များဖြင့် တည်ဆောက်ခြင်း</h2>
        <p>
          စိတ်လှုပ်ရှားစရာ အစီအစဉ်များ၊ ကျောင်းသားအုပ်ချုပ်မှုနှင့် တက်ကြွသော သတင်းများဖြင့်
          သံဃာကို ခိုင်မာစွာ တည်တံ့စေပါသည်။
        </p>
      </div>

      <div className="how-grid">
        {howPoints.map((item, index) => (
          <article
            key={`how-${index}`}
            className="how-card"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <div className="how-card__icon-wrapper">
              <span className="how-card__step">{index + 1}</span>
              <div className="how-card__icon">
                <FontAwesomeIcon
                  icon={iconMap[item.icon] || faUsers}
                  fixedWidth
                  size="lg"
                />
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

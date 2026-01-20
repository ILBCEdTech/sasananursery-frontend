import React from "react";
import { CheckCircle2 } from "lucide-react";

const defaultBullets = [
  "Community engagement programs and spiritual dialogue.",
  "Mindfulness retreats and meditation guidance.",
  "Updates on monastery events, teachings, and service work.",
];

export const About = ({ aboutData, aimData }) => {
  const paragraph =
    aboutData?.paragraph ||
    "Sasananurserymonastery serves as a vibrant platform dedicated to nurturing spiritual growth and understanding. We provide enriching blogs, insightful content, and announcements related to our monastery activities.";
  const bulletPool = [
    ...(aimData?.Why ?? []),
    ...(aimData?.Why2 ?? []),
  ].filter(Boolean);
  const bullets =
    bulletPool.length > 0 ? bulletPool.slice(0, 3) : defaultBullets;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Us</span>
                <h2>သဲအင်းဂူတိုက်ခွဲ (၃၂) အောင်လံဆရာတော်ဘုရားကြီး၏ သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်</h2>
              </div>
              <div className="text">{paragraph}</div>
              <ul className="list-style-one">
                {bullets.map((bullet, index) => (
                  <li key={index}>
                    <CheckCircle2 aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="btn-box">
                <a href="/about" className="theme-btn btn-style-one">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <a
                  href="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                  className="lightbox-image"
                  data-fancybox="images"
                >
                  <img
                    src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                    alt="Monastery courtyard"
                  />
                </a>
              </figure>
              <figure className="image-2">
                <a
                  href="/img/about-2.png"
                  className="lightbox-image"
                  data-fancybox="images"
                >
                  <img src="img/about-2.png" alt="Monastic teaching" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

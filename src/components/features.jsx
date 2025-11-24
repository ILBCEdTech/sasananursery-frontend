import React from "react";

const defaultCards = [
  {
    date: "Nov 13, 2025",
    category: "စာအုပ်အလှူတော်",
    image:
      "img/news/new-1.jpg",
    link: "/news",
  },
  {
    date: "Nov 13, 2025",
    category: "ဝန်ထမ်းများ ခေါ်ယူခြင်း",
    image:
      "img/news/new-3.png",
    link: "/news",
  },
  {
    date: "Nov 13, 2025",
    category: "Facebook Post များ",
    image:
      "img/news/new-2.jpg",
    link: "/news",
  },
];

export const Features = ({ data }) => {
  const cards = defaultCards.map((card, index) => {
    const item = data?.[index];
    if (!item) {
      return card;
    }
    return {
      ...card,
      title: item.title || item.name || card.title,
      excerpt: item.text || card.excerpt,
    };
  });

  return (
    <section id="news" className="news-section">
      <div className="news-heading">
        <p className="news-eyebrow">Stay close to the dharma news updates</p>
        <h2>နောက်ဆုံး သတင်းများ</h2>
        <p className="news-subtitle">
          Connect with the latest monastery announcements, spiritual gatherings,
          and service opportunities that help our community grow in wisdom and
          compassion.
        </p>
      </div>

      <div className="content-wrapper">
        {cards.map((card) => (
          <div
            key={card.title}
            className="news-card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <a
              href={card.link}
              className="news-card__card-link"
              aria-label={card.title}
            ></a>
            <div className="overlay"></div>
            <div className="wrap-cat">
              <span className="cat" data-hover={card.category}>
                {card.category}
              </span>
            </div>
            <h1>
              <span>{card.title}</span>
            </h1>
            <div className="news-card__text-wrapper">
              <div className="news-card__post-date">{card.date}</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">{card.excerpt}</p>
                <a href={card.link} className="news-card__read-more">
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="news-section__cta">
        <a href="/news" className="news-section__button">
          Read full news page
        </a>
      </div>
    </section>
  );
};

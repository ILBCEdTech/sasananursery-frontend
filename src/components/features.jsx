import React, { useEffect, useMemo, useState } from "react";

const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "") ?? "");

const defaultNoviceCards = [
  {
    name: "Novice Ananda",
    role: "Mindfulness guide",
    status: "Leading sunrise chants",
    color: "linear-gradient(135deg, #ff9a8b, #ff6a88)",
    link: "/novices/ananda",
  },
  {
    name: "Novice Santi",
    role: "Garden custodian",
    status: "Tending the meditation lawns",
    color: "linear-gradient(135deg, #7afcff, #4f86ff)",
    link: "/novices/santi",
  },
  {
    name: "Novice Panna",
    role: "Community care",
    status: "Hosting mindful service circles",
    color: "linear-gradient(135deg, #fbd3e9, #bb377d)",
    link: "/novices/panna",
  },
];

const formatDate = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
};

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((segment) => segment[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const getImageSource = (item) =>
  item?.imageUrl?.trim() || item?.image?.trim() || item?.imageKey?.trim() || null;

const buildApiUrl = (endpoint) => (API_BASE_URL ? `${API_BASE_URL}${endpoint}` : endpoint);

const normalizeList = (payload) => {
  if (!payload) {
    return [];
  }

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload.data && Array.isArray(payload.data)) {
    return payload.data;
  }

  if (payload.items && Array.isArray(payload.items)) {
    return payload.items;
  }

  return [];
};

const mapNewsItem = (item) => {
  if (!item) return null;
  const image = getImageSource(item);
  return {
    title: item.title,
    excerpt: item.remark || item.content,
    date: formatDate(item.date),
    image,
    link: item.id ? `/news/${item.id}` : "/news",
    category: item.category || "Monastery news",
  };
};

const extractYouTubeId = (url) => {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v");
    }
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1);
    }
  } catch (err) {
    console.error("Unable to parse YouTube URL", url, err);
  }
  return null;
};

const getVideoThumbnail = (url) => {
  const videoId = extractYouTubeId(url);
  if (!videoId) return null;
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const mapVideoItem = (item) => {
  if (!item) return null;
  const image = getVideoThumbnail(item.youtube_url);
  return {
    title: item.title,
    excerpt: item.description,
    image,
    link: item.youtube_url,
    category: "Video feature",
  };
};

const parseNovicesPayload = (payload) => normalizeList(payload);

const buildNoviceCard = (record, index, lookups = {}) => {
  const fallback = defaultNoviceCards[index % defaultNoviceCards.length];
  if (!record) return fallback;
  const image = getImageSource(record);
  
  return {
    name: record.novice_name || record.name || fallback.name,
    color: fallback.color,
    image,
    link: record.novice_id ? `/novices/${record.novice_id}` : "/novices",
  };
};

export const Features = ({ data }) => {
  const [news, setNews] = useState([]);
  const [videos, setVideos] = useState([]);
  const [noviceRecords, setNoviceRecords] = useState([]);
  const novices = useMemo(() => {
    if (!noviceRecords.length) {
      return defaultNoviceCards;
    }
    return noviceRecords.map((record, index) =>
      buildNoviceCard(record, index)
    );
  }, [noviceRecords]);
  const visibleNovices = useMemo(() => novices.slice(0, 5), [novices]);

  useEffect(() => {
    let isMounted = true;
    const fetchNews = async () => {
      try {
        const response = await fetch(buildApiUrl("/news"));
        if (!response.ok) throw new Error("Unable to load news");
        const payload = await response.json();
        if (isMounted) setNews(normalizeList(payload));
      } catch (err) {
        console.error("Error fetching news", err);
      }
    };
    fetchNews();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchVideos = async () => {
      try {
        const response = await fetch(buildApiUrl("/embedded-videos"));
        if (!response.ok) throw new Error("Unable to load embedded videos");
        const payload = await response.json();
        if (isMounted) setVideos(normalizeList(payload));
      } catch (err) {
        console.error("Error fetching embedded videos", err);
      }
    };
    fetchVideos();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchNovices = async () => {
      try {
        const response = await fetch(buildApiUrl("/novices"));
        if (!response.ok) throw new Error("Unable to load novices");
        const payload = await response.json();
        const records = parseNovicesPayload(payload);
        if (isMounted) {
          setNoviceRecords(records);
        }
      } catch (err) {
        console.error("Error fetching novices", err);
      }
    };
    fetchNovices();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchLookup = async (endpoint, setter, idKeys, labelKeys) => {
      try {
        const response = await fetch(buildApiUrl(endpoint));
        if (!response.ok) {
          return;
        }
        const payload = normalizeList(await response.json());
        const map = {};
        payload.forEach((entry) => {
          const id = idKeys
            .map((key) => entry?.[key])
            .find((value) => value !== undefined && value !== null);
          const label = labelKeys
            .map((key) => entry?.[key])
            .find((value) => value !== undefined && value !== null);
          if (id != null && label != null) {
            map[String(id)] = String(label);
          }
        });
        if (isMounted) {
          setter(map);
        }
      } catch (err) {
        console.error(`Error fetching ${endpoint}`, err);
      }
    };

    return () => {
      isMounted = false;
    };
  }, []);

  const fallbackNews = Array.isArray(data) ? data : [];
  const sourceNews = news.length ? news : fallbackNews;
  const highlightCard = mapNewsItem(sourceNews?.[0]);
  const videoCard = mapVideoItem(videos?.[0]);

  return (
    <section id="news" className="news-section">
      <div className="news-heading">
        <p className="news-eyebrow">Stay close to the dharma news updates</p>
        <h2>Stay close to the dharma news updates</h2>
        <p className="news-subtitle">
          Connect with the latest monastery announcements, spiritual gatherings,
          and service opportunities that help our community grow in wisdom and
          compassion.
        </p>
      </div>

      <div className="news-grid">
        {highlightCard ? (
          <article
            className="news-highlight"
            style={{
              backgroundImage: highlightCard.image ? `url(${highlightCard.image})` : undefined,
            }}
          >
            <div className="news-highlight__overlay" aria-hidden="true"></div>
            <div className="news-highlight__content">
              <p className="highlight-badge">{highlightCard.category}</p>
              {highlightCard.date && (
                <p className="highlight-date">{highlightCard.date}</p>
              )}
              <h3>{highlightCard.title}</h3>
              {highlightCard.excerpt && (
                <p className="highlight-excerpt">{highlightCard.excerpt}</p>
              )}
              <a href={highlightCard.link} className="highlight-link">
                Read story
              </a>
            </div>
          </article>
        ) : (
          <div className="news-empty">
            <p>Loading the latest news...</p>
            <p>We display backend headlines once they arrive.</p>
          </div>
        )}

        <div className="news-side-column">
          {videoCard ? (
            <article className="video-card">
              <div
                className="video-card__media"
                style={{
                  backgroundImage: videoCard.image ? `url(${videoCard.image})` : undefined,
                }}
              >
                <span className="video-card__play" aria-hidden="true"></span>
              </div>
              <div className="video-card__body">
                <p className="video-card__eyebrow">{videoCard.category}</p>
                <h4 className="video-card__title">{videoCard.title}</h4>
                {videoCard.excerpt && (
                  <p className="video-card__excerpt">{videoCard.excerpt}</p>
                )}
                <a href={videoCard.link} className="video-card__link">
                  Watch now
                </a>
              </div>
            </article>
          ) : (
            <article className="video-card video-card--placeholder">
              <div className="video-card__body">
                <p className="video-card__eyebrow">Video feature</p>
                <h4 className="video-card__title">Waiting for video news</h4>
                <p className="video-card__excerpt">
                  The feed will display the video story once the backend publishes it.
                </p>
              </div>
            </article>
          )}

          <article className="gallery-card">
            <div className="gallery-card__header">
              <div>
                <p className="gallery-card__eyebrow">သာမဏေများ</p>
                <h4 className="gallery-card__title">Faces showing new beginnings</h4>
              </div>
              <a href="/novices" className="gallery-card__cta">
                See all
              </a>
            </div>
            <div className="gallery-list">
              {visibleNovices.map((novice) => (
                <a
                  href={novice.link}
                  key={`${novice.name}-${novice.link}`}
                  className="gallery-item"
                >
                  <span
                    className="gallery-item__avatar"
                    style={!novice.image ? { background: novice.color } : undefined}
                  >
                    {novice.image ? (
                      <img
                        src={novice.image}
                        alt={novice.name}
                        className="gallery-item__avatar-image"
                      />
                    ) : (
                      getInitials(novice.name)
                    )}
                  </span>
                  <div className="gallery-item__detail">
                    <p className="gallery-item__name">{novice.name}</p>
                    <p className="gallery-item__role">{novice.role}</p>
                  </div>
                  <span className="gallery-item__status">{novice.status}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className="news-section__cta">
        <a href="/news" className="news-section__button">
          Read full news page
        </a>
      </div>
    </section>
  );
};

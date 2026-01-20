import React, { useEffect, useMemo, useState } from "react";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import "./videos/videos.css";

const extractYouTubeInfo = (url) => {
  if (!url) {
    return {};
  }

  try {
    const parsedUrl = new URL(url);
    let videoId = parsedUrl.searchParams.get("v");

    if (!videoId) {
      if (parsedUrl.hostname.includes("youtu.be")) {
        videoId = parsedUrl.pathname.slice(1);
      } else if (parsedUrl.pathname) {
        const segments = parsedUrl.pathname.split("/");
        videoId = segments[segments.length - 1];
      }
    }

    if (videoId) {
      return {
        videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      };
    }
  } catch (error) {
    console.warn("Unable to parse YouTube URL", url);
  }

  return {};
};

const fetchEmbeddedVideos = async (baseUrl) => {
  const response = await fetch(`${baseUrl}/embedded-videos`);
  if (!response.ok) {
    throw new Error(`Failed to fetch videos: ${response.status}`);
  }
  return response.json();
};

const VideosPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const apiBaseUrl = (
    process.env.REACT_APP_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL
  )?.replace(/\/$/, "");

  useEffect(() => {
    if (!apiBaseUrl) {
      setErrorMessage("Video service base URL is not configured.");
      setStatus("error");
      return;
    }

    let isMounted = true;

    const loadVideos = async () => {
      setStatus("loading");
      try {
        const data = await fetchEmbeddedVideos(apiBaseUrl);
        if (!isMounted) {
          return;
        }
        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
        }
        setStatus("idle");
      } catch (error) {
        if (!isMounted) {
          return;
        }
        console.error(error);
        setErrorMessage("Unable to load videos right now.");
        setStatus("error");
      }
    };

    loadVideos();

    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  const videoCards = useMemo(
    () =>
      videos.map((video) => ({
        ...video,
        ...extractYouTubeInfo(video.youtube_url),
      })),
    [videos]
  );

  const formatDate = (value) => {
    if (!value) {
      return "Just now";
    }
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return value;
    }
    return parsed.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const filteredVideos = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) {
      return videoCards;
    }
    return videoCards.filter((video) => {
      const haystack = `${video.title ?? ""} ${video.description ?? ""} ${video.tag ?? ""}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [searchTerm, videoCards]);

  const heroVideos = filteredVideos.slice(0, 2);
  const mostWatchedVideos = filteredVideos.slice(2);

  return (
    <>
      <Navigation />
      <main className="videos-page">
        <div className="videos-page__content">
          <div className="videos-page__top">
            <div>
              <p className="videos-page__eyebrow">Discover</p>
              <h1 className="videos-page__title">ရုပ်သံဖိုင်များ</h1>
              <p className="videos-page__subtitle">
                Search through the latest uploads and featured clips from the nursery.
              </p>
            </div>
            <label className="videos-page__search">
              <span>Search</span>
              <input
                type="search"
                placeholder="Search videos, tags, or stories"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          {status === "loading" && (
            <p className="videos-page__status">Loading videos…</p>
          )}

          {status === "error" && (
            <p className="videos-page__status videos-page__status--error">
              {errorMessage}
            </p>
          )}

          {status === "idle" && filteredVideos.length === 0 && (
            <p className="videos-page__status videos-page__status--empty">
              No videos match your search yet.
            </p>
          )}

          {status === "idle" && filteredVideos.length > 0 && (
            <>
              <div className="videos-page__hero">
                {heroVideos.map((video, index) => (
                  <article
                    key={video.title}
                    className={`hero-card hero-card--${index === 0 ? "primary" : "secondary"}`}
                  >
                    <div
                      className={`hero-card__media ${
                        !video.thumbnail ? "hero-card__media--placeholder" : ""
                      }`}
                      style={{
                        backgroundImage: video.thumbnail ? `url(${video.thumbnail})` : undefined,
                      }}
                    >
                      {video.thumbnail ? (
                        <button
                          type="button"
                          className="hero-card__play"
                          aria-label="Play video"
                          onClick={() => window.open(video.watchUrl, "_blank")}
                        >
                          <span />
                        </button>
                      ) : (
                        <span>preview unavailable</span>
                      )}
                    </div>
                    <div className="hero-card__meta">
                      <span>{video.duration ? `${video.duration} min` : "—"}</span>
                      <span>{video.tag || "Admin"}</span>
                    </div>
                    <h3 className="hero-card__title">{video.title}</h3>
                    <p className="hero-card__description">{video.description}</p>
                    <div className="hero-card__footer">
                      <div className="hero-card__author">
                        <img
                          src="/img/favicon.png"
                          alt="Sasana Nursery logo"
                          className="hero-card__author-avatar"
                        />
                        <div>
                          <span>Admin</span><br></br>
                          <small>{formatDate(video.created_at ?? video.createdAt)}</small>
                        </div>
                      </div>
                      <span>{video.views || "Live · just now"}</span>
                    </div>
                  </article>
                ))}
              </div>

              {mostWatchedVideos.length > 0 && (
                <>
                  <div className="videos-page__section-header">
                    <h2>Most Watched</h2>
                  </div>
                  <div className="videos-page__most-watched">
                    {mostWatchedVideos.map((video) => (
                      <article key={video.title} className="most-watched-card">
                        <div
                          className={`most-watched-card__media ${
                            !video.thumbnail ? "hero-card__media--placeholder" : ""
                          }`}
                          style={{
                            backgroundImage: video.thumbnail ? `url(${video.thumbnail})` : undefined,
                          }}
                        >
                          {video.thumbnail ? (
                            <button
                              type="button"
                              className="most-watched-card__play"
                              aria-label="Play video"
                              onClick={() => window.open(video.watchUrl, "_blank")}
                            >
                              <span />
                            </button>
                          ) : (
                            <span>preview unavailable</span>
                          )}
                        </div>
                        <div className="most-watched-card__content">
                          <h3 className="most-watched-card__title">{video.title}</h3>
                          <div className="most-watched-card__meta">
                            <div className="most-watched-card__author">
                              <img
                                src="/img/favicon.png"
                                alt="Sasana Nursery logo"
                                className="most-watched-card__author-avatar"
                              />
                              <div>
                                <span>Admin</span>
                                <small>{formatDate(video.created_at ?? video.createdAt)}</small>
                              </div>
                            </div>
                            <span>{video.duration ? `${video.duration} min` : "—"}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default VideosPage;

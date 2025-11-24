import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Team } from "./components/Team";
import { Donate } from "./components/donate";
import JsonData from "./data/data.json";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/news";
import NewsfeedPage from "./pages/newsfeed";
import PaymentAccounts from "./pages/PaymentAccounts";
import ContactPage from "./pages/contact";
import DonorsPage from "./pages/donors";
import GalleryPage from "./pages/gallery";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Footer } from "./components/footer";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePage = ({ landingPageData }) => (
  <div>
    <Home data={landingPageData.Header} />
    <Features data={landingPageData.Features} />
    <About
      aboutData={landingPageData.About}
      aimData={landingPageData.Aim}
    />
    <Team data={landingPageData.Team} />
    <Donate />
    <Footer />
  </div>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage landingPageData={landingPageData} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/newsfeed" element={<NewsfeedPage />} />
        <Route path="/accounts" element={<PaymentAccounts />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donors" element={<DonorsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<HomePage landingPageData={landingPageData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

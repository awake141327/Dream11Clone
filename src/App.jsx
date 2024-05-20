import "./App.css";
import Banner from "./components/Banners/Banner";
import Faqs from "./components/FAQ/Faqs";
import FantasyCricket from "./components/FantasyCricket/FantasyCricket";
import FantasySports from "./components/FantasySports/FantasySports";
import Footer from "./components/Footer/Footer";
import GetApp from "./components/GetApp/GetApp";
import Header from "./components/Header/Header";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import OfficialPartner from "./components/OfficialPartner/OfficialPartner";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import { TermsAndCondition } from "./components/TermsAndCondition/TermsAndCondition";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fantasy-cricket" element={<FantasyCricket />} />
          <Route path="/fantasy-sports" element={<FantasySports />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const HomePage = () => {
  return (
    <>
      <OfficialPartner />
      <HowToPlay />
      <GetApp />
      <FantasySports />
      <Faqs />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
};

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./pages/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import GDPRBanner from "../src/components/GDPRBanner";
function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/terms-conditions"
            element={
              <ScrollToTop>
                <TermsConditions />
              </ScrollToTop>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <ScrollToTop>
                <PrivacyPolicy />
              </ScrollToTop>
            }
          />
        </Routes>
        <Footer />
        <GDPRBanner />
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutTechSection from "./components/AboutTechSection";
import OurProducts from "./components/OurProducts";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import KeyFeatures from "./components/KeyFeatures";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutTechSection />
        <KeyFeatures />
        <OurProducts />
        <HowItWorks />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

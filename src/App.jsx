
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventDetails from "./components/EventDetails";
import Rounds from "./components/Rounds";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import FAQ from "./components/FAQ";
import Organisers from "./components/Organisers";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";

function App() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <About />
      <EventDetails />
      <Rounds />
      <Prizes />
      <Rules />
      <FAQ />
      <Organisers />
      <Footer />
    </>
  );
}

export default App;

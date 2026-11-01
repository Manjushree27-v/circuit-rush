
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rounds from "./components/Rounds";
import ScrollAnimations from "./components/ScrollAnimations";

function App() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <About />
      <Rounds />
    </>
  );
}

export default App;

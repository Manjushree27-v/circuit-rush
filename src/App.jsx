import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Rounds from "./components/Rounds";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rounds/>
    </>
  );
}

export default App;
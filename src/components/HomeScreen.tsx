import React from "react";
import Footer from "./Footer";
import AboutHer from "./PAGEONE/AboutHer";
import Benefits from "./PAGEONE/Benefits";
import HeaderT from "./PAGEONE/HeaderT";
import HeroT from "./PAGEONE/HeroT";
import Testimonies from "./PAGEONE/Testimonies";

const HomeScreen = () => {
  return (
    <div>
      <HeroT />
      <AboutHer />
      <Testimonies />
      <Benefits />
    </div>
  );
};

export default HomeScreen;

import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSelller from "../components/BestSelller";
import OutPolicy from "../components/OutPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSelller />
      <OutPolicy />
      <NewsLetter />
    </div>
  );
};

export default Home;

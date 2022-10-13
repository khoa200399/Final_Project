import React from "react";
import Anywhere from "./Anywhere";
import CustomCarousel from "./Carousel";
import Locations from "./Locations";

const HomePage = () => {
  return (
    <div>
      <CustomCarousel />
      <Locations />
      <Anywhere />
    </div>
  );
};

export default HomePage;

import React from "react";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Homebody from "../../components/HomeBody/HomeBody";
import Homeservices from "../../components/HomeServices/HomeServices";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Homebody />
      <Homeservices />
      <FeaturedRooms />
    </div>
  );
};

export default Home;

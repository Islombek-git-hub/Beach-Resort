import React from "react";
import { Link } from "react-router-dom";
import "./RoomsHead.css";
const RoomsHead = () => {
  return (
    <div className="rooms-head">
      <img src="images/details-4.jpeg" alt="our-rooms" />
      <div className="rooms-card">
        <h1>Our Rooms</h1>
        <Link to="/" className="hover_link">
          return home
        </Link>
      </div>
    </div>
  );
};

export default RoomsHead;

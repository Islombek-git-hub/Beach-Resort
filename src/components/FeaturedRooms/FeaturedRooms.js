import React from "react";
import Featuredroombox from "./FeaturedRoomBox";
import "./FeaturedRooms.css";
import data from "./rooms.json";

const FeaturedRooms = () => {
  return (
    <div className="featured-rooms">
      <div className="container">
        <h1>Featured Rooms</h1>
        <div className="featured-room-boxes">
          {data.map((room, i) => {
            return <Featuredroombox key={i + 10} room={room} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;

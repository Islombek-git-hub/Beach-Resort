import React, { useState } from "react";
import { Link } from "react-router-dom";
const Featuredroombox = ({ room }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="featured-room"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p className={`${!hover ? "" : "d-none"}`}>
        ${room.Price} <br /> <span>per night</span>
      </p>
      <img src={room.img_src} alt="room" />
      <div className={`hover-box ${hover ? "" : "d-none"}`}>
        <Link to={`/${room.link}`} className="hover_link">
          features
        </Link>
      </div>
      <div className="featured-room-footer">{room.type}</div>
    </div>
  );
};

export default Featuredroombox;

import React from "react";
import { useParams, Link } from "react-router-dom";

import "./Room.css";
import { useSelector } from "react-redux";

const Room = () => {
  const rooms = useSelector((state) => state.roomData);
  const { room } = useParams();
  let i;
  rooms.map((data, index) => {
    if (room === data.link) {
      i = index;
    }
  });
  return (
    <div>
      <div className="room-head">
        <img src={rooms[i].img_src} alt={rooms[i].type} />
        <div className="room-head-box">
          <h1>{rooms[i].type} Room</h1>
          <Link to="/rooms" className="hover_link">
            back to rooms
          </Link>
        </div>
      </div>
      <div className="room-body">
        <div className="container">
          <div className="details">
            <h2>Details</h2>
            <p>
              Street art edison bulb gluten-free, tofu try-hard lumbersexual
              brooklyn tattooed pickled chambray. Actually humblebrag next
              level, deep v art party wolf tofu direct trade readymade
              sustainable hell of banjo. Organic authentic subway tile cliche
              palo santo, street art XOXO dreamcatcher retro sriracha portland
              air plant kitsch stumptown. Austin small batch squid gastropub.
              Pabst pug tumblr gochujang offal retro cloud bread bushwick
              semiotics before they sold out sartorial literally mlkshk.
              Vaporware hashtag vice, sartorial before they sold out pok pok
              health goth trust fund cray.
            </p>
          </div>

          <div className="info">
            <h2>Info</h2>
            <ul>
              <li>Price: {rooms[i].Price}</li>
              <li>Size: {rooms[i].Size} SQFT</li>
              <li>Max Capacity: {rooms[i].Max_Capacity}</li>
              <li>{rooms[i].Pets ? "Pets Allowed" : "No Pets Allowed"}</li>
              <li>{rooms[i].Breakfast ? "Free Breakfast Included" : ""}</li>
            </ul>
          </div>

          <div className="extras">
            <h2>Extras</h2>
            <ul>
              <li>- Plush pillows and breathable bed linens</li>
              <li>- Soft, oversized bath towels</li>
              <li>- Full-sized, pH-balanced toiletries</li>
              <li>- Complimentary refreshments</li>
              <li>- Adequate safety/security</li>
              <li>- Internet</li>
              <li>- Comfortable beds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;

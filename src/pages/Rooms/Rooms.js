import React from "react";
import RoomsHead from "../../components/RoomsHead/RoomsHead";
import RoomsSearch from "../../components/RoomsSearch/RoomsSearch";
import Featuredroombox from "../../components/FeaturedRooms/FeaturedRoomBox";
import { useSelector } from "react-redux";
import "./Rooms.css";
const Rooms = () => {
  const rooms = useSelector((state) => state.roomData.rooms);
  return (
    <div>
      <RoomsHead />
      <RoomsSearch />
      <div className="rooms container">
        {rooms.length > 0 ? (
          rooms.map((room, i) => {
            return <Featuredroombox key={i + 100} room={room} />;
          })
        ) : (
          <h1 className="no-room">no room</h1>
        )}
      </div>
    </div>
  );
};

export default Rooms;

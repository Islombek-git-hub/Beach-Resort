import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterFun } from "../../redux/actions/action";
import "./RoomsSearch.css";
const RoomsSearch = () => {
  const [roomType, setRoomType] = useState("all");
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState(600);
  const [roomSize1, setRoomSize1] = useState(0);
  const [roomSize2, setRoomSize2] = useState(1600);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      filterFun({
        roomType,
        guests,
        price,
        roomSize1,
        roomSize2,
        breakfast,
        pets,
      })
    );
  }, [roomType, guests, price, roomSize1, roomSize2, breakfast, pets]);

  return (
    <div className="search-rooms">
      <div className="container">
        <h1>Search Rooms</h1>

        <div className="filters">
          <div className="filter RoomType select noselect">
            <p>Room Type</p>

            <select
              value={roomType}
              onChange={(e) => {
                setRoomType(e.target.value);
              }}
            >
              <option value="all">all</option>
              <option value="single">single</option>
              <option value="double">double</option>
              <option value="family">family</option>
              <option value="presidential">presidential</option>
              <option value="triple">triple</option>
            </select>
          </div>

          <div className="filter Guests select noselect">
            <p>Guest</p>
            <select
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
            >
              <option value={""}>-</option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"10"}>10</option>
            </select>
          </div>

          <div className="filter roomPrice">
            <p>
              Room Price: <span>{price}</span>
            </p>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="range"
              step={1}
              min={100}
              max={600}
            />
          </div>

          <div className="filter roomSize">
            <p>Room Size</p>
            <input
              type="number"
              value={roomSize1}
              onChange={(e) => {
                setRoomSize1(e.target.value);
              }}
            />
            <input
              type="number"
              value={roomSize2}
              onChange={(e) => {
                setRoomSize2(e.target.value);
              }}
            />
          </div>

          <div className="filter room-services">
            <div>
              <input
                type="checkbox"
                id="breakfast"
                value={breakfast}
                onChange={(e) => {
                  setBreakfast(!breakfast);
                }}
              />
              <label htmlFor="breakfast" className="noselect">
                Breakfast
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="pets"
                value={pets}
                onChange={(e) => {
                  setPets(!pets);
                }}
              />
              <label htmlFor="pets" className="noselect">
                Pets
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsSearch;

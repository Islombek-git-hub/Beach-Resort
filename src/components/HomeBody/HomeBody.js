import "./HomeBody.css";
import { Link } from "react-router-dom";

const Homebody = () => {
  return (
    <div className="home-body">
      <img src="Luxurious Rooms.webp" alt="home" />
      <div className="home-card">
        <h1>Luxurious Rooms</h1>
        <p>Delux Rooms Starting At $299</p>
        <Link to="/rooms" className="hover_link">
          Our Rooms
        </Link>
      </div>
    </div>
  );
};

export default Homebody;

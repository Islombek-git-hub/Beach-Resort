import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./HomeServices.css";
const Homeservices = () => {
  return (
    <div className="home-services">
      <div className="container">
        <h1>Services</h1>
        <div className="sercices-body">
          <div className="sercices-box">
            <span>
              <FaCocktail />
            </span>
            <h3>Free Cocktails</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              suscipit!
            </p>
          </div>

          <div className="sercices-box">
            <span>
              <FaHiking />
            </span>
            <h3>Endless Hiking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              suscipit!
            </p>
          </div>
          <div className="sercices-box">
            <span>
              <FaShuttleVan />
            </span>
            <h3>Free Shuttles</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              suscipit!
            </p>
          </div>
          <div className="sercices-box">
            <span>
              <FaBeer />
            </span>
            <h3>Strongest Beer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              suscipit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeservices;

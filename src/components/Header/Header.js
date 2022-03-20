import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
import HomeFooter from "../HomeFooter/HomeFooter";
const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h4 className="logo">
            Beach <span>Resort</span>
          </h4>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/rooms">Rooms</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default Header;

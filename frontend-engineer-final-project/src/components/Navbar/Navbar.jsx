import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <a href="#" className="logo">
        Covid ID
      </a>

      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <NavLink className="naav" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="naav" to="/global">
            Global
          </NavLink>
        </li>
        <li>
          <NavLink className="naav" to="/indonesia">
            Indonesia
          </NavLink>
        </li>
        <li>
          <NavLink className="naav" to="/provinsi">
            Provinsi
          </NavLink>
        </li>
        <li>
          <NavLink className="naav" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

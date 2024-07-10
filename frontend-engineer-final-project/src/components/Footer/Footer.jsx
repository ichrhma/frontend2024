import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="logo">
        Covid ID <p>Developed by Sipolan</p>
      </a>

      <ul>
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
    </footer>
  );
};

export default Footer;

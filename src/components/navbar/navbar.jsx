import React from "react";
import "./navbar.scss";
import logo from "/logo.svg";
import logotext from "/logo-text.svg";
import { Link, NavLink } from "react-router-dom";
import { navbar_links } from "../../constants";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <img src={logotext} alt="Logo Text" />
        </Link>
      </div>
      <nav className="navbar__menu">
        <ul>
          {navbar_links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.route}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

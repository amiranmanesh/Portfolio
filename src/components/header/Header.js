import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "/home";

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Education", to: "/education" },
    { label: "Contact", to: "/contact" },
  ];

  function changeTheme() {
    const nextTheme = theme.name === "light" ? "dark" : "light";
    props.setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <Fade top duration={800} distance="18px">
      <header className="header">
        <NavLink to={link} className="logo" aria-label="Go to home">
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
        </NavLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Toggle menu"
        >
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="active-nav-link"
                className="nav-link"
                style={{ color: theme.text }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              className="theme-toggle"
              type="button"
              onClick={changeTheme}
              aria-label="Toggle theme"
            >
              {theme.name === "dark" ? (
                <HiMoon size={18} />
              ) : (
                <CgSun size={18} />
              )}
            </button>
          </li>
        </ul>
      </header>
    </Fade>
  );
}

export default Header;

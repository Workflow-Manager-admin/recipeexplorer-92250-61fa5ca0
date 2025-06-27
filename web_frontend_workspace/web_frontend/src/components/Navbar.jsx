import React, { useContext } from "react";
import { ThemeContext } from "../App";

/**
 * PUBLIC_INTERFACE
 * Navbar for the recipe app top navigation.
 * Contains app title and theme toggle, hamburger menu on mobile.
 */
function Navbar({ openSidebar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <button
        className="navbar-button"
        onClick={openSidebar}
        style={{ display: "none" }}
        aria-label="Open Sidebar"
        id="sidebar-open-btn"
      >
        ☰
      </button>
      <span className="navbar-title">
        <span>Recipe</span> <span className="accent">Explorer</span>
      </span>
      <button
        className="navbar-theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}

export default Navbar;

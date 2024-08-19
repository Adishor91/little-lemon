import React from "react";

const Nav = () => {
    return (
        <nav className="navbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="/booking">Reservations</a></li>
          <li><a href="#orderonline">Order online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    );
};

export default Nav;
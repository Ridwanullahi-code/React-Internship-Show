import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="home">
        Home
      </NavLink>
    </header>
  );
}

export default Navbar;

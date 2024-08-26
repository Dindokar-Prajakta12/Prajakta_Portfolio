import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DizmvP_bc_4hD3DobqgI8T6pRoNOWGiKyA&s" alt="Logo" />
      </div>
      <div className={`navbar-burger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <Link to="/" className="navbar-link">About</Link>
        <Link to="/about" className="navbar-link">Education</Link>
        <Link to="/skills" className="navbar-link">Skills</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
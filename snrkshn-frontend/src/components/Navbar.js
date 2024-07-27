import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onRegisterClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Snrkshn Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">MarketPlace</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><button onClick={onRegisterClick} className="register-button">Register</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;

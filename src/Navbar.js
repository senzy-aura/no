
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo animated-navbar-logo">
        <Link to="/">Senzyy</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/deals">Deals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      
        {user && (
          <>
            <li><Link to="/account">Account</Link></li>
            <li><button className="navbar-logout-btn" style={{background:'none',border:'none',color:'#7f53ac',fontWeight:600,cursor:'pointer'}} onClick={() => { logout(); navigate('/'); }}>Logout</button></li>
          </>
        )}
      </ul>
      <div className="navbar-icons">
        <Link to="/cart" className="cart-icon" title="Cart">
          <span role="img" aria-label="cart">🛒</span>
        </Link>
        {user ? (
          <Link to="/account" className="user-icon" title="Account">
            <span role="img" aria-label="user">👤</span>
          </Link>
        ) : (
          <Link to="/login" className="user-icon" title="Login">
            <span role="img" aria-label="user">👤</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

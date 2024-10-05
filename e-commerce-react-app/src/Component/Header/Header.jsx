// ├── Header
// │   ├── Logo
// │   ├── SearchBar
// │   ├── NavigationMenu
// │   └── CartIcon


import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'//import css file
import logo from '../Header/logo.png';


function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="navigationmenu">
                <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                   <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.css';

import { FcSearch } from "react-icons/fc";

const Navbar = (props) => {
    
    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('searched');
    };

    const openSearch = () => {
        setSearch(true);
    };

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="posts">Posts</NavLink></li>
                <li><NavLink to="contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" placeholder="Search" className={searchClass} />
                    <FcSearch onClick={openSearch} className="searchIcon" size="32px"/>
                </form>  
            </div>
        </div>
    )
};

export default Navbar;
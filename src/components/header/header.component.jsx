import React from 'react';
import './header.styles.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
            <div>
                Social Media Links
            </div>
        </header>
    )
};

export default Header;
import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleToggle = () => {
        setIsNavExpanded(!isNavExpanded);
        document.body.classList.toggle('nav-expanded', !isNavExpanded); // Toggles body scroll
    };  

    return (
        <header className="primary-header">
            <div>
                <Link className='logo' to="/"><img src="/logo.png" alt="Krishna Logo" className="logo-image" /></Link>
            </div>
            <button
                className="mobile-nav-toggle"
                aria-controls="primary-navigation"
                aria-expanded={isNavExpanded}
                onClick={handleToggle}
            >
                <i className={isNavExpanded ? 'fas fa-times' : 'fas fa-bars'}></i>
            </button>
            <nav>
                <ul id="primary-navigation" className={`primary-navigation ${isNavExpanded ? 'expanded' : ''}`}>
                    <li>
                        <a href="/"><span aria-hidden='true'>00</span>Home</a>
                    </li>
                    <li>
                        <a href="#projects"><span aria-hidden='true'>01</span>Projects</a>
                    </li>
                    <li>
                        <a href="/experience"><span aria-hidden='true'>02</span>Experience</a>
                    </li>
                    <li>
                        <a href="#favourite-books"><span aria-hidden='true'>03</span>Favourite Books</a>
                    </li>
                    <li>
                        <a href="/art"><span aria-hidden='true'>04</span>Art</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand"><Link to="/">Krishna Raketla</Link></div>
            <div className="navbar-links">
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#favourite-books">Favourite Books</a>
                <a href="#art">Art</a>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <header className="primary-header">
                <div>
                    <Link className='logo' to="/">Krishna</Link>
                </div>
                <nav>
                    <ul id="primary-navigation" className='primary-navigation'>
                        <li>
                            <a href="#projects"><span aria-hidden='true'>00</span>Projects</a>
                        </li>
                        <li>
                            <a href="#experience"><span aria-hidden='true'>01</span>Experience</a>
                        </li>
                        <li>
                            <a href="#favourite-books"><span aria-hidden='true'>02</span>Favourite Books</a>
                        </li>
                        <li>
                            <a href="#art"><span aria-hidden='true'>03</span>Art</a>
                        </li>
                    </ul>
                </nav>
            </header>
    );
};

export default Navbar;
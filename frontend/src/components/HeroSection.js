import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ParticlesComponent from "./ParticlesComponent";
import '../styles/HeroSection.css';

const roles = ["Software Engineer.", "Web Developer.", "ML/AI Engineer.", "Reader.", "Painter."];

const HeroSection = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const textChangeInterval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
                setIsVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(textChangeInterval);
    }, []);

    return (
        <div className="hero">
            <ParticlesComponent />
            <div className="hero-card"> 
            <span className='hero-text'>
                Hello, I'm Krishna.<br />I'm a <span className="changing-text-container">
                    <span className={`changing-text ${!isVisible ? 'invisible' : ''}`}>
                        {roles[currentRoleIndex]}
                    </span>
                        </span>
            </span>
            </div>
        </div>
    );
}

export default HeroSection;
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import ParticlesComponent from "./ParticlesComponent";
import '../styles/HeroSection.css';

const roles = ["Software Engineer.", "Full Stack Web Developer.", "ML/AI Engineer.","Reader.", "Painter."];

const HeroSection = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const textChangeInterval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
                setIsVisible(true);
            }, 500); // Update during the invisible phase
        }, 3000); // Matches the CSS animation time

        return () => clearInterval(textChangeInterval);
    }, []);

    return (
        <>
            <ParticlesComponent />
            <div className="hero">
                <div className="hero-card"> 
                    <h1>Hello, I'm Krishna.<br />I'm a <span className={`changing-text ${!isVisible ? 'invisible' : ''}`}>{roles[currentRoleIndex]}</span></h1>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
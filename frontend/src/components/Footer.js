import React from 'react';
import '../styles/Footer.css'; // Link to your CSS file for the footer

const Footer = () => {
    return (
        <footer className="footer gradient-background">
            <div className="footer-content">
                <div className="footer-section nolinks">
                    <p>© 2024 Krishna Raketla. All rights reserved.</p>
                </div>
                <div className="footer-section">
                    <p>
                        Built with ♥ by Krishna. 
                        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                        <a href="mailto:raketla.k@northeastern.edu" target="_blank" rel="noopener noreferrer"> Contact</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
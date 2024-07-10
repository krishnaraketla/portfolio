import Navbar from "../components/Navbar";
import ParticlesComponent from "./ParticlesComponent";
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <>
            <ParticlesComponent />
            <div className="hero">
                <div className="hero-card"> 
                    {/* content */}
                </div>
            </div>
        </>
    );
}

export default HeroSection;
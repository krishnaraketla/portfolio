import Navbar from "../components/Navbar";
import '../styles/Home.css';
import HeroSection from "../components/HeroSection";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default Home;

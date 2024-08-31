import Navbar from "../components/Navbar";
import '../styles/Home.css';
import HeroSection from "../components/HeroSection";
import PageSection from "../components/PageSection";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HeroSection />
            <div className="pages-holder">
                <PageSection 
                />
            </div>
        </div>
    );
};

export default Home;
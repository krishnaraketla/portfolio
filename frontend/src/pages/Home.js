import Navbar from "../components/Navbar";
import '../styles/Home.css';
import HeroSection from "../components/HeroSection";
import PageSection from "../components/PageSection";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HeroSection />
            <PageSection 
                title="About Me"
                text={[
                    "Hi, I'm Krishna! Since September 2024, I've been working as a Software Engineering Intern at LG Energy Solutions Vertech.", 
                    "When I'm not coding, you'll often find me with a book in hand, indulging in painting, or walking around the streets of Boston shooting film.",
                    "Outside of my 40 hours per week, I'm building MyBookshelf.com, a platform designed to help users manage their book collections, discover bestsellers, and receive personalized recommendations. This project combines my love for technology and literature, allowing me to create something valuable for fellow book enthusiasts.",
                    "If you'd like to contribute to any of the projects I'm working on, or think my skills could help with something you're building, feel free to reach out. Let's build something great together!"
                ]}
            />
        </div>
    );
};

export default Home;
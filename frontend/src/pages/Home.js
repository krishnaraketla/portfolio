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
                    "When I'm not coding, you'll often find me with a book in hand (mostly fiction), indulging in painting, or walking around the streets of Boston shooting film.",
                    "If you'd like to contribute to any of the projects I'm working on, or think my skills could help with something you're building, feel free to reach out. Let's build something great together!"
                ]}
            />
            <PageSection 
                    title="Building MyBookshelf.com"
                    image="/mybookshelf.png"
                    text={[ "I'm building a platform designed to help users manage their book collections, discover bestsellers, and receive personalized niche recommendations. This project combines my love for technology and literature, allowing me to create something valuable for fellow book enthusiasts."]}
            />
            <PageSection 
                    title="Current Favorite Read"
                    image="/book.jpg"
                    text={["My current favorite read is 'Project Hail Mary by Andy Wier'. If you love space and science fiction, this book is a must read for you. Andy Wier takes the you across galaxies on a mission to save planet Earth and by the time you are done with this book you are left with awe at the universe and an existential crisis."]}
            />
        </div>
    );
};

export default Home;
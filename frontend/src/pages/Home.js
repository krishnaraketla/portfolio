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
                    title="About Me"
                    text="Hello! I'm Krishna, currently a student at Northeastern University pursuing my Master's in Computer Science. My journey in the tech world has been fueled by a passion for solving complex problems and exploring innovative solutions. When I'm not immersed in my studies, you'll often find me with a book in hand or painting. I'm currently building MyBookshelf.com, a platform designed to help users manage their book collections, discover bestsellers, and receive personalized recommendations. This project combines my love for technology and literature, allowing me to create something valuable for fellow book enthusiasts."
                />
                <PageSection 
                    title="Building MyBookshelf.com"
                    image="/mybookshelf.png"
                    text="MyBookshelf.com is a platform for managing your book collections, discovering bestsellers, and getting personalized recommendations."
                />
                <PageSection 
                    title="Current Favorite Read"
                    image="/path/to/book-image.jpg"
                    text="My current favorite read is 'The Great Gatsby'. Here is a brief review of the book: A classic novel set in the 1920s, exploring themes of wealth, society, and the American Dream."
                />
                <PageSection 
                    title="Artworks"
                    images={[
                        "/path/to/artwork1.jpg",
                        "/path/to/artwork2.jpg",
                        "/path/to/artwork3.jpg"
                    ]}
                />
            </div>
        </div>
    );
};

export default Home;
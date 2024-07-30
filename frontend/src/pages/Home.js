import Navbar from "../components/Navbar";
import '../styles/Home.css';
import HeroSection from "../components/HeroSection";
import PageSection from "../components/PageSection";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <HeroSection />
            <section className="pages-holder">
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
                    image="/book.jpg"
                    text="My current favorite read is 'Project Hail Mary by Andy Wier'. If you love space and science fiction, this book is a must read for you. Andy Wier takes the you across galaxies on a mission to save planet Earth and by the time you are done with this book you are left with awe at the universe and an existential crisis."
                />
                <PageSection 
                    title="Artworks"
                    images={[
                        "/artwork1.jpg",
                        "/artwork2.jpg",
                        "/artwork3.jpg"
                    ]}
                />
            </section>
        </div>
    );
};

export default Home;
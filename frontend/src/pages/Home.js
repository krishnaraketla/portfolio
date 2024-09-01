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
                text={
                    <>
                        <p>
                            Hi, I'm Krishna! Since September 2024, I've been working as a Software Engineering Intern at LG Energy Solutions Vertech.
                        </p>
                        <p>
                            When I'm not coding, you'll often find me with a book in hand (mostly fiction), indulging in painting, or walking around the streets of Boston shooting film.
                        </p>
                        <p>
                            If you'd like to contribute to any of the projects I'm working on, or think my skills could help with something you're building, feel free to <a href="mailto:raketla.k@northeastern.edu" target="_blank" rel="noopener noreferrer">reach out</a>. Let's build something great together!
                        </p>
                    </>
                }
            />
            <PageSection 
                title="Building MyBookshelf"
                image="/mybookshelf.png"
                text={
                    <>
                        <p>
                            I'm building a platform designed to help users manage their book collections, discover bestsellers, and receive personalized niche recommendations. This project combines my love for technology and literature, allowing me to create something valuable for fellow book enthusiasts.
                        </p>
                        <p>
                            Check it out <a href="https://www.my-book-shelf.com" target="_blank" rel="noopener noreferrer">here.</a>
                        </p>
                    </>
                }
            />
            <PageSection 
                title="Current Favorite Read"
                image="/book.jpg"
                text={
                    <>
                        <p>
                            My current favorite read is <em>'Project Hail Mary'</em> by Andy Weir. If you love space and science fiction, this book is a must-read for you. Andy Weir takes you across galaxies on a mission to save planet Earth, and by the time you are done with this book, you are left in awe of the universe and possibly facing an existential crisis.
                        </p>
                    </>
                }
            />
            <PageSection 
                title="Artworks"
                text={
                    <>
                        <p>I love painting in oil, watercolor and charcoal.</p>
                    </>
                }
                images={[
                    "/artwork1.jpg",
                    "/artwork3.jpg",
                    "/artwork2.jpg",
                    "/artwork4.jpg"
                ]}
            />
        </div>
    );
};

export default Home;
import Navbar from "../components/Navbar";
import '../styles/Projects.css';
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const workExperience = [
    {
      title: 'Software Engineer at HP Inc.',
      date: 'January 2019 - June 2022',
      description: 'Developed and maintained web applications for internal use, focusing on optimizing performance and usability.',
    },
    {
      title: 'Teaching Assistant at Northeastern University',
      date: 'September 2022 - Present',
      description: 'Assisted in teaching object-oriented programming and guided students in understanding complex programming concepts.',
    },
    // Add more items as needed
  ];

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <Timeline />
            </div>
            <Footer />
        </>
    );
};

export default Projects;
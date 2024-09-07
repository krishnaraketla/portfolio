import Navbar from "../components/Navbar";
import '../styles/Projects.css';
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

const workExperience = [
  {
    title: 'Graduate Teaching Assistant at Northeastern University',
    date: 'January 2024 - April 2024',
    description: `
      <ul>
        <li>Mentored and guided 68 students in Natural Language Processing</li>
        <li>Enhanced student understanding by addressing queries and providing detailed evaluations of their work</li>
      </ul>
    `,
  },
  {
    title: 'Intermediate Software Engineer at HP Inc.',
    date: 'January 2022 - November 2022',
    description: `
      <ul>
        <li>Administered Fax UI workflow development using QML and JavaScript, developing over 50 feature specifications</li>
        <li>Facilitated cross-functional team collaboration for design and API integration, achieving a 20% faster development cycle</li>
        <li>Spearheaded the development of critical fax features as Technical Lead, achieving a post-release bug report rate of only 4%</li>
        <li>Pioneered critical features: Schedule Fax, Forward Fax, and Fax UI for enterprise models, ensuring high reliability through unit testing</li>
        <li>Guided two interns through microservice development for the Job layer, overseeing code quality and integration</li>
      </ul>
    `,
  },
  {
    title: 'Software Engineer at HP Inc.',
    date: 'August 2019 - December 2021',
    description: `
      <ul>
        <li>Revamped fax system data management from XML to Google FlatBuffers, reducing memory overhead by 65.12%</li>
        <li>Designed a modular data collection interface in C++, reducing issue debugging time by 35%</li>
        <li>Implemented the Common Data Model (CDM) adapter design pattern for seamless communication between microservices</li>
        <li>Architected and built the Fax Modem Build Server using bash scripting, automating firmware builds and ensuring compliance</li>
        <li>Enhanced fax components' reliability by increasing unit test coverage by 40% with Google Test suites</li>
      </ul>
    `,
  },
  {
    title: 'Research and Development Intern at HP Inc.',
    date: 'January 2019 - July 2019',
    description: `
      <ul>
        <li>Automated the testing process using a binary search algorithm to identify failure commits, reducing the process time from 3-man days to 20 minutes</li>
        <li>Engineered a firmware architecture model using the C# .NET framework for printer’s native code to expedite integration of a performance profiling tool, uncovering issues in advance</li>
      </ul>
    `,
  },
];

const Experience = () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <Timeline items={workExperience} />
            </div>
            <Footer />
        </>
    );
};

export default Experience;
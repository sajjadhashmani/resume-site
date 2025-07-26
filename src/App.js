import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('about');
    const sectionRef = useRef(null);

    const profileData = {
        name: 'SAJJAD HASHMANI',
        contact: 'sajjadhashmani1@gmail.com • (682)-256-5391 • Boston, MA • US Resident',
        summary:
            'I’m a Full Stack Software Engineer with a Master’s degree in Computer Science and over 7 years of experience designing, building, and scaling secure, performant web applications. My technical stack spans both front-end and back-end development, with a strong foundation in React, Node.js, Java, and Python.\n' +
            '\n' +
            'Throughout my career, I\'ve led full lifecycle development of modern, scalable platforms—ranging from consumer-facing interfaces to backend data pipelines and APIs. I\'m passionate about crafting user-centric, accessible UIs and building resilient, cloud-native systems that solve real-world problems.\n' +
            '\n' +
            'I thrive in cross-functional teams, consistently contributing to code reviews, mentoring junior engineers, and driving architectural decisions that align with long-term product goals. I’ve recently designed systems that integrate AI, text embeddings, and knowledge graphs to enhance data intelligence and semantic search.\n' +
            '\n' +
            'Outside of coding, I’m a systems thinker who enjoys debugging complex issues, automating workflows, and optimizing for both performance and maintainability.',
        skills: {
            'Programming Languages': ['Java', 'Python', 'JavaScript', 'Node.js'],
            'Frameworks & Libraries': ['Spring Boot', 'React', 'Angular'],
            'Tools & Databases': ['MySQL', 'PostgreSQL', 'DynamoDB', 'BigQuery', 'Git', 'Jira'],
            'Cloud Platforms': ['AWS', 'GCP'],
            'Software Development': ['Agile Methodologies', 'CI/CD', 'Microservices Architecture', 'RESTful APIs'],
        },

        accomplishments: [
            '2024 Gartner Eye on Innovation Awards Runner-up (Americas)',
            '2021 Innovation Award Recipient at Paycom',
        ],
        experience: [
            {
                title: 'Senior Software Engineer Consultant',
                company: 'Verizon',
                location: 'Remote',
                duration: 'July 2023 – Present',
                description: [
                    'Designed and implemented a multi-layered knowledge graph from BigQuery logs, leveraging graph algorithms (WCC, Leiden) to semantically cluster over 100 million queries, improving data discoverability and insight generation.',
                    'Integrated GPT-based summarization and OpenAI’s \'text-embedding-5-large\' to enrich node metadata with high-dimensional semantic embeddings, enabling cosine similarity clustering that enhanced AutoBI Text-to-SQL contextual understanding and natural language query accuracy.',
                    'Led the proof-of-concept for Aible.ai, enabling natural language interaction and insight extraction from BigQuery data using Generative AI with SQL and reasoning prompt augmentation.',
                    'Managed and mentored a team of 3 developers to build data protection solutions using Apache Atlas and MicroFocus, securing data at rest across 1000+ tables to ensure compliance and data privacy.',
                    'Implemented synthetic data generation workflows that mimic production data characteristics, enabling scalable and realistic testing environments without compromising production data security or integrity.',
                    'Developed and deployed a Test Data Management solution leveraging K2View Fabric to mask and protect over 500 million records, empowering teams with secure, seamless access to test data across production and non-production environments.'
                ],
            },
            {
                title: 'Software Developer III',
                company: 'Paycom',
                location: 'Dallas, TX',
                duration: 'November 2019 – July 2023',
                description: [
                    'Optimized SQL queries for reporting by applying Common Table Expressions (CTEs), server-side pagination, and indexing, achieving up to 70% reduction in query runtime and significantly improving system performance.',
                    'Designed and developed responsive Single-Page Applications (SPAs) for appointment scheduling, product/process tracking, and call log management, enhancing operational efficiency and issue tracking.',
                    'Led peer code reviews and championed Agile methodologies to uphold high code quality standards within the development team.',
                    'Trained and mentored interns and junior developers, leading project deliveries and fostering a culture of continuous learning and collaboration.'
                ],
            },
            {
                title: 'Software Engineer Consultant',
                company: 'Verizon',
                location: 'Piscataway, NJ',
                duration: 'March 2019 – November 2019',
                description: [
                    'Led architectural revamp initiatives for machine learning projects spanning multiple Verizon technical departments, improving system scalability and integration.',
                    'Analyzed requirements and documented the current architectural landscape across Big Data, ML technologies, and VZ Connect to inform strategic technology decisions.',
                    'Designed future-proof AI/ML platform architectures applying enterprise North Star principles, aligning cross-functional teams on scalable, robust solutions.'
                ],
            }
        ],
        education: [
            {
                degree: 'Masters in Computer Science',
                university: 'The University of Texas at Arlington',
                location: 'Arlington, Texas, USA',
            },
            {
                degree: "Bachelor's in Computer Engineering",
                university: 'University of Mumbai',
                location: 'Mumbai, Maharashtra, India',
            }
        ],

        certifications: [
            'AWS Certified Cloud Practitioner 2019 – Udemy (May 2019)',
            'GDPR Compliance: Essential Training – LinkedIn (May 2023)',
            'Leadership in Tech – LinkedIn (May 2023)'
        ],
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current?.classList.add('is-visible');
                }
            },
            { threshold: 0.2 }
        );

        const current = sectionRef.current;
        if (current) {
            current.classList.remove('is-visible');
            observer.observe(current);
        }

        return () => observer.disconnect();
    }, [activeSection]);

    const renderSection = () => {
        const sectionClass = 'section card';

        switch (activeSection) {
            case 'about':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>About Me</h2>
                        <p className="summary-text">{profileData.summary}</p>
                    </div>
                );
            case 'skills':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>Skills</h2>
                        {Object.entries(profileData.skills).map(([category, items]) => (
                            <div key={category} className="skill-category">
                                <h3>{category}</h3>
                                <div className="skill-list">
                                    {items.map(item => (
                                        <span key={item} className="skill-badge">
                      {item}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'experience':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>Experience</h2>
                        {profileData.experience.map((job, index) => (
                            <div key={index} className="job-block">
                                <h3>{job.title}</h3>
                                <div className="job-header">
                                    <span className="job-meta">{job.company} – {job.location}</span>
                                    <span className="job-duration">{job.duration}</span>
                                </div>
                                <ul>
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );
            case 'education':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>Education</h2>
                        {profileData.education.map((edu, i) => (
                            <div className="edu-block" key={i}>
                                <h3>{edu.degree}</h3>
                                <p>{edu.university} – {edu.location}</p>
                            </div>
                        ))}
                    </div>
                );

            case 'certifications':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>Certifications</h2>
                        <ul>
                            {profileData.certifications.map((cert, i) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'accomplishments':
                return (
                    <div className={sectionClass} ref={sectionRef}>
                        <h2>Accomplishments</h2>
                        <ul>
                            {profileData.accomplishments.map((acc, i) => (
                                <li key={i}>{acc}</li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="app">
            <header className="header">
                <h1>{profileData.name}</h1>
                <p class="contact-info"> {profileData.contact}</p>
            </header>

            <nav className="nav">
                {['about', 'skills', 'experience', 'education', 'certifications', 'accomplishments'].map(section => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`nav-btn ${activeSection === section ? 'active' : ''}`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </nav>

            <main>{renderSection()}</main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Sajjad Hashmani. Built with React.</p>
            </footer>
        </div>
    );
};

export default App;

import React, { useState } from 'react';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGlobeAmericas
} from 'react-icons/fa';
import './App.css';

const App = () => {
    const [activeSection, setActiveSection] = useState('about');

    // GA4 Option 2: Function to handle tab switching and track the event
    const handleSectionChange = (section) => {
        setActiveSection(section);

        if (window.gtag) {
            window.gtag('event', 'select_content', {
                content_type: 'resume_section',
                item_id: section,
            });
        }
    };

    // Helper functions for tracking contact link clicks
    const trackEmailClick = () => {
        if (window.gtag) {
            window.gtag('event', 'click_email', {
                event_category: 'engagement',
                event_label: 'Header Email Link',
            });
        }
    };

    const trackPhoneClick = () => {
        if (window.gtag) {
            window.gtag('event', 'click_phone', {
                event_category: 'engagement',
                event_label: 'Header Phone Link',
            });
        }
    };

    // Helper to render inline **bold** text safely in React
    const renderFormattedText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    const profileData = {
        name: 'SAJJAD HASHMANI',
        contact: {
            email: 'sajjadhashmani1@gmail.com',
            phone: '(682) 256-5391',
            location: 'Boston, MA',
            visaStatus: 'US Resident',
        },
        summary:
            'I’m a Senior GenAI Engineer & Full Stack Software Developer with a Master’s degree in Computer Science and over 7 years of experience architecting enterprise AI platforms, Large Language Models (LLMs), Knowledge Graphs, and scalable distributed systems.\n\n' +
            'My technical stack spans cloud-native backend infrastructures (GCP/AWS), data pipelines, and responsive React web applications. I specialize in bridging LLMs with complex data ecosystems through GraphRAG retrieval engines, agentic self-healing pipelines, vector databases, and Text-to-SQL solutions.\n\n' +
            'A proven technical leader, I thrive in cross-functional teams, driving cloud-native architecture, mentoring engineering teams, and optimizing systems for long-term performance, security, and maintainability.',
        skills: {
            'Programming/Scripting Languages': ['Java', 'Python', 'JavaScript', 'Node.js', 'React'],
            'AI & Machine Learning': ['Graph RAGs', 'LLMs', 'MCP', 'Text Embeddings', 'Knowledge Graphs', 'Graph Algorithms (WCC, Leiden)'],
            'Tools & Databases': ['MySQL', 'PostgreSQL', 'DynamoDB', 'BigQuery', 'Google Spanner', 'ChromaDB', 'Neo4j'],
            'Cloud Platforms': ['AWS', 'GCP'],
            'Software Development': ['Agile Methodologies', 'CI/CD', 'Microservices Architecture', 'RESTful APIs', 'Git'],
        },
        accomplishments: [
            '2024 Gartner Eye on Innovation Awards Runner-up (Americas)',
            '2021 Innovation Award Recipient at Paycom',
        ],
        experience: [
            {
                title: 'Senior GenAI Engineer',
                company: 'Deloitte',
                location: 'Remote',
                duration: 'April 2026 – Present',
                description: [
                    '**Architected a 4-Tier Knowledge Graph on Google Spanner Graph**, modeling schemas, lineage, semantic relationships from 1B+ BigQuery query logs to power production AI-driven analytics (Text-to-SQL/AutoBI).',
                    '**Designed a Hybrid Retrieval Engine (Embedding Similarity + Graph Traversal)**, executing top-down semantic routing over domain concepts to prune schema context, reducing LLM token overhead by >90% while ensuring deterministic multi-table JOIN execution.',
                    'Integrated **OpenAI’s text-embedding-3-large and pgvector** to generate high-dimensional semantic embeddings for BigQuery schema metadata, enabling **cosine similarity clustering** that enhanced AutoBI Text-to-SQL contextual understanding and natural language query accuracy.',
                    '**Implemented an Agentic Self-Healing Feedback Loop & Guardrail Framework**, enriching graph nodes via OpenAI embeddings while leveraging database error traces to dynamically auto-correct malformed SQL queries at runtime.',
                    'Developed a **Generative AI-powered SQL Query Optimizer**, leveraging LLMs to analyze query execution plans and recommend performance improvements, resulting in up to **50% faster** query execution times.'
                ],
            },
            {
                title: 'Senior Software Engineer Consultant',
                company: 'Verizon',
                location: 'Remote',
                duration: 'July 2023 – April 2026',
                description: [
                    '**Developed an Agentic Text-to-SQL Pipeline**, utilizing LLM tool-calling and direct schema injection to convert plain-English business questions into executable PostgreSQL queries across relational domain tables.',
                    '**Engineered a Self-Correction Reflection Loop**, capturing PostgreSQL runtime exceptions and re-feeding schema context alongside error traces into the LLM to auto-correct malformed syntax and self-heal failed queries.',
                    '**Implemented Safety Guardrails & Validation Constraints**, restricting SQL generation strictly to read-only SELECT queries, enforcing AST/regex query sanitization, and setting dynamic retry limits to prevent infinite execution loops',
                    'Led the evaluation and technical integration strategy for **Aible.ai**, delivering a proof-of-concept that enabled users to chat over BigQuery data using Generative AI, structured context retrieval, and reasoning-based prompt orchestration.',
                    'Led a team of 3 engineers to design and build a scalable **synthetic data generation** pipeline that preserved production data characteristics across multiple sources, enabling realistic testing while maintaining strict **data privacy and security guarantees**.'
                ],
            },
            {
                title: 'Software Developer III',
                company: 'Paycom',
                location: 'Dallas, TX',
                duration: 'November 2019 – July 2023',
                description: [
                    'Optimized SQL queries for reporting by applying **Common Table Expressions, server-side pagination, and indexing**, achieving up to **70% reduction** in query runtime and significantly improving system performance.',
                    'Designed and developed responsive **Single-Page Applications** for appointment scheduling, product/process tracking, and call log management, enhancing operational efficiency and issue tracking.',
                    'Led peer **code reviews and championed Agile methodologies** to uphold high code quality standards within the development team.',
                    '**Trained and mentored interns and junior developers**, leading project deliveries and fostering a culture of continuous learning and collaboration.'
                ],
            },
            {
                title: 'Software Engineer Consultant',
                company: 'Verizon',
                location: 'Piscataway, NJ',
                duration: 'March 2019 – November 2019',
                description: [
                    'Led architectural revamp initiatives for **machine learning projects** spanning multiple Verizon technical departments, improving system scalability and integration.',
                    'Analyzed requirements and documented the current architectural landscape across **Big Data, ML technologies, and VZ Connect to inform strategic technology decisions.**',
                    'Designed future-proof **AI/ML platform architectures** applying enterprise **North Star principles**, aligning cross-functional teams on scalable, robust solutions.'
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

    const renderSection = () => {
        const sectionClass = 'section card is-visible';

        switch (activeSection) {
            case 'about':
                return (
                    <div key="about" className={sectionClass}>
                        <h2>About Me</h2>
                        <p className="summary-text">{profileData.summary}</p>
                    </div>
                );

            case 'skills':
                return (
                    <div key="skills" className={sectionClass}>
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
                    <div key="experience" className={sectionClass}>
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
                                        <li key={i}>{renderFormattedText(desc)}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                );

            case 'education':
                return (
                    <div key="education" className={sectionClass}>
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
                    <div key="certifications" className={sectionClass}>
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
                    <div key="accomplishments" className={sectionClass}>
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
                <h1 className="header-name">{profileData.name}</h1>

                <div className="contact-info">
                    <a
                        href={`mailto:${profileData.contact.email}`}
                        className="contact-item"
                        onClick={trackEmailClick}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaEnvelope className="icon" /> {profileData.contact.email}
                    </a>

                    <a
                        href={`tel:${profileData.contact.phone.replace(/[^\d]/g, '')}`}
                        className="contact-item"
                        target="_blank"
                        onClick={trackPhoneClick}
                        rel="noopener noreferrer"
                    >
                        <FaPhone className="icon" /> {profileData.contact.phone}
                    </a>

                    <span className="contact-item">
                        <FaMapMarkerAlt className="icon" /> {profileData.contact.location}
                    </span>

                    <span className="contact-item visa-status">
                        <FaGlobeAmericas className="icon" /> {profileData.contact.visaStatus}
                    </span>
                </div>
            </header>

            <nav className="nav">
                {['about', 'skills', 'experience', 'education', 'certifications', 'accomplishments'].map(section => (
                    <button
                        key={section}
                        onClick={() => handleSectionChange(section)}
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
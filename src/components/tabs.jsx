// Tabs.jsx
import { useState } from 'react';
import Project from './projects';
import Experience from './experience';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('bio');
    const [showWorkExperienceOnly, setshowWorkExperienceOnly] = useState(false);
    const projects = [
        {
            title: "Odysseus Academic",
            description: "Served an app displaying detailed class and instructor data (e.g., GPA, prerequisites, ratings) to over 2,000 unique users. Standardized complex, inconsistent course data to build a navigable graph of prerequisites and dependencies for 8.5K courses. Algorithmically matched 9K instructors to 160K sections, boosting data quality by resolving disparities from several sources. Designed a PostgreSQL database with Docker to manage courses, instructors, and sections for seamless data integration. Composed web pages to display historical content, and drafted a Go based API to streamline data access and management.",
            imageUrl: "/odysseus-academic.png",
            githubLink: "https://github.com/Odysseus-Academic/advisor",
            projectLink: "https://odyadvisor.com/"
        },
        {
            title: "Handwriting Classifier",
            description: "Developed a convolutional neural network in PyTorch to classify alphanumeric characters with 92% accuracy. Optimized hyperparameters of Scikit-learn’s K-Nearest Neighbors and Random Forest, achieving 75% accuracy. Adapted English dictionaries and implemented SymSpell's spell-correction algorithms in post-processing, improving overall accuracy by 5%.",
            imageUrl: "/CNN.jpg",
            githubLink: "https://github.com/LastS3cond/EMNIST-Classification-and-Post-Processing"
        },
        {
            title: "Maze Game",
            description: "Leveraged Lists, Deques, Maps, and Sets to generate a unique monster-infested maze with randomly placed doors and keys. Harnessed OOD and randomness to create and facilitate unique interactions between character and monster classes. Adapted JavaScript Canvas and HTML to create an engaging UI, where the user can select various character traits and solve the maze, fighting monsters in order to gain keys, unlock doors, and reach the maze exit.",
            imageUrl: "/maze_game.png",
            githubLink: "https://github.com/LastS3cond/BasicDungeonRPG",
            projectLink: "https://jaydonsmaze.netlify.app/"
        },
        {
            title: "Reddit Sentiment Analysis",
            description: "Collected over 10,000 Reddit comments using the Reddit ‘praw’ API for keyword-based sentiment analysis. Cleaned and tokenized data, using a Snowball Stemmer for efficient preprocessing. Trained a Naive Bayes classifier with 80% accuracy to analyze sentiment, with results visualized in a user-friendly format.",
            imageUrl: "/bayes.png",
            githubLink: "https://github.com/LastS3cond/RedditSentimentAnalysis"
        }
    ];


    const experiences = [
        {
            company: "Google",
            title: "Software Engineer Intern",
            date: "May 2025 - Aug 2025",
            description: "At Google, I developed AI infrastructure that empowered up to 10,000 leaders to make data-driven decisions by surfacing critical research insights. I built an intelligent agent with advanced search and retrieval capabilities to extract valuable artifacts—quotes, metrics, and context—from diverse document collections. This required engineering a parallelized data pipeline that processed ~20,000 research documents and generated embeddings for sophisticated artifact searching. The system integrated seamlessly into existing workflows through a carefully designed workspace add-on, ultimately delivering insights directly to leadership to inform critical internal decisions. Throughout the project, I also architected shared team infrastructure, including an embeddings database and MCP server, that improved system reliability and became foundational for additional team products.",
            imageUrl: "google.webp",
            isWorkExperience: true
        },
        {
            company: "Virginia Tech",
            title: "Research Team Lead",
            date: "Aug 2023 - Present",
            description: "Led a team of four researchers on Virginia Tech's CSGenome Team, focusing on the integration of live LLM-generated hardware descriptions on the CSGenome website. Oversaw the use of privateGPT and a custom LangChain wrapper for verbose description generation. Implemented real-time streaming with Flask, Next.js, and Server-Side Events to showcase live-generated descriptions to users, creating a UI/UX that allows non-authenticated users to view and authenticated users to generate, track queue position, and review scores. Currently exploring FastAPI for enhanced backend efficiency.",
            imageUrl: "VT.png",
            isWorkExperience: true
        },
        {
            company: "Verisign",
            title: "Software Engineer Intern",
            date: "May 2024 - Aug 2024",
            description: "Trained a customized documentation assistant and code copilot using the Mistral 7B LLM. Preprocessed 50K files from company codebases (HTML, CPP, XML) for structured LLM datasets, then fine-tuned models with QLoRA, applying supervised, unsupervised, and ORPO techniques. Reduced hallucinations using Retrieval-Augmented Generation (RAG). Documented the process in 10K lines across Jupyter notebooks, and presented the model to 200+ Verisign employees, promoting customized LLM adoption.",
            imageUrl: "Verisign.jpg",
            isWorkExperience: true
        },
        {
            company: "Virginia Tech",
            title: "Peer Academic Coach",
            date: "Aug 2023 - Aug 2024",
            description: "Mentored 20+ students, providing tailored academic and personal support. Led 8 seminars for 50+ students on time management, overcoming procrastination, and effective study strategies. Applied active listening and communication to identify student challenges and offer individualized solutions.",
            imageUrl: "VT.png",
            isWorkExperience: false
        },
        {
            company: "CodePath",
            title: "Tech Fellow",
            date: "Dec 2023 - May 2024",
            description: "Guided over 200 students on React.js concepts, such as async/await and useEffect. Mentored 24 students in building and deploying 16 unique React projects, assisting with CRUD operations, API integration, debugging, and deployment, while also addressing conceptual misunderstandings.",
            imageUrl: "codepath.png",
            isWorkExperience: false
        },
        {
            company: "Kratos Defense and Security Solutions",
            title: "Software Engineer Intern",
            date: "Jun 2023 - Aug 2023",
            description: "Collaborated with a 15-member team on a satellite communications product with ~10 million lines of C code, following Agile methodology. Optimized the PM receiver on AVX512 machines with SIMD instructions, reducing CPU usage by 40% and integrating this novel feature into the latest release. Developed and tested a new multipath fading feature in Python, then migrated it to C, ensuring stability with Google Test.",
            imageUrl: "kratos.jpg",
            isWorkExperience: true
        }
    ];

    const bioContent = (
        <div className="bio-content">
            <h2>About Me                        (<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume Here!
                    </a>)</h2>
            <p>Hello, I’m a Computer Science student at Virginia Tech with a passion for software engineering, whether I’m working in an internship, in research, or doing personal projects. My background spans machine learning, full-stack development, and low-level programming. I consistently take on mentorship and leadership roles, helping students and teams tackle complex challenges in and outside of tech. I’m also drawn to the outdoors for paddleboarding, hiking, and tennis, and I enjoy finding inspiration in new recipes to cook or bake for family and friends.
            </p>
            <div className="skills-section">
                <h3>Skills</h3>

                <h4>Programming Languages</h4>
                <ul>
                    <li className="skilled">Java</li>
                    <li className="skilled">Python</li>
                    <li className="skilled">C</li>
                    <li className="skilled">TypeScript</li>
                    <li className="skilled">Kotlin</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                    <li>C++</li>
                    <li>Assembly</li>
                    <li>Bash</li>
                </ul>

                <h4>Technologies</h4>
                <ul>
                    <li className="skilled">Flask</li>
                    <li className="skilled">React.js</li>
                    <li className="skilled">PyTorch</li>
                    <li>Node.js</li>
                    <li>Next.js</li>

                    <li>JavaScript Canvas</li>
                    <li>Svelte</li>
                    <li>JupyterLab</li>
                    <li>NumPy</li>

                    <li>TensorFlow</li>
                    <li>HuggingFace</li>
                    <li>LangChain</li>
                    <li>OneTwo</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>PostgreSQL</li>
                    <li>Linux/Unix</li>
                </ul>

                <h4>Familiar Concepts & Coursework</h4>
                <ul>
                    <li className="skilled">Computer Systems</li>
                    <li className="skilled">LLM Operations</li>
                    <li className="skilled">Agentic Development</li>
                    <li className="skilled">Full-Stack Development</li>
                    <li>REST APIs</li>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Data Science</li>
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Test-Driven Development</li>
                    <li>Computer Architecture</li>
                    <li>Agile & Scrum</li>
                </ul>
            </div>

        </div>
    );

    const experienceContent = (
        <div>
            <div className="filter-container">
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={showWorkExperienceOnly}
                        onChange={(e) => setshowWorkExperienceOnly(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    Show Work Experience Only
                </label>
            </div>
            <div className="projects-container">
                {experiences
                    .filter(exp => !showWorkExperienceOnly || exp.isWorkExperience)
                    .map((experience, index) => (
                        <Experience
                            key={index}
                            title={experience.title}
                            description={experience.description}
                            imageUrl={experience.imageUrl}
                            company={experience.company}
                            date={experience.date}
                        />
                    ))}
            </div>
        </div>
    );

    const projectsContent = (
        <div className="projects-container">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    githubLink={project.githubLink}
                    projectLink={project.projectLink}
                />
            ))}
        </div>
    );

    const contactContent = (
        <div className="contact-content">
            {/* <h2>Get In Touch</h2> */}
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <a href="mailto:jaydon.bingham.bp@gmail.com">jaydon.bingham.bp@gmail.com</a>
                </div>
                <div className="contact-item">
                    <h3>LinkedIn</h3>
                    <a href="https://linkedin.com/in/jaydon-bingham/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/jaydon-bingham/
                    </a>
                </div>
                <div className="contact-item">
                    <h3>GitHub</h3>
                    <a href="https://github.com/LastS3cond" target="_blank" rel="noopener noreferrer">
                        github.com/LastS3cond
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="tabs-container">
            <div className="tabs-header">
                <button
                    className={`tab-button ${activeTab === 'bio' ? 'active' : ''}`}
                    onClick={() => setActiveTab('bio')}
                >
                    Bio
                </button>
                <button
                    className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </button>
                <button
                    className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
                    onClick={() => setActiveTab('projects')}
                >
                    Projects
                </button>

                <button
                    className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact Me
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'bio' && bioContent}
                {activeTab === 'experience' && experienceContent}
                {activeTab === 'projects' && projectsContent}
                {activeTab === 'contact' && contactContent}
            </div>
        </div>
    );
};

export default Tabs;
// Project.jsx
const Project = ({ title, description, imageUrl, projectLink, githubLink }) => {
    return (
        <div className="general-card">
            <div className="general-image-wrapper">
                <div className="general-image-container">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="project-image"
                    />
                </div>
            </div>
            <div className="general-content">
                <h3 className="general-title">{title}&nbsp;
                    {projectLink && (
                        <p className="project-link-container">
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                (Hosted Here!)
                            </a>
                        </p>
                    )}</h3>
                <p className="general-description">{description}</p>

                <p className="general-description">
                    Visit the&nbsp;
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        GitHub
                    </a>.

                </p>
            </div>
        </div>
    );
};

export default Project;

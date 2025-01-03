import { PROJECTS } from "../constants";
import "../styles/Project.css";

{
  /* the style of the border-container is in Intro.css
  the style of the header is in About.css 
  */
}
const Project = () => {
  return (
    <div>
      <h2 id="projects" className="header">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="key-div">
            <div className="project_img_div">
              <a href={project.link}>
                <img
                  src={project.image}
                  width={320}
                  height={320}
                  alt={project.title}
                  className="img"
                />
              </a>
            </div>
            <div className="role_div">
              <h5 className="project_title">{project.title}</h5>
              <p className="project_description">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className="project_tech">
                  {tech}
                </span>
              ))} <br /><br />
              {project.btn.map((btn, index) => (
                <span key={index}>
                  {/* From Uiverse.io by adamgiebl - Smaller Version */}
                  <button className="cssbuttons-io">
                    <span>
                      {index === 0 && (
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                      <a
                        href={btn.link} // Dynamically set the link
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security best practice
                        style={{ textDecoration: 'none', color: 'white' }} // Optional: Remove underline for the link
                      >{btn.text}</a>
                    </span>
                  </button>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

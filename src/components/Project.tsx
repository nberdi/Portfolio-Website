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
                  width={272}
                  height={272}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

import "../styles/Experience.css";
import { EXPERIENCES } from "../constants";

{
  /* the style of border-container is in intro.css
      the style of header is in about.css 
      the styles of [key-div, role_div] are in project.css
  */
}
const Experience = () => {
  return (
    <div className="border-container">
      <h2 className="header">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="key-div">
            <div className="child_of_key_div">
              <p className="my-paragraph">{experience.year}</p>
            </div>
            <div className="role_div">
              <h5 className="my-heading">
                {experience.role} - {""}
                <span className="my-span">{experience.company}</span>
              </h5>
              <p className="description-paragraph">
                {experience.description1} <br />
                {experience.description2} <br />
                {experience.description3}
              </p>
              {experience.technologies.map((tech, index) => (
                <>
                  <span key={index} className="tools">
                    {tech}
                  </span>
                  {index == 4 && <br />}
                  {index == 4 && <br />}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

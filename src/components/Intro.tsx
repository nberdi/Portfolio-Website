import "../styles/Intro.css";
import { INTRODUCTION } from "../constants/index"; // about me
import profilePic from "../assets/intro2.jpeg"; // my pic
import resume from "../assets/Nauryzbek Berdi Resume.pdf";

{
  /* the style of paragraph_div is in About.css*/
}

const Intro = () => {
  return (
    <div className="border-container">
      <div className="main_div">
        <div className="full_width">
          <div className="align-center align-start-lg">
            <h1 className="name_heading">Nauryzbek Berdi</h1>
            <span className="gradient-text">Full Stack Developer</span>
            <div className="paragraph_div">
              <p className="paragraph_text">{INTRODUCTION}</p>{" "}
              {/* briefly about me*/}
            </div>
            <a href={resume}>
              <button type="button" className="btn">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <div className="full_width">
          <div className="align-center">
            <img className="my-image" src={profilePic} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

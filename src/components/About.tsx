import "../styles/About.css";
import aboutImg from "../assets/aboutme.jpg";
import { ABOUT_TEXT } from "../constants";
import { KEYWORDS_ARRAY } from "../constants";

{
  /* the styles of [
    border-container, 
    main_div, 
    full_width,
    align-center, 
    my-image, 
    paragraph_texts 
  ]    are in Intro.css*/
}
const About = () => {
  // Split the text into parts for styling
  const styledText = ABOUT_TEXT.split(" ").map((word, index) => {
    if (KEYWORDS_ARRAY.includes(word)) {
      return (
        <strong key={index} style={{ fontStyle: "italic" }}>
          <span>{word} </span>
        </strong>
      );
    }
    return `${word} `;
  });

  return (
    <div className="border-container">
      <h2 id="about" className="header">
        About <span className="me">Me</span>
      </h2>
      <div className="main_div">
        <div className="full_width">
          <div className="align-center">
            <img className="my-image" src={aboutImg} alt="About Me" />
          </div>
        </div>
        <div className="full_width">
          <div className="paragraph_div">
            <p
              className="paragraph_text"
              style={{
                fontSize: "1.4rem",
              }}
            >
              {styledText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

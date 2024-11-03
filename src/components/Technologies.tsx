import "../styles/Technologies.css";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";

{
  /* the styles of [
    border-container, 
    main_div, 
  ] are in Intro.css
  the style of the header is in About.css 
  */
}
const Technologies = () => {
  return (
    <div className="border-container">
      <h2 className="header">Tech Stack</h2>
      <div className="main_div icons_center">
        <div className="icon_div">
          <span
            style={{
              fontSize: "4.5rem",
              color: "#00599C",
            }}
          >
            <BiLogoCPlusPlus />
          </span>
        </div>
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
          className="icon_div"
        >
          <span
            style={{
              fontSize: "4.5rem",
              width: "100%",
              color: "#306998", // Blue color for the top half
              clipPath: "polygon(0 0, 100% 0%, 100% 41%, 0 41%)", // Clipping to show only the top half
            }}
          >
            <AiOutlinePython />
          </span>
          <span
            style={{
              fontSize: "4.5rem",
              width: "61.5%",
              color: "#FFD43B", // Yellow color for the bottom half
              position: "absolute",
              left: "15.6%",
              top: "16%", // Position it to cover the bottom half
              clipPath: "polygon(0 41.5%, 100% 41.5%, 100% 100%, 0 100%)", // Clipping to show only the bottom half
            }}
          >
            <AiOutlinePython />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#F7DF1E" }}>
            <IoLogoJavascript />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#06b6d4" }}>
            <RiReactjsLine />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#E44D26" }}>
            <FaHtml5 />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#1572B6" }}>
            <FaCss3Alt />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#563D7C" }}>
            <FaBootstrap />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#3B82F6" }}>
            <RiTailwindCssFill />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

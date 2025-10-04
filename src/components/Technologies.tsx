import "../styles/Technologies.css";
import { AiOutlinePython } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileSql } from "react-icons/pi";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import RESTfulAPI from "../assets/restful_api.png";
import { SiSqlite } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiJinja } from "react-icons/si";

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
          <span style={{ fontSize: "4.5rem", color: "#C7721C" }}>
            <PiFileSql />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#00599C" }}>
            <BiLogoCPlusPlus />
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
      </div>
      <br />
      <div className="main_div icons_center">
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#06b6d4" }}>
            <RiReactjsLine />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#339933" }}>
            <FaNode />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#000000" }}>
            <SiExpress />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem" }}>
            <SiFlask />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#7952B3" }}>
            <FaBootstrap />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#06B6D4" }}>
            <RiTailwindCssFill />
          </span>
        </div>
      </div>
      <br />
      <div className="main_div icons_center">
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#336791" }}>
            <SiPostgresql />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#F05032" }}>
            <FaGitAlt />
          </span>
        </div>
        <div className="icon_div">
          <img
            src={RESTfulAPI}
            alt="RESTful API"
            style={{
              width: "4.5rem",
              height: "4.5rem",
            }}
          />
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#0096C7" }}>
            <SiSqlite />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem" }}>
            <SiPrisma />
          </span>
        </div>
        <div className="icon_div">
          <span style={{ fontSize: "4.5rem", color: "#000" }}>
            <SiJinja />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

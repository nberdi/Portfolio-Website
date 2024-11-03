import "../styles/Contact.css";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

{
  /* the styles of [
    border-container, 
    main_div, 
    full_width,
    gradient-text
  ] are in Intro.css
  the style of header is in About.css 
  */
}
const Contact = () => {
  return (
    <div className="border-container">
      <h2 id="contact" className="header">
        Contact Me
      </h2>
      <div className="main_div">
        <div className="full_width">
          <div className="align-center align-start-lg">
            <h4 className="feel_free">Feel free to contact</h4>
            <div className="my_emails_div">
              <span style={{ fontSize: "2.5rem" }}>
                <IoIosMail />
              </span>
              <span className="gradient-text">berdinauryzbek@gmail.com</span>
            </div>
            <div className="my_emails_div">
              <span style={{ fontSize: "2.5rem" }}>
                <IoIosMail />
              </span>
              <span className="gradient-text">berdin@berea.edu</span>
            </div>
            <div className="social_media_links">
              <a
                className="linkedin social_media_icon"
                href="https://www.linkedin.com/in/nauryzbekberdi/"
              >
                <FaLinkedin />
              </a>
              <a
                className="github social_media_icon"
                href="https://github.com/nberdi"
              >
                <FaGithub />
              </a>
              <a
                className="instagram social_media_icon"
                href="https://www.instagram.com/berdiyev.kz/"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="full_width">
          <div className="align-center">
            <div>
              <h1 className="send_email_text">Send Email</h1>
              <form action="https://formspree.io/f/xjkvyglq" method="POST">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  name="Message"
                  placeholder="Message"
                  required
                ></textarea>
                <button className="send_button" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

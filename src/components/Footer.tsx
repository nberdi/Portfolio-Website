import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <nav className="bottom_navbar">
          <ul className="navbar_ul">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#tech">Tech</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
        <p>&copy;2025 Nauryzbek Berdi | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;

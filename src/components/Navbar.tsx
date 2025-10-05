import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="top_nav">
        <h1 className="logo">NB</h1>
        <ul>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
          <li>
            <a href="#tech">Tech</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#" className="nav-link scrollto active">
                <i className="bi bi-house"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bi bi-person"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bi bi-file-earmark"></i> <span>Resume</span>
              </a>
            </li>
            {/* <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li> */}
            <li>
              <a href="#projects" className="nav-link scrollto">
                <i className="bi bi-file-spreadsheet"></i> <span>projects</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bi bi-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

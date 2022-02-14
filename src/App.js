import "./index.css";
import "./css/new.css"
import "./css/style.css"
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skill from "./Sections/Skill";
import Projects from "./Sections/Projects";
// import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Resume from "./Sections/Resume";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"

function App() {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <>
    <Navbar/>
    <Hero/>

  <main id="main">
    <div id="about" data-aos="zoom-in-up" data-wow-delay="1s">
    <About/>
    </div>
    <Skill/>
    <div id="resume">
    <Resume/>
    </div>
    <div id="projects">
    <Projects/>
    </div>
    {/* <Testimonials/> */}
    <div id="contact" data-aos="zoom-in-up" data-wow-delay="1s">
    <Contact/>
    </div>
  </main>

  <footer id="footer" data-aos="zoom-in-up" data-wow-delay="1s">
    <div className="container">
      <h3>Rupin Vijan</h3>
      <p>Follow Me On</p>
      <div className="social-links">
        {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
        <a href="https://www.facebook.com/profile.php?id=100011423601329" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/rupin_vijan/" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://github.com/RupinVijan" className="google-plus"><i className="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/rupin-v-980b63118/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="copyright">
        &copy; Copyright <a href="/"><strong><span>Rupin</span></strong></a>. All Rights Reserved
      </div>
      <div className="credits">
        
      </div>
    </div>
  </footer>

    </>
  );
}

export default App;

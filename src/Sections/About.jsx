import React from "react";
import mypic from "../img/mypic.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Me</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={mypic} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Web Developer</h3>
              <p className="fst-italic">
                My Name is Rupin and I'm currently a student of B.Tech(I.T) at
                Guru Tegh Bahadur Institute of Technology.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>15 July 2002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>rupinvijan.github.io/portfolio</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                      <span>Delhi, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Tech Known:</strong> <span>MERN Stack</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 75033 74695</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> <span>rupinvijan@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              I am a MERN Stack Developer and a JavaScript enthusiast. In addition to JavaScript, I've worked with Next.js, Node.js, and React.js. I am particularly passionate about creating Python and JavaScript backend APIs. My passion is making computers more effective on your side by relieving you of repetitive tasks through automotive processes by enabling them to work on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

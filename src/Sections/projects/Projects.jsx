import React from "react";
import "./css/projects.css";
import portfolio from'./images/portfolio.jpg'
import social from'./images/social.jpg'
import sam from'./images/sampleoutput.png'
import wapp from'./images/wapp.jpg'
import Prok from "./components/Prok";

export default function Projects() {
  return (
    <>
      <h1 className="cen">Projects</h1> <br/>
    <div className="proj">
      <Prok name="Social Media Website" desc="This is a website made using MERN Stack where you can add user delete user and post photos , videos and status. This I've made with my team for a hackathon and won."  git="https://github.com/RupinVijan/The-Social-Gamer" img={social} />
      <Prok name="Portfolio"  desc="This is a website made using React.js where the pakages like typical , emailjs-com and many more are used."  git="https://github.com/RupinVijan/portfolio" img={portfolio} />
      <Prok name="Text to handwriting" desc="This is a system software made with python using pyWhatKit a famous python library which changes hard coded text to handwritten text. " git="https://github.com/RupinVijan/text-to-handwriting" img={sam} />
      <Prok name="Beautiful Weather App" img={wapp}  desc="This is a project made in Node.js and Express.js. The data for the weather is fetched by an online api (The open weather Api)."  git="https://github.com/RupinVijan/weather-app-backend" />
      
    </div>
    </>
  );
}

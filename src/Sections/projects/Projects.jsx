import React from "react";
import "./css/projects.css";
import candy from'./images/candy.PNG'
import social from'./images/social.PNG'
import sam from'./images/sampleoutput.png'
import bank from'./images/bank.PNG'
import Prok from "./components/Prok";

export default function Projects() {
  return (
    <>
      <h1 className="cen">Projects</h1> <br/>
    <div className="proj">
      <Prok name="Social Media Website" desc="This is a website made using MERN Stack where you can add user delete user and post photos , videos and status. This I've made with my team for a hackathon and won."  git="https://github.com/RupinVijan/The-Social-Gamer" img={social} />
      <Prok name="Banking Management System Website"  desc="This is a website made using MERN Stack where the backend is purely api based and shows data of all bank members and you can transfer money through it."  git="https://github.com/RupinVijan/bank-mern-app" img={bank} />
      <Prok name="Text to handwriting" desc="This is a system software made with python using pyWhatKit a famous python library which changes hard coded text to handwritten text. " git="https://github.com/RupinVijan/text-to-handwriting" img={sam} />
      <Prok name="Rupin Crush Candy" img={candy}  desc="This is a project made in React.js and is a clone of a very famous mobile app game candy crush."  git="https://github.com/RupinVijan/rupin-crush-candy" />
      
    </div>
    </>
  );
}

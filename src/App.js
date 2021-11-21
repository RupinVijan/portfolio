import "./index.css";
import Contact from "./Sections/contact me/Contact";
import Home from "./Sections/home/Home";
import Navbar from "./Sections/navbar/Navbar";
import Projects from "./Sections/projects/Projects";
import Skill from "./Sections/skills/Skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="scroll">
        <div id="one"><Home /></div>
        <div id="two"><Skill /></div>
        <div id="three"><Projects /></div>
        <div id="four"><Contact /></div>
          
          
          
          
      </div>
    </>
  );
}

export default App;

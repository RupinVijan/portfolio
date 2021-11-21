import React from "react";
import "./css/skill.css";
import mypic from './images/mypic.jpg'

export default function Skill() {
  return (
    <div>
		<section id="about">
			<div class="container">
				<h2>a little about me...</h2>
				<div class="row info">
					<div class="col-sm-8 apex" >
							I'm currently studying Software Engineering at Guru Tegh Bahadur Institute of Technology having just completed my 1st year.I am a JavaScript enthusiast and have worked on many technologies of JavaScript like React.js , Node.js and many more. I obsess over the backend API creation part in JavaScript and Python both and am passionate in getting computers to more effectively work on your side by freeing you of the burdens of carrying out repetitive tasks through automative processes.
						<span class="signature">.Rupin Vijan</span>
					</div>

					<div class="">
						<img src={mypic} alt="Rupin Vijan" class="img-responsive img-circle myimg" />
					</div>
				</div>
				
				<div id="skill-set">
					<h3>Skills</h3>
					<ul class="vertical-list">
						<li>
							<ul class="vertical-list skills" id="web-development-skills">
								<li>HTML-CSS-JavaScript</li>
								<li>Python-Flask</li>
								<li>React.js</li>
							</ul>
						</li>
						<li>
							<ul class="vertical-list skills" id="automation-skills">
								<li>Mern Stack</li>
							</ul>
						</li>

						<li>
							<ul class="vertical-list skills" id="misc-skills">
								<li>Python</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>
    </div>
  );
}

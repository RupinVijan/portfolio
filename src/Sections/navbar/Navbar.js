import React from "react";
import "./navbar.css";
import rupin from "./RUPIN (1).png";
export default function Navbar() {
  return (
      <nav>
        <div class="logo">
          <img src={rupin} alt="Logo Image" />
        </div>
        <div
          class="hamburger"
          onClick={() => {
            const navLinks = document.querySelector(".nav-links");
            const links = document.querySelectorAll(".nav-links li");
            navLinks.classList.toggle("open");
            links.forEach((link) => {
              link.classList.toggle("fade");
            });
            document.querySelector(".hamburger").classList.toggle("toggle");
          }}
        >
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#one">Home</a>
          </li>
          <li>
            <a href="#two">About Me</a>
          </li>
          <li>
            <a href="#three">Projects</a>
          </li>
          <li>
            <a  href="#four">Contact Me</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1qoUeIAYQvHJ7ftQ8Te_7ozvlrGwpuWyI/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
  );
}

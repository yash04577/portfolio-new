import React from 'react';
import './Portfolio.css'; // Create a Portfolio.css file for styling

function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-content">
          <h1>Prakash Bhatt</h1>
          <p>Full Stack Developer</p>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="section about">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            Hello, I'm Prakash Bhatt, a passionate full-stack developer with a
            knack for creating robust and user-friendly web applications. I enjoy
            solving complex problems and turning ideas into reality. I'm skilled in
            React, Node.js, and various other technologies.
          </p>
          <p>
            I'm always eager to learn and stay updated with the latest industry
            trends. Let's build something amazing together!
          </p>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-content">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>A brief description of Project 1.</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>A brief description of Project 2.</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>A brief description of Project 3.</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
             <div className="project-card">
              <h3>Project 4</h3>
              <p>A brief description of Project 4.</p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-content">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me for any inquiries or collaborations.</p>
          <div className="contact-info">
            <p>Email: example@email.com</p>
            <p>LinkedIn: linkedin.com/in/example</p>
            <p>GitHub: github.com/example</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Prakash Bhatt. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
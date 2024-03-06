import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <section id="projects">
        <div class="custom-shape-divider-top-1639338384">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <h2>Projects</h2>
        <div class="projects-list">
         
         
          <div class = "card">
            {/* <img src="./Images/Movieapp.png" alt=""> */}
            <div class="card-content">
              <h3>
                Movie App
              </h3>
              {/* <a href="https://movie-imdb-react.netlify.app/" id="link-icon" target="_blank"><i class="ri-links-line"></i></a>
              <a href="https://github.com/thegoutampatel/Movieapp" id="card-github" target="_blank"><i class="ri-github-line"></i></a> */}
              <div id="tech">
                <h4>Tech ▻</h4>
                <i class="ri-html5-fill"></i>
                <i class="ri-css3-fill"></i>
                <p>ReactJs</p>
              </div>
            </div>
          </div>
        
       </div>
    </section>
  )
}

export default Projects
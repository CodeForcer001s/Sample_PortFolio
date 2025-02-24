import React from 'react';
import './Home.css';
import image from "../../assets/image.jpg"

const Home = () => {
  return (
    <section className='homelab' id="home">
      <div className="home-content">
        <h1>Hi Im <span>Jegan</span> </h1>
        <h3>
          I'm an aspiring <span>Full-Stack Developer</span>
        </h3>
        <p>I am working on my skills in full stack development and i am interested in building applications from the ground up. I intend to specialize in backend development however frontend development is also my area of interests. If required i can be flexible to work as a SRE as well. Working on my own Anime Website.</p>

        <div className="social-icons">
          <a href="#">
            <i className='bx bxl-github'></i>
          </a>

          <a href="#">
            <i className='bx bxl-linkedin-square'></i>
          </a>

          <a href="#">
            <i className='bx bxl-instagram-alt'></i>
          </a>

          <a href="#">
            <i className='bx bxl-twitter'></i>
          </a>

        </div>

        <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="#contact" className="btn">Contact</a>
        </div>
      </div>

      <div className='my-img'>
        <img src={image} alt="Toji Fushiguro"></img>
      </div>
    </section>
  )
}

export default Home

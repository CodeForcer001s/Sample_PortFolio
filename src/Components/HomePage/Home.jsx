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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime quis voluptates optio molestias eligendi quo, amet, illo accusantium ab enim. Saepe suscipit magnam porro consequuntur consectetur, pariatur voluptatum. Voluptas similique dolores voluptatem esse.</p>

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

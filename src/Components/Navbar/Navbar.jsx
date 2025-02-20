import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
        <header className='headerTag'>

            <a href="#home" className="logo">
                S <span>Jegannath</span>
            </a>

            <i className="bx bx-menu" id="menu-icon" ></i>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Service</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </nav>

            <button className="gradient-btn"> Contact Me </button>

        </header>

  )
}

export default Navbar

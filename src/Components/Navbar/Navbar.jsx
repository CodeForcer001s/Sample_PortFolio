import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
        <header className='headerTag'>

            <a href="#home" className="logo">
                S <span>Jegannath</span>
            </a>

            <i className="bx bx-menu" id="menu-icon" ></i>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/tech">Tech</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contacts">Contacts</a>
            </nav>

            <button className="gradient-btn"> Contact Me </button>

        </header>

  )
}

export default Navbar

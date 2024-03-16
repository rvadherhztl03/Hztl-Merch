import React from 'react';
import ReactPlayer from 'react-player';

function HeroBanner() {
  return (
    <>
      <section id="home">
        <header>
          <a href="#" className="logo">
            Horizontal Merchendise
          </a>
        </header>
        <div className="glass" />
        <div className="content">
          <h2>
            Happiness... <br />
            <span>Crystal Clear Sky!!!</span>
          </h2>
        </div>

        <ReactPlayer url='https://www.youtube.com/watch?v=IaWhyFOyIs0' loop playing={true} width='100vw'
          height='100vw'/>
          
        <ul className="social">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
        <ul className="navigation">
          <li>
            <div className="bigNav">Home</div>
            <a className="hoverable" href="#home">
              Home
            </a>
          </li>
          <li>
            <div className="bigNav">Tour</div>
            <a className="hoverable" href="#tour">
              Tour
            </a>
          </li>
          <li>
            <div className="bigNav">About Us</div>
            <a className="hoverable" href="#about">
              About Us
            </a>
          </li>
          <li>
            <div className="bigNav">Team</div>
            <a className="hoverable" href="#team">
              Our Team
            </a>
          </li>
          <li>
            <div className="bigNav">Coming Soon</div>
            <a className="hoverable" href="#ComingSoon">
              Coming Soon
            </a>
          </li>
          <li>
            <div className="bigNav">Our Products</div>
            <a className="hoverable" href="#products">
              Our Products
            </a>
          </li>
          <li>
            <div className="bigNav">Contact</div>
            <a className="hoverable" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default HeroBanner

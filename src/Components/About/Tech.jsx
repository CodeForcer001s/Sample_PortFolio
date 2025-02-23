import React from 'react';
import './Tech.css'; // You can place your CSS in a separate file or use inline styles for the same effect
import linux from '../../assets/project1.png'

const Tech = () => {
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName('card');
    Array.from(cards).forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <div className="raihan">
    <div id="cards" onMouseMove={handleMouseMove} className="bodies">
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <img src={linux} alt="linux" height={124} width={124}/>
            <span><h1>Linux</h1></span>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="card-image">
            <h1>Place the image here</h1>
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <i className="fa-duotone fa-apartment"></i>
              <div className="card-info-title">
                <h3>Apartments</h3>
                <h4>Places to be apart. Wait, what?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tech;

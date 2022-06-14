import React from 'react';
import style from './About.module.css';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';
import logo3 from '../assets/images/CSS.jpg';
import logo4 from '../assets/images/JS.jpg';
import logo5 from '../assets/images/Postgre.jpg';
import logo6 from '../assets/images/Express.jpg';
import logo7 from '../assets/images/HTML.jpg';

function move() {
  var elem = document.getElementById('myBar');
  var width = 50;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

const About = () => {
  return (
    <div className={style.background}>
      <h1 className={style.heading}>My Skills</h1>
      <div>
        <img src={logo} width='100' alt='react logo' />
        <img src={logo2} width='100' alt='redux logo' />
        <img src={logo3} width='100' alt='CSS logo' />
        <img src={logo4} width='100' alt='Javascript logo' />
        <img src={logo5} width='100' alt='PostgreSQL logo' />
        <img src={logo6} width='100' alt='Express logo' />
        <img src={logo7} width='100' alt='HTML logo' />
      </div>
      <br />
      <h2>Javascript</h2>
      <div className='w3-light-grey' style={{ width: '40%' }}>
        <div
          id='myBar'
          className='w3-container w3-green w3-center'
          style={{ width: '20%' }}
        >
          20%
        </div>
      </div>
      <br />
      <button class='w3-button w3-green' onClick={() => move()}>
        Click Me
      </button>
    </div>
  );
};

export default About;

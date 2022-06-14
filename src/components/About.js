import React from 'react';
import style from './About.module.css';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';
import logo3 from '../assets/images/CSS.jpg';
import logo4 from '../assets/images/JS.jpg';
import logo5 from '../assets/images/Postgre.jpg';
import logo6 from '../assets/images/Express.jpg';
import logo7 from '../assets/images/HTML.jpg';

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
    </div>
  );
};

export default About;

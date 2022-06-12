import React from 'react';
import style from './About.module.css';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';

const About = () => {
  return (
    <div className={style.background}>
      <h1 className={style.heading}>My Skills</h1>
      <div>
        <img src={logo} width='100' alt='react logo' />
        <img src={logo2} width='100' alt='redux logo' />
      </div>
    </div>
  );
};

export default About;

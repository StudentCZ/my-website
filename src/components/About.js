import React from 'react';
import style from './About.module.css';
import logo from '../assets/images/React.jpg';

const About = () => {
  return (
    <div className={style.background}>
      <h1 className={style.heading}>My Skills</h1>
      <div>
        <img src={logo} width='100' alt='react logo' />
      </div>
    </div>
  );
};

export default About;

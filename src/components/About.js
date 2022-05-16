import React from 'react';
import style from './About.module.css';
import WorkPic from '../assets/images/Workpic1.jpg';

const About = () => {
  return (
    <div className={style.background}>
      <div>
        <img className={style.pic} src={WorkPic} alt='myself' />
      </div>
    </div>
  );
};

export default About;

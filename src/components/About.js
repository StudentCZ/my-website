import React from 'react';
import style from './About.module.css';
import WorkPic from '../assets/images/Workpic1.jpg';

const About = () => {
  return (
    <div className={style.background}>
      <div className={style.pic_div}>
        <img className={style.pic} src={WorkPic} alt='myself' />
        <p className={style.p}>Hello there, thanks for checking out my site.</p>
      </div>
    </div>
  );
};

export default About;

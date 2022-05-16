import React from 'react';
import style from './About.module.css';
import WorkPic from '../assets/images/Workpic1.jpg';

const About = () => {
  return (
    <div className={style.background}>
      <div className={style.pic_div}>
        <img className={style.pic} src={WorkPic} alt='myself' />
        <p className={style.p}>
          Hello there, thanks for checking out my site. My name is Chao Zhou and
          I am Software Engineer/Developer. I graduated from Fullstack Academy
          where i spent 4 months learning the PERN stack along with other
          technologies.
        </p>
      </div>

      <div className={style.test}>Hello</div>
    </div>
  );
};

export default About;

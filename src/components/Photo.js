import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Photo.module.css';

const Photo = () => {
  return (
    <div className={style.background} id='about'>
      <div className={style.container}>
        <img className={style.image} src={WorkPic} alt='myself' />
        <div className={style.textBox}>
          <h1 className={style.header}>HI, I'M CHAO</h1>
          <p className={style.text}>
            I am a programmer from New York City. Having had experience working
            with a diverse population including people with special needs. I
            have developed the skills needed to work well with others,
            communicate effectively, be patient and empathetic, and be open to
            others ideas and insights. As a result, working in the tech industry
            will allow me to have a great and positive impact on many.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;

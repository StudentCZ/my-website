import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Photo.module.css';

const Photo = () => {
  return (
    <div className={style.background} id='about'>
      <div className={style.container}>
        <img className={style.image} src={WorkPic} alt='myself' />
        <div className={style.textBox}>
          <span className={style.header}>HI, I'M CHAO</span>
          <p className={style.text}>
            Having worked with a diverse population including people with
            special needs throughout my working career, learning how to work
            with others, communciate effectively, compassion, empathy, being
            patient and learning from others. I believe that working in the tech
            industry will allow me to have a positive and greater impact on more
            people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;

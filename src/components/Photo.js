import React from 'react';
import WorkPic from '../assets/images/new-photo.png';
import style from './Photo.module.css';

const Photo = () => {
  return (
    <div className={style.background} id='about'>
      <div className={style.container}>
        <div>
          <img className={style.image} src={WorkPic} alt='myself' />
        </div>
        <div className={style.textBox}>
          <h1 className={style.header}>HI, I'M CHAO</h1>
          <p className={style.text}>
            I am a programmer from New York City. My previous experience is with
            working with a diverse population of people including those with
            special needs. Because of that, I have developed the skills needed
            to work well with others, communicate effectively, be patient and be
            open to others ideas. As a result, working in the tech industry will
            allow me to have a great and positive impact on many.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Photo;

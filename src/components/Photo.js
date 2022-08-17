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
          <p className={style.text}>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;

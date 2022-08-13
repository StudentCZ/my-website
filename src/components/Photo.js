import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Photo.module.css';

const Photo = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <img className={style.image} src={WorkPic} alt='myself' />
        <div className={style.col2}>
          <div className={style.textBox}>
            <span className={style.text}>HI, I'M CHAO</span>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;

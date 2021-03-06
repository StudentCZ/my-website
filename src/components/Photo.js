import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Photo.module.css';

const Photo = () => {
  return (
    <div className={style.background}>
      <div className={style.twoCol}>
        <div className={style.col1}>
          <img className={style.image} src={WorkPic} alt='myself' />
        </div>
        <div className={style.col2}>
          <div className={style.textBox}>
            <label className={style.header}>
              <span></span> Wonder
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;

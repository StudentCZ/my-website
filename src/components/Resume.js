import React from 'react';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <div className={style.contact} id='resume'>
      <div className={style.borderBox}>
        <div className={style.contactImagesBox}>
          <img
            className={style.images}
            src='https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg'
            alt='resume'
          />
        </div>
        <div className={style.headingBox}>
          <span className={style.headingText}>RESUME</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;

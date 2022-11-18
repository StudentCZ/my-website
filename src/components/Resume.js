import React from 'react';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <div className={style.background} id='resume'>
      <div>
        <h1 className={style.headingText}>RESUME</h1>
      </div>

      <div className={style.borderBox}></div>
    </div>
  );
};

export default Resume;

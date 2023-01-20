import React from 'react';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <div className={style.contact} id='resume'>
      <div className={style.borderBox}>
        <h1>Hello</h1>
        <div className={style.headingBox}>
          <span className={style.headingText}>RESUME</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;

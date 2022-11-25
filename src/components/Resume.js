import React from 'react';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <div className={style.contact} id='resume'>
      <div className={style.contactBox}>
        <div className={style.headingBox}>
          <span className={style.headingText}>RESUME</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;

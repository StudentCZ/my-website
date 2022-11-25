import React from 'react';
import style from './Resume.module.css';

const Resume = () => {
  return (
    <div className={style.contact} id='contact'>
      <div className={style.contactBox}>
        <div className={style.headingBox}>
          <span className={style.headingText}>CONTACT ME</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;

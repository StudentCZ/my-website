import React from 'react';
import style from './ProjectImageBar.module.css';
import image from './../assets/images/P1.png';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.containerOne}>
        <img src={image} alt='Project1' className={style.projectOneImage} />

        <div className={style.projectOneText}>
          <span className={style.header1}>Project</span>
          <p>Hello</p>
        </div>
      </div>
      <div className={style.containerTwo}>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </>
  );
};

export default ProjectImageBar;

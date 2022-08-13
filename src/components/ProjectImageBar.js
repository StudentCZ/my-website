import React from 'react';
import style from './ProjectImageBar.module.css';
import image from './../assets/images/P1.png';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.containerOne}>
        <img src={image} alt='Project1' className={style.projectOneImage} />

        <div className={style.projectOneText}>
          <span className={style.header1}>SHOULDA COULDA</span>
          <p className={style.text1}>
            Shoulda Coulda is an app that helps users be more financial aware of
            their spending habits
          </p>
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

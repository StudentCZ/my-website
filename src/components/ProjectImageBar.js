import React from 'react';
import style from './ProjectImageBar.module.css';
import image1 from './../assets/images/P1.png';
import image2 from './../assets/images/P2.png';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.containerOne}>
        <img src={image1} alt='Project1' className={style.projectImage} />

        <div className={style.projectText}>
          <span className={style.header1}>SHOULDA COULDA</span>
          <p className={style.text1}>
            Shoulda Coulda is an app that helps users be more financial aware of
            their spending habits
          </p>
        </div>
      </div>
      <div className={style.containerTwo}>
        <img src={image2} alt='Project2' className={style.projectImage} />
        <div className={style.projectText}>Hello</div>
      </div>
    </>
  );
};

export default ProjectImageBar;

import React from 'react';
import style from './Project.module.css';
import P1 from '../assets/images/P1.png';

const Project = () => {
  return (
    <div>
      <div className={style.text}>My Projects</div>
      <div>
        <figure>
          <img
            className={style.project_img}
            src={P1}
            alt='Shoulda Coulda Project'
          />

          <figcaption className={style.figcaption}>Hello</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Project;

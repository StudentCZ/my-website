import React from 'react';
import style from './ProjectImageBar.module.css';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.containerOne}>
        <div className={style.projectOneImage}>Hello</div>
        <div className={style.projectOneText}>Hello</div>
      </div>
      <div className={style.containerTwo}>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </>
  );
};

export default ProjectImageBar;

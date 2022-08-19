import React from 'react';
import style from './ProjectSkillBar.module.css';

const ProjectSkillBar = () => {
  return (
    <>
      <div className={style.container}>
        <div>
          <h2 className={style.skill}>Javascript</h2>
        </div>
        <div className={style.progress}>
          <div className={style.progressBar}>
            <span>75%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSkillBar;

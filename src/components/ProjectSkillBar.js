import React from 'react';
import style from './ProjectSkillBar.module.css';

const ProjectSkillBar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.skillCol1}>
          <div>
            <h2 className={style.skill}>Javascript</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSkillBar;

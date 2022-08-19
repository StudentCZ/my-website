import React from 'react';
import style from './ProjectSkillBar.module.css';

const ProjectSkillBar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.skillCol1}>
          <div>
            <h2>Javascript</h2>
          </div>
          <div
            className='w3-container w3-round w3-blue'
            style={{ width: '25' }}
          >
            25%
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSkillBar;

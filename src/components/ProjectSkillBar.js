import React from 'react';
import style from './ProjectSkillBar.module.css';

const ProjectSkillBar = () => {
  return (
    <>
      <div className={style.skillBar}>
        <div className={style.skillContainer}>
          <div className={style.skillCol1}>
            <div>
              <h2>Javascript</h2>
              <div className='w3-light-grey w3-round'>
                <div
                  className='w3-container w3-round w3-blue'
                  style={{ width: '25' }}
                >
                  25%
                </div>
              </div>
              <h2>HTML</h2>
            </div>
          </div>
          <div className={style.skillCol2}>
            <h2>React</h2>
          </div>
        </div>
      </div>
      <div className={style.lineDiv}>
        <hr className={style.line} />
      </div>
    </>
  );
};

export default ProjectSkillBar;

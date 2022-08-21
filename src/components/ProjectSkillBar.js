import React from 'react';
import style from './ProjectSkillBar.module.css';

const ProjectSkillBar = () => {
  return (
    <>
      <div className={style.container}>
        <div>
          <h2 className={style.skill}>Javascript</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>HTML</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>CSS</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>React</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>Express</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>Redux</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className={style.skill}>PostgreSQL</h2>
          <div className={style.progress}>
            <div className={style.progressBar}>
              <span className={style.progressBarText}>75%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSkillBar;

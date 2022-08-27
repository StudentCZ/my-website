import React from 'react';
import style from './ProjectImageBar.module.css';
import image1 from './../assets/images/P1.png';
import image2 from './../assets/images/P2.png';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.textLink}>
        <a
          className={style.readMore}
          href='https://shouldacoulda.herokuapp.com/'
          rel='noreferrer'
          target='_blank'
        >
          Go To Site ->
        </a>
      </div>
      <div className={style.containerOne}>
        <img src={image1} alt='Project1' className={style.projectImage} />

        <div className={style.projectText}>
          <h2 className={style.header}>SHOULDA COULDA</h2>
          <p className={style.text}>
            Shoulda Coulda is an app that helps users be more financial aware of
            their spending habits
          </p>
        </div>
      </div>

      <div className={style.textLink2}>
        <a
          className={style.readMore}
          href='https://animegenx.herokuapp.com/'
          rel='noreferrer'
          target='_blank'
        >
          Go To Site ->
        </a>
      </div>
      <div className={style.containerTwo}>
        <img src={image2} alt='Project2' className={style.projectImage} />
        <div className={style.projectText}>
          <h2 className={style.header}>ANIME GEN</h2>
          <p className={style.text}>
            Anime Gen is an app that will generate an anime/show from the user
            created list
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectImageBar;

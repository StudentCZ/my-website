import React from 'react';
import style from './ProjectImageBar.module.css';
import image1 from './../assets/images/P1.png';
import image2 from './../assets/images/P2.png';
import arrow from './../assets/images/arrow.svg';

const ProjectImageBar = () => {
  return (
    <>
      <div className={style.containerOne}>
        <img src={image1} alt='Project1' className={style.projectImage} />

        <div className={style.projectText}>
          <h2 className={style.header}>SHOULDA COULDA</h2>
          <p className={style.text}>
            Shoulda Coulda is an app that helps users be more financial aware of
            their spending habits
          </p>
          <div className={style.textLink}>
            <a
              className={style.readMore}
              href='https://shouldacoulda.fly.dev/'
              rel='noreferrer'
              target='_blank'
            >
              Go To Site <img className={style.arrow} src={arrow} alt='arrow' />
            </a>
          </div>
        </div>
      </div>

      <div className={style.containerOne}>
        <img src={image1} alt='Project1' className={style.projectImage} />

        <div className={style.projectText}>
          <h2 className={style.header}>SHOULDA COULDA</h2>
          <p className={style.text}>
            Shoulda Coulda is an app that helps users be more financial aware of
            their spending habits
          </p>
          <div className={style.textLink}>
            <a
              className={style.readMore}
              href='https://shouldacoulda.fly.dev/'
              rel='noreferrer'
              target='_blank'
            >
              Go To Site <img className={style.arrow} src={arrow} alt='arrow' />
            </a>
          </div>
        </div>
      </div>

      <div className={style.containerTwo}>
        <img src={image2} alt='Project2' className={style.projectImage} />
        <div className={style.projectText}>
          <h2 className={style.header}>ANIMEGO</h2>
          <p className={style.text}>
            Anime Go is a web app using Jikan Api database that let users look
            up and learn about a variety of animes.
          </p>
          <div className={style.textLink2}>
            <a
              className={style.readMore}
              href='https://animego1.netlify.app/'
              rel='noreferrer'
              target='_blank'
            >
              Go To Site <img className={style.arrow} src={arrow} alt='arrow' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectImageBar;

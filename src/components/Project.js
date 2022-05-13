import React from 'react';
import style from './Project.module.css';
import P1 from '../assets/images/P1.png';
import P2 from '../assets/images/P2.png';
import Question from '../assets/images/Q.jpeg';

const Project = () => {
  return (
    <div className={style.project_div}>
      <div className={style.text}>
        <a
          href='https://shouldacoulda.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          Shoulda Coulda
        </a>
      </div>
      <div>
        <figure className={style.figure}>
          <img
            className={style.project_img}
            src={P1}
            alt='Shoulda Coulda Project'
          />

          <figcaption className={style.figcaption}>
            An App That Help Users Be More Money Conscious
          </figcaption>
        </figure>
      </div>
      <div className={style.text}>
        <a
          href='https://animegenx.herokuapp.com/'
          target='_blank'
          rel='noreferrer'
        >
          AnimeGen
        </a>
      </div>
      <div>
        <figure className={style.figure}>
          <img className={style.project_img} src={P2} alt='AnimeGen Project' />

          <figcaption className={style.figcaption}>
            An App That Can Help Users Decide What Anime To Watch
          </figcaption>
        </figure>
      </div>
      <div className={style.text}>
        {/* <a href='#' target='_blank' rel='noreferrer'>
          Place Holder Project
        </a> */}
        Place Holder
      </div>
      <div>
        <figure className={style.figure}>
          <img
            className={style.project_img}
            src={Question}
            alt='Place Holder'
          />

          <figcaption className={style.figcaption}>Place Holder</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Project;

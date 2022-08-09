import React from 'react';
import style from './Project.module.css';
import P1 from '../assets/images/P1.png';
import P2 from '../assets/images/P2.png';
import Question from '../assets/images/Q.jpeg';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';
import logo3 from '../assets/images/CSS.jpg';
import logo4 from '../assets/images/JS.jpg';
import logo5 from '../assets/images/Postgre.jpg';
import logo6 from '../assets/images/Express.jpg';
import logo7 from '../assets/images/HTML.jpg';

const Project = () => {
  return (
    <div className={style.project_div}>
      <div>
        <h1>MY SKILLS AND PROJECT</h1>
        <div className={style.logoBar}>
          <img src={logo} width='100' alt='react logo' className={style.logo} />
          <img
            src={logo2}
            width='100'
            alt='redux logo'
            className={style.logo}
          />
          <img src={logo3} width='100' alt='CSS logo' className={style.logo} />
          <img
            src={logo4}
            width='100'
            alt='Javascript logo'
            className={style.logo}
          />
          <img
            src={logo5}
            width='100'
            alt='PostgreSQL logo'
            className={style.logo}
          />
          <img src={logo7} width='100' alt='HTML logo' className={style.logo} />
          <img
            src={logo6}
            width='100'
            alt='Express logo'
            className={style.logo}
          />
        </div>
      </div>
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

          <figcaption className={style.figcaption}>
            Place Holder For Future Project
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Project;

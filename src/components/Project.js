import React from 'react';
import style from './Project.module.css';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';
import logo3 from '../assets/images/CSS.jpg';
import logo4 from '../assets/images/JS.jpg';
import logo5 from '../assets/images/Postgre.jpg';
import logo6 from '../assets/images/Express.jpg';
import logo7 from '../assets/images/HTML.jpg';

const Project = () => {
  return (
    <div className={style.project_div} id='projects'>
      <h1 className={style.projectText}>SKILLS AND PROJECTS</h1>
      <div className={style.logoBar}>
        <img src={logo} width='100' alt='react logo' className={style.logo} />
        <img src={logo2} width='100' alt='redux logo' className={style.logo} />
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
  );
};

export default Project;

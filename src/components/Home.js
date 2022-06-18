import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Home.module.css';
import Project from './Project';

const Home = () => {
  return (
    <div className={style.background}>
      <div className={style.imageTextDiv}>
        <img className={style.image} src={WorkPic} alt='myself' />
        <div className={style.imageText}>Hello</div>
      </div>
      {/* <Project /> */}
    </div>
  );
};

export default Home;

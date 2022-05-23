import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.background}>
      <div className={style.imageTextDiv}>
        <img className={style.image} src={WorkPic} alt='myself' />
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import WorkPic from '../assets/images/Workpic1.jpg';
import style from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div>
        <img className={style.image} src={WorkPic} alt='myself' />
      </div>
    </div>
  );
};

export default Home;

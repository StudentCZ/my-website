import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.background}>
      <div className={style.shine}>Welcome To My Site</div>
      <div>
        <img
          className={style.image2}
          src='https://cdn.myanimelist.net/images/characters/10/322962.jpg'
          alt='Goblin Slayer'
        />
      </div>
    </div>
  );
};

export default Home;

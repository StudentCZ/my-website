import React from 'react';
import style from './Articles.module.css';

const Articles = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.title}>LATEST ARTICLES</div>
        <div className={style.textBox2}>
          <h2 className={style.text2}>All Articles</h2>
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Articles;

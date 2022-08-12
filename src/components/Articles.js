import React from 'react';
import style from './Articles.module.css';

const Articles = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.title}>LATEST ARTICLES</div>
        <div className={style.textBox2}>
          <h2 className={style.text2}>
            <a
              href='https://medium.com/@Chao.Zhou'
              rel='noreferrer'
              target='_blank'
            >
              All Articles
            </a>
          </h2>
        </div>
      </div>
      <div className={style.borderBox}>
        <h2 className={style.borderBoxHeader}>TITLE</h2>
        <p className={style.borderBoxText}>
          Hello Random Text Hello Random TextHello Random Text Hello Random Text
          Hello Random TextHello Random TextHello Random Text Hello Random
          TextHello Random Text
        </p>
      </div>
      <div className={style.borderBox}>
        <h2 className={style.borderBoxHeader}>TITLE</h2>
        <p className={style.borderBoxText}> Hello Random Text </p>
      </div>

      <div className={style.borderBox}>
        <h2 className={style.borderBoxHeader}>TITLE</h2>
        <p className={style.borderBoxText}> Hello Random Text </p>
      </div>
    </div>
  );
};

export default Articles;

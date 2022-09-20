import React from 'react';
import style from './Articles.module.css';
import arrow from './../assets/images/arrow.svg';

const Articles = () => {
  return (
    <div className={style.background} id='writing'>
      <div className={style.container}>
        <div>
          <h1 className={style.title}>LATEST ARTICLES</h1>
        </div>
        <div className={style.textBox2}>
          <a
            className={style.linkText}
            href='https://medium.com/@Chao.Zhou'
            rel='noreferrer'
            target='_blank'
          >
            <h2 className={style.text2}>All Articles</h2>
          </a>
        </div>
      </div>

      <div className={style.borderBox}>
        <a
          href='https://medium.com/@Chao.Zhou/5-things-i-would-havedone-differently-if-i-had-to-do-the-bootcamp-again-4dfe3cb95e86'
          rel='noreferrer'
          target='_blank'
        >
          <h2 className={style.borderBoxHeader}>
            5 Things I Would Have Done Differently If I Had To Do The Bootcamp
            Again.
          </h2>
        </a>
        <p className={style.borderBoxText}>
          If I had to redo the coding bootcamp again, I definitely would have
          done it differently. I listed 5 things that would of made my
          experience even better if I had to do the bootcamp a second time.
        </p>
        <div className={style.textLinkBorder}>
          <a
            className={style.textLink}
            href='https://medium.com/@Chao.Zhou/5-things-i-would-havedone-differently-if-i-had-to-do-the-bootcamp-again-4dfe3cb95e86'
            rel='noreferrer'
            target='_blank'
          >
            {' '}
            Read More <img className={style.arrow} src={arrow} alt='arrow' />
          </a>
        </div>
      </div>
      <div className={style.borderBox}>
        <a
          href='https://medium.com/@Chao.Zhou/what-to-look-for-if-you-want-to-attend-a-coding-bootcamp-d00faabda2a8'
          rel='noreferrer'
          target='_blank'
        >
          <h2 className={style.borderBoxHeader}>
            What To Look For If You Want To Attend A Coding Bootcamp
          </h2>
        </a>
        <p className={style.borderBoxText}>
          {' '}
          Choosing a good coding bootcamp can be difficult. Here are some things
          to look out for when you decide that you want to attend one.
        </p>
        <div className={style.textLinkBorder}>
          <a
            className={style.textLink}
            href='https://medium.com/@Chao.Zhou/what-to-look-for-if-you-want-to-attend-a-coding-bootcamp-d00faabda2a8'
            rel='noreferrer'
            target='_blank'
          >
            {' '}
            Read More <img className={style.arrow} src={arrow} alt='arrow' />
          </a>
        </div>
      </div>

      <div className={style.borderBox}>
        <a
          href='https://medium.com/@Chao.Zhou/what-to-expect-if-you-just-graduate-coding-bootcamp-coming-from-a-non-technical-background-1aea8b8ebe88'
          rel='noreferrer'
          target='_blank'
        >
          <h2 className={style.borderBoxHeader}>
            What To Expect If You Just Graduate Coding Bootcamp Coming From A
            Non-Technical Background
          </h2>
        </a>
        <p className={style.borderBoxText}>
          {' '}
          Finding a job after graduating a coding bootcamp can be difficult.
          Here is some realistic expectation of what to expect when you do
          graduate from one.
        </p>
        <div className={style.textLinkBorder}>
          <a
            className={style.textLink}
            href='https://medium.com/@Chao.Zhou/what-to-expect-if-you-just-graduate-coding-bootcamp-coming-from-a-non-technical-background-1aea8b8ebe88'
            rel='noreferrer'
            target='_blank'
          >
            {' '}
            Read More <img className={style.arrow} src={arrow} alt='arrow' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;

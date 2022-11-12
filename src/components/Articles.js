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
          href='https://medium.com/@Chao.Zhou/if-you-use-heroku-free-tier-to-host-your-apps-think-about-switching-over-to-fly-io-51c83d925486'
          rel='noreferrer'
          target='_blank'
        >
          <h2 className={style.borderBoxHeader}>
            If You Use Heroku Free Tier To Host Your Apps, Think About Switching
            Over To Fly.io
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
            href='https://medium.com/@Chao.Zhou/if-you-use-heroku-free-tier-to-host-your-apps-think-about-switching-over-to-fly-io-51c83d925486'
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
          href='https://medium.com/@Chao.Zhou/what-i-learned-from-learning-python-650c318e3bef'
          rel='noreferrer'
          target='_blank'
        >
          <h2 className={style.borderBoxHeader}>
            What I Learned From Learning Python
          </h2>
        </a>
        <p className={style.borderBoxText}>
          Writing about my experience with Python after being learning it for a
          few weeks. Documenting a few things that I noticed about Python and
          reason why you should learn it.
        </p>
        <div className={style.textLinkBorder}>
          <a
            className={style.textLink}
            href='https://medium.com/@Chao.Zhou/what-i-learned-from-learning-python-650c318e3bef'
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

import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact} id='contact'>
      <div className={style.contactBox}>
        <div className={style.headingBox}>
          <span className={style.headingText}>CONTACTS</span>
        </div>
        <h3 className={style.text}>
          You can email me at Czhou0k@gmai.com or find me on these social media
        </h3>
        <div className={style.contactImagesBox}>
          <a
            href='https://www.linkedin.com/in/chao-zhou8/'
            rel='noreferrer'
            target='_blank'
          >
            <img
              className={style.images}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'
              alt='linkedIn'
            />
          </a>
          <a
            href='https://github.com/StudentCZ'
            rel='noreferrer'
            target='_blank'
          >
            <img
              className={style.images}
              src='https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png'
              alt='gitHub'
            />
          </a>
          <a
            href='https://medium.com/@Chao.Zhou'
            rel='noreferrer'
            target='_blank'
          >
            <img
              className={style.images}
              src='https://cdn4.iconfinder.com/data/icons/social-media-circle-7/512/Medium_circle-512.png'
              alt='Medium'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

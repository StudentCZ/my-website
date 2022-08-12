import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contactBox}>
        <div className={style.headingBox}>
          <span className={style.headingText}>CONTACTS</span>
        </div>
        <h3 className={style.text}>
          You can email me at Czhou0k@gmai.com or find me on these social media
        </h3>
        <div className={style.contactImagesBox}>
          <img
            className={style.images}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png'
            alt='linkedIn'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

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
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contactBox}>
        <div className={style.headingBox}>
          <span className={style.headingText}>CONTACTS</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

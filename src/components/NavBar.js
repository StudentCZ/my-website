import React from 'react';
import style from './NavBar.module.css';

const NavBar = () => {
  //scroll when clicking nav links
  document.querySelectorAll('a[href^="#').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

  return (
    <div className={style.div}>
      <li className={style.li}>
        <a className={style.link} href='#about'>
          ABOUT
        </a>
      </li>
      <li className={style.li}>
        <a className={style.link} href='#projects'>
          PROJECTS
        </a>
      </li>
      <li className={style.li}>
        <a className={style.link} href='#writing'>
          WRITING
        </a>
      </li>
      <li className={style.li}>
        <a className={style.link} href='#contact'>
          CONTACT
        </a>
      </li>
    </div>
  );
};

export default NavBar;

import React from 'react';
import style from './NavBar.module.css';

//the function below smooth scrolls to link when clicking nav links
const NavBar = () => {
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

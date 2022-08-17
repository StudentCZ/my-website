import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <a className={style.link}>ABOUT</a>
      </li>
      <li className={style.li}>
        <a className={style.link} href='#project'>
          PROJECTS
        </a>
      </li>
      <li className={style.li}>
        <a className={style.link} to='/about'>
          WRITING
        </a>
      </li>
      <li className={style.li}>
        <a className={style.link} to='/contact'>
          CONTACT
        </a>
      </li>
    </div>
  );
};

export default NavBar;

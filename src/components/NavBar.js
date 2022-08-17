import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <Link smooth to='/'>
          ABOUT
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/project'>
          PROJECTS
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/about'>
          WRITING
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/contact'>
          CONTACT
        </Link>
      </li>
    </div>
  );
};

export default NavBar;

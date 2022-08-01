import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <Link className={style.link} to='/'>
          ABOUT
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/project'>
          PROJECT
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

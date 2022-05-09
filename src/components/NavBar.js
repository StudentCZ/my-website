import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <Link className={style.link} to='/'>
          Home
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/project'>
          Project
        </Link>
      </li>
      <li className={style.li}>
        <Link className={style.link} to='/contact'>
          Contact
        </Link>
      </li>
    </div>
  );
};

export default NavBar;

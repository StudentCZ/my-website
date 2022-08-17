import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import About from './About';

const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <a className={style.link} href={<About />}>
          ABOUT
        </a>
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

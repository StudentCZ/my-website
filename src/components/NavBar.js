import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div>
      <li className={style.links}>
        <Link to='/'>Home</Link>
      </li>
      <li className={style.links}>
        <Link to='/project'>Project</Link>
      </li>
      <li className={style.links}>
        <Link to='/contact'>Contact</Link>
      </li>
    </div>
  );
};

export default NavBar;

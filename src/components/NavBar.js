import React from 'react';
import { Link } from 'react-scroll';
import style from './NavBar.module.css';

//the function below smooth scrolls to link when clicking nav links
const NavBar = () => {
  return (
    <div className={style.div}>
      <li className={style.li}>
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={style.link}
        >
          ABOUT
        </Link>
      </li>
      <li className={style.li}>
        <Link
          to='projects'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={style.link}
        >
          PROJECTS
        </Link>
      </li>
      <li className={style.li}>
        <Link
          to='writing'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={style.link}
        >
          WRITING
        </Link>
      </li>
      <li className={style.li}>
        <Link
          to='resume'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={style.link}
        >
          Resume
        </Link>
      </li>
      <li className={style.li}>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={style.link}
        >
          CONTACT
        </Link>
      </li>
    </div>
  );
};

export default NavBar;

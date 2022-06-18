import React from 'react';
import style from './About.module.css';
import logo from '../assets/images/React.jpg';
import logo2 from '../assets/images/redux.svg';
import logo3 from '../assets/images/CSS.jpg';
import logo4 from '../assets/images/JS.jpg';
import logo5 from '../assets/images/Postgre.jpg';
import logo6 from '../assets/images/Express.jpg';
import logo7 from '../assets/images/HTML.jpg';
import { move, move2, move3, move4 } from './ProgressBar';

// function allBars() {
//   move();
//   move2();
//   move3();
//   move4();
// }

const About = () => {
  return (
    <div className={style.background}>
      <h1 className={style.heading}>My Skills</h1>
      {/* <button onClick={() => allBars()}>All Progress</button> */}
      <div>
        <img src={logo} width='100' alt='react logo' />
        <img src={logo2} width='100' alt='redux logo' />
        <img src={logo3} width='100' alt='CSS logo' />
        <img src={logo4} width='100' alt='Javascript logo' />
        <img src={logo5} width='100' alt='PostgreSQL logo' />
        <img src={logo6} width='100' alt='Express logo' />
        <img src={logo7} width='100' alt='HTML logo' />
      </div>
      <br />
      <div className={style.cols1}>
        <h2>Javascript</h2>
        <div className='w3-light-grey' style={{ width: '50%' }}>
          <div
            id='myBar'
            className='w3-container w3-green w3-center'
            style={{ width: '0%' }}
          >
            ?
          </div>
        </div>
        <br />
        <button className='w3-button w3-green' onClick={() => move()}>
          Click Me
        </button>
        <br />
        <h2 className={style.text}>HTML</h2>
        <div className='w3-light-grey' style={{ width: '50%' }}>
          <div
            id='myBar3'
            className='w3-container w3-green w3-center'
            style={{ width: '0%' }}
          >
            ?
          </div>
        </div>
        <br />
        <button className='w3-button w3-green' onClick={() => move3()}>
          Click Me
        </button>
      </div>

      <div className={style.cols2}>
        <h2>React</h2>
        <div className='w3-light-grey' style={{ width: '50%' }}>
          <div
            id='myBar2'
            className='w3-container w3-green w3-center'
            style={{ width: '0%' }}
          >
            ?
          </div>
        </div>
        <br />
        <button className='w3-button w3-green' onClick={() => move2()}>
          Click Me
        </button>
        <h2 className={style.text}>CSS</h2>
        <div className='w3-light-grey' style={{ width: '50%' }}>
          <div
            id='myBar4'
            className='w3-container w3-green w3-center'
            style={{ width: '0%' }}
          >
            ?
          </div>
        </div>
        <br />
        <button className='w3-button w3-green' onClick={() => move4()}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default About;

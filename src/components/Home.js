import React from 'react';
import Photo from './Photo';
import Project from './Project';
import ProjectImageBar from './ProjectImageBar';
import Articles from './Articles';
import Contact from './Contact';
import NavBar from './NavBar';
import Resume from './Resume';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Photo />
      <Project />
      <ProjectImageBar />
      <Articles />
      {/* <Resume /> */}
      <Contact />
    </div>
  );
};

export default Home;

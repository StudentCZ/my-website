import React from 'react';
import Photo from './Photo';
import Project from './Project';
import ProjectImageBar from './ProjectImageBar';
import ProjectSkillBar from './ProjectSkillBar';
import Articles from './Articles';
import Contact from './Contact';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Photo />
      <Project />

      <ProjectImageBar />
      <Articles />
      <Contact />
    </div>
  );
};

export default Home;

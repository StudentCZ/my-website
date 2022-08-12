import React from 'react';
import Photo from './Photo';
import Project from './Project';
import ProjectImageBar from './ProjectImageBar';
import ProjectSkillBar from './ProjectSkillBar';
import Articles from './Articles';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Photo />
      <Project />
      <ProjectSkillBar />
      <ProjectImageBar />
      <Articles />
      <Contact />
    </div>
  );
};

export default Home;

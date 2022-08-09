import React from 'react';
import Photo from './Photo';
import Project from './Project';
import ProjectImageBar from './ProjectImageBar';
import ProjectSkillBar from './ProjectSkillBar';

const Home = () => {
  return (
    <div>
      <Photo />
      <Project />
      <ProjectSkillBar />
      <ProjectImageBar />
    </div>
  );
};

export default Home;

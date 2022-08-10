import React from 'react';
import Article from './Articles';
import Photo from './Photo';
import Project from './Project';
import ProjectImageBar from './ProjectImageBar';
import ProjectSkillBar from './ProjectSkillBar';
import Articles from './Articles';

const Home = () => {
  return (
    <div>
      <Photo />
      <Project />
      <ProjectSkillBar />
      <ProjectImageBar />
      <Articles />
    </div>
  );
};

export default Home;

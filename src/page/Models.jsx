import React from 'react';
import { ProMainContainer } from "../styles/pages/projects";
import ProjectTop from '../components/page/Projects/ProjectTop';
import ProjectList from '../components/page/Projects/ProjectList';
import ProjectBt from '../components/page/Projects/ProjectBt';
import { Bot } from "../styles/pages/Home";
import Help from '../../src/image/Help.png';
const Projects = () => {
  return (
    <ProMainContainer>
      <ProjectTop />
      <Bot src={Help} alt="help" />
      <ProjectList />
      <ProjectBt />
    </ProMainContainer>
  )
};

export default Projects;

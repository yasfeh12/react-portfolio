import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  max-width: 600px;
  color: #fff;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #f39c12;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Skill = styled.div`
  padding: 5px 10px;
  border: 1px solid #f39c12;
  border-radius: 5px;
  font-size: 14px;
`;

const About = () => (
  <AboutWrapper>
    <Heading>About Me</Heading>
    <Text>
      I am a passionate and results-driven individual with 2 years of leadership
      and operational experience. I have completed two intensive Front-End
      JavaScript Development bootcamps, focusing on modern web development tools
      and technologies.
    </Text>
    <Heading>Technical Skills</Heading>
    <SkillsWrapper>
      <Skill>JavaScript</Skill>
      <Skill>HTML</Skill>
      <Skill>CSS</Skill>
      <Skill>Node.js</Skill>
      <Skill>React</Skill>
      <Skill>React Native</Skill>
      <Skill>Vite</Skill>
      <Skill>Jest</Skill>
      <Skill>Tailwind</Skill>
      <Skill>Bootstrap</Skill>
      <Skill>Git</Skill>
      <Skill>PostgreSQL</Skill>
    </SkillsWrapper>
  </AboutWrapper>
);

export default About;

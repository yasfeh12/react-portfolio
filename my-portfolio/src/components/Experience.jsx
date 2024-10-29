import React from "react";
import styled from "styled-components";

const ExperienceWrapper = styled.div`
  margin: 20px 0;
  color: #fff;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  color: #f39c12;
  margin-bottom: 5px;
`;

const Company = styled.h4`
  font-size: 16px;
  margin: 0;
  color: #ddd;
`;

const Date = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
`;

const Experience = () => (
  <ExperienceWrapper>
    <JobTitle>Web Development Intern</JobTitle>
    <Company>Elara Care Sisu</Company>
    <Date>Dec 2023 - July 2024</Date>
    <Description>
      Developed a comprehensive website and mobile application for an equity and
      diversity inclusion company. Utilized various technologies to ensure
      responsive and accessible design, enhancing the user experience.
    </Description>
    {/* Add more jobs in a similar structure */}
  </ExperienceWrapper>
);

export default Experience;

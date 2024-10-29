import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import About from "./About";
import Experience from "./Experience";
import ContactForm from "./ContactForm";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  padding: 40px;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const HomePage = () => (
  <PageWrapper>
    <ProfileCard />
    <About />
    <ContentWrapper>
      <Experience />
      <ContactForm />
    </ContentWrapper>
  </PageWrapper>
);

export default HomePage;

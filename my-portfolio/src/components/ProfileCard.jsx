import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 350px;
  padding: 20px;
  background: #222;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const Title = styled.p`
  font-size: 18px;
  color: #f39c12;
  margin: 5px 0 15px;
`;

const ContactInfo = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 5px 0;
`;

const ProfileCard = () => (
  <Card>
    <ProfileImage src="https://via.placeholder.com/150" alt="Profile" />
    <Name>Yaseen Fehad</Name>
    <Title>Front-End Developer</Title>
    <ContactInfo>Leeds, UK</ContactInfo>
    <ContactInfo>Email: YaseenFehad@gmail.com</ContactInfo>
    <ContactInfo>Phone: 07932692805</ContactInfo>
    <ContactInfo>
      <a
        href="https://github.com/yasfeh12"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    </ContactInfo>
  </Card>
);

export default ProfileCard;

import React from "react";

import { Container, LogoWrapper, UserWrapper, Avatar } from "./styles";

import logoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logoImg} alt="" />
        <span>Squad Management Tool</span>
      </LogoWrapper>
      <UserWrapper>
        <span>John Doe</span>
        <Avatar>
          <span>JD</span>
        </Avatar>
      </UserWrapper>
    </Container>
  );
};

export default Header;

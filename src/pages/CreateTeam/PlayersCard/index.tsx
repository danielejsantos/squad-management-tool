import React from "react";

import {
  Container,
  LeftWrapper,
  NameWrapper,
  NationalityWrapper,
  StyledText,
  StyledInformation,
  AgeWrapper,
} from "./styles";

const PlayersCard: React.FC = () => {
  return (
    <Container>
      <LeftWrapper>
        <NameWrapper>
          <StyledText>Name: </StyledText>
          <StyledInformation>Cristiano Ronaldo</StyledInformation>
        </NameWrapper>
        <NationalityWrapper>
          <StyledText>Nacionality: </StyledText>
          <StyledInformation>Portugal</StyledInformation>
        </NationalityWrapper>
      </LeftWrapper>
      <AgeWrapper>
        <StyledText>Age: </StyledText>
        <StyledInformation>32</StyledInformation>
      </AgeWrapper>
    </Container>
  );
};

export default PlayersCard;

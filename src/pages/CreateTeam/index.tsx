import React from "react";

import {
  Container,
  Wrapper,
  Title,
  TeamInformation,
  TeamForm,
  LeftColumn,
  StyledInput,
  InputWrapper,
  StyledLabel,
  Textarea,
  RightColumn,
  RadioLabel,
  RadioWrapper,
  BorderBottom,
} from "./styles";

import FieldFormation from "./FiedFormation";
import PlayersCard from "./PlayersCard";

const CreateTeam: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>Create your team</span>
        </Title>
        <TeamInformation>
          <span>Team information</span>
        </TeamInformation>

        <TeamForm>
          <LeftColumn>
            <InputWrapper>
              <StyledLabel>Team Name</StyledLabel>
              <StyledInput type="text" placeholder="Insert team name" />
            </InputWrapper>
            <InputWrapper>
              <StyledLabel>Description</StyledLabel>
              <Textarea rows={12} />
            </InputWrapper>
          </LeftColumn>

          <RightColumn>
            <InputWrapper>
              <StyledLabel>Team website</StyledLabel>
              <StyledInput type="text" placeholder="http://myteam.com" />
            </InputWrapper>

            <InputWrapper>
              <StyledLabel>Team type</StyledLabel>
              <RadioWrapper>
                <RadioLabel>
                  <input type="radio" />
                  Real
                </RadioLabel>
                <RadioLabel>
                  <input type="radio" />
                  Fantasy
                </RadioLabel>
              </RadioWrapper>
            </InputWrapper>

            <InputWrapper>
              <StyledLabel>Tags</StyledLabel>
              <Textarea rows={8} />
            </InputWrapper>
          </RightColumn>
        </TeamForm>

        <TeamInformation>
          <span>Configure Squad</span>
        </TeamInformation>

        <TeamForm>
          <LeftColumn>
            <FieldFormation />
          </LeftColumn>

          <RightColumn>
            <InputWrapper>
              <StyledLabel>Search Players</StyledLabel>
              <StyledInput type="text" placeholder="Ronal"></StyledInput>
            </InputWrapper>
            <PlayersCard />
            <BorderBottom />
          </RightColumn>
        </TeamForm>
      </Wrapper>
    </Container>
  );
};

export default CreateTeam;

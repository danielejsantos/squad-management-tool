import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  Title,
  PlusButton,
  TeamsContainer,
  TableName,
  TeamNameWrapper,
  StyledText,
  DescriptionWrapper,
  TeamsRow,
  TopFiveContainer,
  AverageWrapper,
  TopFiveWrapper,
  ListItem,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <span>My teams</span>
          <Link to="/create">
            <PlusButton>+</PlusButton>
          </Link>
        </Title>
        <TeamsContainer>
          <TableName>
            <TeamNameWrapper>
              <StyledText>Name</StyledText>
            </TeamNameWrapper>
            <DescriptionWrapper>
              <StyledText>Description</StyledText>
            </DescriptionWrapper>
          </TableName>
          <TeamsRow>
            <TeamNameWrapper>
              <StyledText>Barcelona</StyledText>
            </TeamNameWrapper>
            <DescriptionWrapper>
              <StyledText>Barcelona Squad</StyledText>
            </DescriptionWrapper>
          </TeamsRow>
        </TeamsContainer>
      </Wrapper>
      <Wrapper>
        <Title>
          <span>Top 5</span>
        </Title>
        <TopFiveContainer>
          <AverageWrapper>
            <StyledText>Highest avg age</StyledText>
            <TopFiveWrapper>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
            </TopFiveWrapper>
          </AverageWrapper>
          <AverageWrapper>
            <StyledText>Lowest avg age</StyledText>
            <TopFiveWrapper>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
              <ListItem>
                <p>InterMilan</p>
                <p>
                  <b>31.9</b>
                </p>
              </ListItem>
            </TopFiveWrapper>
          </AverageWrapper>
        </TopFiveContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;

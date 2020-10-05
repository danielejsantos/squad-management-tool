import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 10px;
  border: 2px dashed #dadada;
  border-radius: 4px;
  background: linear-gradient(
    0deg,
    rgba(231, 231, 231, 1) 40%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const NationalityWrapper = styled.div`
  display: flex;
`;

export const StyledText = styled.p`
  color: #303030;
  font-size: 14px;
  font-weight: bold;
`;

export const StyledInformation = styled.p`
  color: #b60b73;
  font-size: 14px;
  font-weight: bold;
`;

export const AgeWrapper = styled.div`
  display: flex;
`;

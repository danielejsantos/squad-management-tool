import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
  width: 100%;
  height: 100%;

  @media (max-width: 1080px) {
    padding: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #f7f3f7;
  padding-left: 35px;

  > span {
    color: #592e8a;
    font-weight: bold;
    font-size: 23px;
  }
`;

export const TeamInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-bottom: 30px;

  > span {
    color: #909090;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const TeamForm = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 50px;
  margin-left: 60px;

  @media (max-width: 1080px) {
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const StyledLabel = styled.label`
  color: #303030;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  border: 1px solid #d0cfd1;
  border-radius: 4px;
  padding: 14px;
  outline: 0;
  margin-bottom: 20px;
  text-align: start;

  ::placeholder {
    color: #d0cfd1;
  }
`;

export const Textarea = styled.textarea`
  width: 420px;
  border: 1px solid #d0cfd1;
  border-radius: 4px;
  padding: 14px;
  outline: 0;

  @media (max-width: 1080px) {
    margin-bottom: 15px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 60px;

  @media (max-width: 1080px) {
    margin: 0;
  }
`;

export const RadioLabel = styled.label`
  color: #696669;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  label + label {
    margin-left: 40px;
  }
`;

export const BorderBottom = styled.div`
  border-bottom: 1px solid #dadada;
  margin-bottom: 20px;
`;

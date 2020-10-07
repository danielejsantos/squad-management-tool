import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
  width: 50%;

  :first-child {
    margin-right: 35px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #f7f3f7;
  padding-left: 35px;
  margin-bottom: 20px;

  > span {
    color: #592e8a;
    font-weight: bold;
    font-size: 23px;
  }
`;

export const PlusButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  background: linear-gradient(342deg, #442278 0%, #b60b73 100%);
  outline: 0;
  cursor: pointer;
  margin-right: 20px;
  color: #fff;
  font-size: 26px;
`;

export const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const TableName = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding-left: 30px;
`;

export const TeamNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`;

export const StyledText = styled.p`
  color: #303030;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;

  :hover {
    color: #b60b73;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeamsRow = styled(TableName)`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #f7eef7;
    border-radius: 6px;
  }
`;

export const TopFiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const AverageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 20px;
`;

export const TopFiveWrapper = styled.div`
  background-color: #f7eef7;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 3px 0;
`;

export const ListItem = styled.div`
  background-color: #fff;
  margin: 3px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 10px 20px;

  p {
    font-size: 15px;
  }

  :hover {
    border: 1px solid #b60b73;
  }
`;

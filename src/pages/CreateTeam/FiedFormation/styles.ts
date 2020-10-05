import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  margin-bottom: 15px;

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

export const StyledSelect = styled.select`
  border: 1px solid #d0cfd1;
  border-radius: 4px;
  width: 60px;
  height: 20px;
  padding: 14px;
  margin-left: 40px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 420px;
  height: 740px;
  background-image: linear-gradient(342deg, #442278 0%, #b60b73 100%);
  margin-bottom: 20px;
  border-radius: 4px;

  @media (max-width: 500px) {
    max-width: 300px;
    height: 600px;
  }
`;

export const FieldLine = styled.div`
  position: absolute;
  top: 370px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  @media (max-width: 500px) {
    top: 305px;
  }
`;

export const FieldCircle = styled.div`
  position: absolute;
  top: 310px;
  right: 150px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  width: 120px;
  height: 120px;

  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    right: 100px;
    top: 255px;
  }
`;

export const PositionLine = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SaveButton = styled.button`
  width: 100%;
  background-image: linear-gradient(342deg, #442278 0%, #b60b73 100%);
  color: #fff;
  font-size: 18px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  outline: 0;
  margin-bottom: 20px;
`;

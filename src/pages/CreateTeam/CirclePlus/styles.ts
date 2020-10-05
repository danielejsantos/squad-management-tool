import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const DashedCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 90px;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  border-radius: 50%;

  @media (max-width: 500px) {
    height: 70px;
    width: 70px;
  }
`;

export const WhiteCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;

  @media (max-width: 500px) {
    height: 55px;
    width: 55px;
  }
`;

export const PlusIcon = styled(AiOutlinePlus)`
  fill: #fff;
  width: 17px;
  height: 17px;
`;

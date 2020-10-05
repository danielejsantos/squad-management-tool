import React from "react";

import {
  SelectWrapper,
  StyledLabel,
  StyledSelect,
  FieldContainer,
  FieldLine,
  FieldCircle,
  PositionLine,
  SaveButton,
} from "./styles";

import CirclePlus from "../CirclePlus";

const FiedFormation: React.FC = () => {
  return (
    <>
      <SelectWrapper>
        <StyledLabel>Formation</StyledLabel>
        <StyledSelect></StyledSelect>
      </SelectWrapper>
      <FieldContainer>
        <PositionLine>
          <CirclePlus />
          <CirclePlus />
          <CirclePlus />
        </PositionLine>
        <PositionLine>
          <CirclePlus />
        </PositionLine>
        <PositionLine>
          <CirclePlus />
          <CirclePlus />
          <CirclePlus />
        </PositionLine>
        <PositionLine>
          <CirclePlus />
          <CirclePlus />
          <CirclePlus />
        </PositionLine>
        <PositionLine>
          <CirclePlus />
        </PositionLine>
        <FieldLine />
        <FieldCircle />
      </FieldContainer>
      <SaveButton>Save</SaveButton>
    </>
  );
};

export default FiedFormation;

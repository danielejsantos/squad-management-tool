import React from "react";

import { DashedCircle, WhiteCircle, PlusIcon } from "./styles";

const CirclePlus: React.FC = () => (
  <DashedCircle>
    <WhiteCircle>
      <PlusIcon />
    </WhiteCircle>
  </DashedCircle>
);

export default CirclePlus;

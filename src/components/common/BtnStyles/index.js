import React from "react";

import { BtnStyles } from './styled';

const BtnStyled = ({ children }) => {
  return (
    <>
        <BtnStyles>{children}</BtnStyles>
    </>
  )
}

export default BtnStyled;
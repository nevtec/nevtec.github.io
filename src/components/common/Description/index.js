import React from "react";

import { DescStyles } from './styled';


const Description = ({ children }) => {
  return (
    <>
        <DescStyles>{children}</DescStyles>
    </>
  )
}

export default Description;

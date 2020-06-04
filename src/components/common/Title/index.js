import React from "react";

import { TitleStyles } from './styled';


const Title = ({ children }) => {
  return (
    <>
        <TitleStyles>{children}</TitleStyles>
    </>
  )
}

export default Title;

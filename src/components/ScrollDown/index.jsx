import React from "react";

import {ScrollStyled, LinkScroll, PositionLine, LineOne, LineTwo} from './styled';

const ScrollDown = () => (
  <ScrollStyled>

    <LinkScroll href="./">Scroll Down</LinkScroll>

    <PositionLine>
      <LineOne></LineOne>
      <LineTwo></LineTwo>
    </PositionLine>

  </ScrollStyled>

)

export default ScrollDown;
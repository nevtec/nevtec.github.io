import React from "react";
import {ScrollStyled, LinkScroll, PositionLine, LineOne, LineTwo} from './styled';

const ScrollBtn = () => (
    <ScrollStyled>
      <LinkScroll href="./">Scroll Down</LinkScroll>
      <PositionLine>
        <LineOne className="line1"></LineOne>
        <LineTwo className="line2"></LineTwo>
      </PositionLine>
    </ScrollStyled>

)

export default ScrollBtn;
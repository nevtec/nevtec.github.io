import React from "react";
import {ScrollStyled, PositionLine} from './styled';

const ScrollBtn = () => (
    <ScrollStyled>
      <a href="./">Scroll Down</a>
      <PositionLine>
        <div className="line1"></div>
        <div className="line2"></div>
      </PositionLine>
    </ScrollStyled>

)

export default ScrollBtn;
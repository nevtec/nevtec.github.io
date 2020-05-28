import React from "react";
import * as Styled from './styled';

const ScrollBtn = () => (
    <Styled.ScrollStyled>
      <a href="./">Scroll Down</a>
      <Styled.PositionLine>
        <div className="line1"></div>
        <div className="line2"></div>
      </Styled.PositionLine>
    </Styled.ScrollStyled>

)

export default ScrollBtn;
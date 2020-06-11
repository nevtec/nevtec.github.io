import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import { ScrollStyled, LinkScroll, PositionLine } from './styled';

const scrollToBotton = (About) => () => scrollTo(About);

const ScrollDown = () => (
  <ScrollStyled>

    <LinkScroll onClick={scrollToBotton('#About')}>Scroll Down</LinkScroll>
    <PositionLine></PositionLine>

  </ScrollStyled>

);

export default ScrollDown;
import React from "react"
import * as Styled from './styled'
import scrollTo from 'gatsby-plugin-smoothscroll';

const ScrollBtn = () => (
    <Styled.ScrollStyled>
        <a onClick={() => scrollTo('#About')}>Scroll Down</a>
      <div className="line1"></div>
      <div className="line2"></div>
    </Styled.ScrollStyled>

)

export default ScrollBtn
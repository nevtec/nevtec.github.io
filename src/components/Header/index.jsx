import React from "react"
import * as Styled from './styled'
import Logo from '../Logo/'

const Header = () => (
  <Styled.SectionHeader>

    <Styled.PositionLogo>
      <Logo />
    </Styled.PositionLogo>

    <Styled.HeaderWrapper>
        <h3>
          WELCOME TO NEVTEC
        </h3>
        <h1>
          We are a creative group of nevinhosos who design 
          influential brands and digital experiences.
        </h1>

        <div>
          <button>start a project</button>
          <button>more about us</button>
        </div>
    </Styled.HeaderWrapper>

  </Styled.SectionHeader>
)

export default Header

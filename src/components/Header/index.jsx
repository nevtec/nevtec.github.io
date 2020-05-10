import React from "react"
import * as Styled from './styled'
import Logo from '../Logo/'
import Menu from '../Menu/'
import SocialMedia from '../SocialMedia'

const Header = () => (
  <Styled.SectionHeader>
    <Styled.HeaderShadow></Styled.HeaderShadow>

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

        <Styled.BtnHeader>
          <button>start a project</button>
          <button>more about us</button>
        </Styled.BtnHeader>
    </Styled.HeaderWrapper>

    <div>
      <Styled.MenuSection>
        <Menu />
      </Styled.MenuSection>

      <Styled.SocialSection>
        <SocialMedia />
      </Styled.SocialSection>
    </div>

    <Styled.ScrollD>
      <a href="#About">Scroll Down</a>
      <div></div>
    </Styled.ScrollD>

  </Styled.SectionHeader>
)

export default Header

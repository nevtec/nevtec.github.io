import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import * as Styled from './styled';

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/index';

const Header = () => (
  <Styled.SectionHeader >

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
          <button onClick={() => scrollTo('#About')}>more about us</button>
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
    
    <ScrollDown />

  </Styled.SectionHeader>
)

export default Header

import React from "react";

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/index';

import * as Styled from './styled';

const Header = () => (
  <Styled.SectionHeader>
    
    <Menu />
    <SocialMedia />

    <Styled.ContainerHeader>

      <Styled.PositionLogo>
        <Logo />
      </Styled.PositionLogo>

      <Styled.HeaderWrapper>
          <h1>
            WELCOME TO NEVTEC
          </h1>
          <h3>
            We are a creative group of nevinhosos who design 
            influential brands and digital experiences.
          </h3>

          <Styled.BtnContainer>
            <button>start a project</button>
            <button>more about us</button>
          </Styled.BtnContainer>
      </Styled.HeaderWrapper>

    </Styled.ContainerHeader>
    
    <ScrollDown />

  </Styled.SectionHeader>
)

export default Header

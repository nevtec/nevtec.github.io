import React from "react";
import * as Styled from './styled';
import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/index';

const Header = () => (
  <Styled.SectionHeader >
    
    <Menu />
    <SocialMedia />

    <Styled.ContainerHeader>

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
      
      <ScrollDown />

    </Styled.ContainerHeader>    

  </Styled.SectionHeader>
)

export default Header

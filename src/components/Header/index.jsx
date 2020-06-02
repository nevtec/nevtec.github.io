import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/index';

import {SectionHeader, ContainerHeader, PositionLogo, HeaderWrapper, BtnContainer, testeScroll} from './styled';

const Header = () => (
  <SectionHeader id="Header">
    
    <Menu />
    <SocialMedia />

    <ContainerHeader>

      <PositionLogo>
        <Logo />
      </PositionLogo>

      <HeaderWrapper>
          <h1>
            WELCOME TO NEVTEC
          </h1>
          <h3>
            We are a creative group of nevinhosos who design 
            influential brands and digital experiences.
          </h3>

          <BtnContainer>
            <button onClick={() => scrollTo('#Header')}>start a project</button>
            <button onClick={() => scrollTo('#About')}>more about us</button>
          </BtnContainer>
      </HeaderWrapper>

    </ContainerHeader>
    
    <testeScroll>
        <a>teste</a>
    </testeScroll>
    {/* <ScrollDown /> */}

  </SectionHeader>
)

export default Header

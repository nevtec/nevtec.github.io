import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/index';

import { SectionHeader, ContainerHeader, PositionLogo, HeaderWrapper, BtnContainer, BtnHeader, ScrollWrapper } from './styled';
import { Title, Description } from '../../components/common/styled';

const Header = () => (
  <SectionHeader id="Header">
    
    <Menu />
    <SocialMedia />

    <ContainerHeader>

      <PositionLogo>
        <Logo />
      </PositionLogo>

      <HeaderWrapper>
        <Title>
          WELCOME TO NEVTEC
        </Title>
        <Description>
          We are a creative group of nevinhosos who design 
          influential brands and digital experiences.
        </Description>

        <BtnContainer>
          <BtnHeader onClick={() => scrollTo('#Header')}>
            start a project
          </BtnHeader>
          <BtnHeader onClick={() => scrollTo('#About')}>
            more about us
          </BtnHeader>
        </BtnContainer>
      </HeaderWrapper>

    </ContainerHeader>
    
    <ScrollWrapper>
      <ScrollDown />
    </ScrollWrapper>

  </SectionHeader>
)

export default Header;

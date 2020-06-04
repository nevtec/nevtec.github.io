import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/';
import Title from '../../components/common/Title/';
import Description from '../../components/common/Description/';

import { HeaderWrapper, ContainerHeader, HeaderLogo, ContentHeader, BtnWrapper, BtnHeader, ScrollWrapper } from './styled';

const Header = () => (
  <HeaderWrapper id="Header">

    <ContainerHeader>
      <Menu />
      <SocialMedia />

      <HeaderLogo>
        <Logo />
      </HeaderLogo>

      <ContentHeader>
        <Title>
          WELCOME TO NEVTEC
        </Title>
        <Description>
          We are a creative group of nevinhosos who design 
          influential brands and digital experiences.
        </Description>

        <BtnWrapper>
          <BtnHeader onClick={() => scrollTo('#Header')}>
            start a project
          </BtnHeader>
          <BtnHeader onClick={() => scrollTo('#About')}>
            more about us
          </BtnHeader>
        </BtnWrapper>
      </ContentHeader>

    </ContainerHeader>
    
    <ScrollWrapper>
      <ScrollDown />
    </ScrollWrapper>

  </HeaderWrapper>
)

export default Header;

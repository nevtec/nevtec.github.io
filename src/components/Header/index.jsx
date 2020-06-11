import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '../Logo/';
import Menu from '../Menu/';
import SocialMedia from '../SocialMedia';
import ScrollDown from '../ScrollDown/';
import Description from '../common/Description';
import Title from '../common/Title';

import { HeaderWrapper, ContainerHeader, HeaderLogo, ContentHeader, BtnWrapper, BtnHeader, ScrollWrapper } from './styled';

const scrollToHeader = (Header) => () => scrollTo(Header)

const scrollToAbout = (About) => () => scrollTo(About)

const Header = () => (
  <HeaderWrapper id="Header">

    <ContainerHeader>
      <Menu />
      <SocialMedia />

      <HeaderLogo>
        <Logo />
      </HeaderLogo>

      <ContentHeader>
        <Description>
          WELCOME TO NEVTEC
        </Description>
        <Title>
          We are a creative group of nevinhosos who design 
          influential brands and digital experiences.
        </Title>

        <BtnWrapper>
          <BtnHeader onClick={scrollToHeader('#Header')}>
            start a project
          </BtnHeader>

          <BtnHeader onClick={scrollToAbout('#About')}>
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

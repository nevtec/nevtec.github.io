import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import Logo from '@components/Logo/';
import Menu from '@components/Menu/';
import SocialMedia from '@components/SocialMedia';
import ScrollDown from '@components/ScrollDown/';
import Title from '@components/common/Title';
import Description from '@components/common/Description';
import BtnStyled from '@components/common/BtnStyles';

import { HeaderWrapper, ContainerHeader, HeaderLogo, ContentHeader, BtnWrapper, ScrollWrapper } from './styled';

const scrollToIndex = (Header) => () => scrollTo(Header);

const scrollToAbout = (About) => () => scrollTo(About);

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
          <BtnStyled onClick={scrollToIndex('#Header')}>
            start a project
          </BtnStyled>

          <BtnStyled onClick={scrollToAbout('#About')}>
            more about us
          </BtnStyled>
        </BtnWrapper>
      </ContentHeader>

    </ContainerHeader>
    
    <ScrollWrapper>
      <ScrollDown />
    </ScrollWrapper>

  </HeaderWrapper>
);

export default Header;

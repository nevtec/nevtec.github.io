import React, { useEffect } from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Aos from "aos";

import Logo from "@components/Logo/"
import Menu from "@components/Menu/"
import SocialMedia from "@components/SocialMedia"
import ScrollDown from "@components/ScrollDown/"
import Title from "@components/common/Title"
import Description from "@components/common/Description"
import BtnStyled from "@components/common/BtnStyles"

import {
  HeaderWrapper,
  ContainerHeader,
  PositionLogo,
  ContentHeader,
  BtnWrapper,
  ScrollWrapper,
} from "./styled"

const scrollToIndex = Header => () => scrollTo(Header)

const scrollToAboutPath = About => () => scrollTo(About)

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210 })
  }, [])

  return (
    <HeaderWrapper id="Header">
      <ContainerHeader>
        <Menu />
        <SocialMedia />

        <PositionLogo>
          <Logo />
        </PositionLogo>

        <ContentHeader data-aos="fade-up">
          <Description variant="primary">WELCOME TO NEVTEC</Description>
          <Title variant="primary">
            We are a creative group of nevinhosos who design influential brands
            and digital experiences.
          </Title>

          <BtnWrapper>
            <BtnStyled variant="primary" onClick={scrollToIndex("#Header")}>
              start a project
            </BtnStyled>

            <BtnStyled variant="primary" onClick={scrollToAboutPath("#About")}>
              more about us
            </BtnStyled>
          </BtnWrapper>
        </ContentHeader>
      </ContainerHeader>

      <ScrollWrapper>
        <ScrollDown />
      </ScrollWrapper>
    </HeaderWrapper>
  )
}

export default Header

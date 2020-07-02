import styled from "styled-components"

import Icons from "@components/Icons"

export const WorksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 138px;
`

export const BgTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.bgWorks};
  width: 100%;
  display: flex;
  padding-bottom: 210px;
`

export const BgWorks = styled.div`
  width: 100%;
  display: flex;
`

export const ContainerWorks = styled.div`
  ${({ theme }) => theme.setContainer()};
`

export const IntroWrapper = styled.header`
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;

  &::after {
    content: "";
    display: block;
    width: 100%;
    max-width: 540px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.linelight};
    margin-bottom: 16px;
  }
`

export const WorksContent = styled.div`
  text-align: center;
  text-align: -webkit-center;
  width: 100%;
  max-width: 1130px;
  margin-top: -170px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: relative;
  top: 0;
  left: -40px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: 1fr;
  `}
`

export const FigureBox = styled.div`
  max-width: 565px;
  width: 100%;
  height: 416px;
  position: relative;
  overflow: hidden;

  &:hover div,
  &:focus div {
    transform: scale(1.2);
  }
`

export const FigureContent = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 565px;
  width: 100%;
  height: 100%;
  transition: all 0.6s;
`

export const TextBox = styled.figcaption`
  width: 100%;
  height: 100%;
  position: absolute;
  top: auto;
  bottom: -4px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.retina};
  color: ${({ theme }) => theme.colors.whiteDefault};

  opacity: 0;
  transform: translateY(0px);
  transition: transform 0.6s, opacity 0.6s;

  &:hover {
    opacity: 1;
    transform: translateY(-4px);
  }
`

export const PositionText = styled.div`
  text-align: left;
  padding-top: 304px;
  padding-left: 16px;
  line-height: 0.6;
`

export const LinkWrapper = styled(Icons.Link)`
  width: 24px;
  position: relative;
  top: -288px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteDefault};
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const TitleBox = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montLight};
  text-transform: uppercase;
  font-size: 16px;
`

export const SubBox = styled.p`
  font-family: ${({ theme }) => theme.fonts.montLight};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 14px;
`

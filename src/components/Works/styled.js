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
  grid-template-columns: auto auto;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: auto;
  `}
`

export const FigureBox = styled.div`
  max-width: 565px;
  width: 100%;
  height: 540px;
  position: relative;
  overflow: hidden;

  &:hover div,
  &:focus div {
    transform: scale(1.1);
  }
  
 
  &:first-child {
    height: 570px;  
  }

  &:nth-child(4){
    margin-top: -30px;
  }

  &:last-child {
    height: 570px;
    margin-top: -30px;
  }

  ${({ theme }) => theme.media.tablet`
    &:nth-child(3){
      margin-bottom: 30px;
    }

    &:last-child {
      margin-top: 0px;
    }
  `}
`

export const FigureContent = styled.div`
  max-width: 565px;
  width: 100%;
  height: 100%;
  transition: all 0.6s;
`

export const Figure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.retina};
  color: ${({ theme }) => theme.colors.whiteDefault};
  top: 0;
  opacity: 0;
  display: flex;

  &:hover{
    opacity: 1;
  }
`

export const PositionText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5rem;
  margin: -4rem 0;
  text-align: left;
  line-height: 0.6;
`

export const LinkWrapper = styled(Icons.Link)`
  width: 24px;
  position: relative;
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
  font-size: 10px;
  letter-spacing: 2px;
`

export const SubBox = styled.p`
  font-family: ${({ theme }) => theme.fonts.montLight};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 10px;
`

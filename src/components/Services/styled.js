import styled from "styled-components";

import Icons from "../Icons";

export const ServicesWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.whiteDefault};
  display: flex;
  padding-bottom: 138px;
`

export const ContainerServices = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const ContentHeader = styled.header`
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;

  &::after{
    content: '';
    display: block;
    width: 40%;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.linelight};
    margin-bottom: 16px;
  }
`

export const ContentService = styled.div`
  width: 100%;
  margin-top: 46px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 50px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: 1fr;
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`

export const TypeService = styled.div`
  display: flex;

  ${({ theme }) => theme.media.tablet`
    display: flex;
    flex-direction: column;
    text-align: center;
  `}
`

export const FigCapsule = styled.figure`
  margin: 26px 20px;

  ${({ theme }) => theme.media.tablet`
    margin: 0;
  `}
`

export const WorldWrapper = styled(Icons.World)`
  color: ${({ theme }) => theme.colors.blueDefault};
  width: 58px;
`

export const TextBox = styled.div`
  width: 80%;

  ${({ theme }) => theme.media.tablet`
    place-self: center;
  `}
`

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.montBold};
  font-size: 30px;
`

export const ParagraphServices = styled.p`
  font-size: 20px;
  font-family: "lora-regular, serif";
  color: ${({ theme }) => theme.colors.grayText};
  text-align: left;
  line-height: 30px;

  ${({ theme }) => theme.media.tablet`
    text-align: center;
  `}
`
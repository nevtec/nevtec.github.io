import styled from "styled-components";

import contact from '@images/contact.jpg';

export const ContactWrapper = styled.section`
  width: 100%;
  background-image: url(${contact});
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  padding-bottom: 138px;
`

export const ContainerContact = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const ContentHeader = styled.header`
  max-width: 1000px;
  width: 100%;
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
`

export const ContentContact = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: 65% 35%;

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: 1fr;
  `}
`

export const ContactPrimary = styled.div`
  background-color: ${({ theme }) => theme.colors.brForm};
  padding: 30px 0;
`

export const ContactSecondary = styled.div`
  background-color: ${({ theme }) => theme.colors.bgMenu};
  padding: 30px 0;
`

export const TitleOrientation = styled.div`
  width: 86%;
  margin: auto;
`

export const TitleContact = styled.h3`
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-family: ${({ theme }) => theme.fonts.montLight};
  font-size: 14px;
  text-transform: uppercase;
  padding-bottom: 20px;
`

export const ContactInfo = styled.div`
  width: 86%;
  margin: auto;
`

export const InfoBox = styled.div`
  margin: 40px 0;
`

export const InfoTitle = styled.h4`
  color: ${({ theme }) => theme.colors.blueDefault};
  font-family: ${({ theme }) => theme.fonts.montRegular};
`

export const Information = styled.span`
  color: ${({ theme }) => theme.colors.grayText};
  font-family: ${({ theme }) => theme.fonts.montLight};
  display: block;
  line-height: 32px;
  font-size: 14px;
`
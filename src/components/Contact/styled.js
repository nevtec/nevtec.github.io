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
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;
`

export const ContentContact = styled.div`
  width: 94%;
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
  background: ${({ theme }) => theme.colors.brForm};
  padding: 30px 0;
`

export const ContactSecondary = styled.div`
  background: ${({ theme }) => theme.colors.bgMenu};
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
`

export const FormWrapper = styled.form`
  text-align: center;
  text-align: -webkit-center;
`

export const FieldOrientation = styled.fieldset`
  border-style: none;
  width: 86%;
`

const formInfo = `
  width: 100%;
  height: 30px;
  font-size: 14px;
  background: none;
  border: 0 none;
  outline: 0;
  border-bottom: 2px solid;
  padding-bottom: 10px;
  margin-bottom: 14px;
  transition: all 0.8s;
`

export const YourInfo = styled.input`
  ${formInfo}
  color: ${({ theme }) => theme.colors.whiteDefault};
  border-color: ${({ theme }) => theme.colors.bgMenu};
  
  &:focus {
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.blueDefault};
  }
`

export const YourMessage = styled.textarea`
  ${formInfo}
  height: 200px;
  color: ${({ theme }) => theme.colors.whiteDefault};
  border-color: ${({ theme }) => theme.colors.bgMenu};
  
  &:focus {
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.blueDefault};
  }
`

export const Submit = styled.button`
  width: 100%;
  height: 50px;
  color: ${({ theme }) => theme.colors.whiteDefault};
  background: ${({ theme }) => theme.colors.blueDefault};
  font-family: ${({ theme }) => theme.fonts.montRegular};
  border-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;

  &:focus{
    outline-style: none;
  }

  &:hover{
    background: #246b90;
  }
`

export const ContactInfo = styled.div`
  width: 86%;
  margin: auto;
`

export const InfoBox = styled.div`

`

export const InfoTitle = styled.h4`
  color: ${({ theme }) => theme.colors.blueDefault};
`

export const Information = styled.span`
  color: ${({ theme }) => theme.colors.whiteDefault};
  display: block;
`
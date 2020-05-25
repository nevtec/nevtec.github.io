import styled from "styled-components"
import GlobalStyle from '../../until/global/globalStyled.js'

import Icons from "../Icons"

export const MediaWrapper = styled.nav`
  color: ${({ theme }) => theme.colors.whiteDefault};
  position: absolute;
  right: 84px;
  top: 280px;
  width: 100px;

  li {
    list-style-type: none;
    cursor: pointer;
    position: relative;
    height: 42px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.whiteDefault};
      display: block;
      width: 100%;
      height: 100%;
      font-family: "montserrat-regular-webfont";

      span {
        opacity: 0;
        font-size: 12px;
        text-align: right;
        transition: opacity 0.5s linear;
        pointer-events: none;
      }

      &:hover {
        span {
          opacity: 1;
          padding-left: -40%;
        }
      }
    }
  }

  @media (max-width: 930px) {
    top: 198px;
  }

  @media (max-width: 783px) {
    bottom: -106px;
  }

  @media (max-width: 720px) {
    display: none;
  }
`

const iconsocial = `
  width: 32px; 
  height: 31px; 
  border: 2px solid; 
  border-color: ${({ theme }) => theme.colors.whiteDefault};
  border-radius: 38px; 
  text-align-last: center; 
  position: absolute; 
  top: -14px; 
  left: 70px;
`

export const FaceWrapper = styled(Icons.Facebook)`
  iconsocial: ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.fbColor};
    border: 2px solid ${({ theme }) => theme.colors.fbColor};
  }
`

export const TwitterWrapper = styled(Icons.Twitter)`
  iconsocial: ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.twColor};
    border: 2px solid ${({ theme }) => theme.colors.twColor};
  }
`

export const InstaWrapper = styled(Icons.Instagram)`
  iconsocial: ${iconsocial};
  width: 32px; 
  height: 31px; 
  border-radius: 38px;

  &:hover {
    color: ${({ theme }) => theme.colors.instaColor};
    border: 2px solid ${({ theme }) => theme.colors.instaColor};
  }
`

export const BehanceWrapper = styled(Icons.Behance)`
  iconsocial: ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.behaColor};
    border: 2px solid ${({ theme }) => theme.colors.behaColor};
  }
`

export const DribbbleWrapper = styled(Icons.Dribbble)`
  iconsocial: ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.dribbbColor};
    border: 2px solid ${({ theme }) => theme.colors.dribbbColor};
  }
`

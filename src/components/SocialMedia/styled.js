import styled from "styled-components";

import Icons from "../Icons";

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
      font-family: ${({ theme }) => theme.fonts.montRegular};

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

  ${({ theme }) => theme.media.phone`
      top: 266px;
  `}

  ${({ theme }) => theme.media.smallPhone`
    display: none;
  `}
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
  ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.fbColor};
    border: 2px solid ${({ theme }) => theme.colors.fbColor};
  }
`

export const TwitterWrapper = styled(Icons.Twitter)`
  ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.twColor};
    border: 2px solid ${({ theme }) => theme.colors.twColor};
  }
`

export const InstaWrapper = styled(Icons.Instagram)`
  ${iconsocial};
  width: 32px; 
  height: 31px; 
  border-radius: 38px;

  &:hover {
    color: ${({ theme }) => theme.colors.instaColor};
    border: 2px solid ${({ theme }) => theme.colors.instaColor};
  }
`

export const BehanceWrapper = styled(Icons.Behance)`
  ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.behaColor};
    border: 2px solid ${({ theme }) => theme.colors.behaColor};
  }
`

export const DribbbleWrapper = styled(Icons.Dribbble)`
  ${iconsocial};

  &:hover {
    color: ${({ theme }) => theme.colors.dribbbColor};
    border: 2px solid ${({ theme }) => theme.colors.dribbbColor};
  }
`

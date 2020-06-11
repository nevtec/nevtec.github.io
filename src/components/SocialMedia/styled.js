import styled from "styled-components";

import Icons from "../Icons";

export const MediaWrapper = styled.nav`
  color: ${({ theme }) => theme.colors.whiteDefault};
  position: absolute;
  right: 84px;
  top: 330px;
  width: 100px;

  ${({ theme }) => theme.media.phone`
    display: none;
  `}
`

export const LiMedia = styled.li`
  list-style-type: none;
  cursor: pointer;
  position: relative;
  height: 36px;
`

export const LinkMedia = styled.a`
  font-family: ${({ theme }) => theme.fonts.montRegular};
  color: ${({ theme }) => theme.colors.whiteDefault};
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;

  &:hover {
    span {
      opacity: 1;
      left: 0px;
    }
  }
`

export const TitleSocial = styled.span`
  font-size: 12px;
  text-align: left;
  pointer-events: none;
  transition: opacity 0.6s linear;
  opacity: 0;
  position: relative;
  top: -8px;
`

const iconsocial = `
  width: 18px;
  height: 18px;
  padding: 6px;
  border: 2px solid; 
  border-color: ${({ theme }) => theme.colors.whiteDefault};
  border-radius: 38px; 
  text-align-last: center; 
  position: absolute; 
  top: -14px; 
  left: 70px;
  transition: all 0.6s;
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

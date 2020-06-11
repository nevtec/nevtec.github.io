import styled from "styled-components";

export const ScrollStyled = styled.div`
  position: absolute;
  left: -150px;
  bottom: -72px;
`

export const LinkScroll = styled.a`
  font-family: ${({ theme }) => theme.fonts.montBold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.whiteDefault};
  text-transform: uppercase;
  font-size: 10px;
  transition: all 0.6s;

  &:hover {
    color: ${({ theme }) => theme.colors.blueDefault};
    cursor: pointer;
  }
`

export const PositionLine = styled.div`
  position: absolute;
  right: -14px;
  bottom: -146px;
  width: 2px;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.whiteDefault};

  &::after{
    width: 2px;
    height: 80px;
    display: block;
    content: '';
    background-color: ${({ theme }) => theme.colors.blueDefault};
  } 
`
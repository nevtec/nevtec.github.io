import styled from "styled-components"
import montserrat from "../../fonts/montserrat/montserrat-regular-webfont.woff2"

export const ScrollStyled = styled.div`
  position: absolute;
  z-index: 3;
  bottom: -186px;
  right: 68px;

  a {
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
  }

  .line1 {
    width: 2px;
    height: 162px;
    position: absolute;
    right: -20px;
    bottom: -152px;
    background-color: ${({ theme }) => theme.colors.blueDefault};
  }

  .line2 {
    width: 2px;
    height: 82px;
    position: absolute;
    right: -20px;
    bottom: -148px;
    background-color: ${({ theme }) => theme.colors.whiteDefault};
  }

  @media (max-width: 1315px) {
    bottom: -165px;

    .line2 {
      bottom: -159px;
    }
  }

  @media (max-width: 930px) {
    bottom: -106px;

    .line2 {
      bottom: -134px;
    }
  }

  @media (max-width: 783px) {
    bottom: -250px;

    .line2 {
      bottom: -142px;
    }
  }

  @media (max-width: 720px) {
    bottom: -174px;

    .line2 {
      bottom: -76px;
      height: 48px;
    }
  }

  @media (max-width: 672px) {
    bottom: -258px;

    .line2 {
      bottom: -42px;
      height: 30px;
    }
  }

  @media (max-width: 600px) {
    bottom: -132px;

    .line2 {
      bottom: -102px;
      height: 62px;
    }
  }

  @media (max-width: 533px) {
    bottom: -189px;
  }

  @media (max-width: 500px) {
    bottom: -36px;
  }
`

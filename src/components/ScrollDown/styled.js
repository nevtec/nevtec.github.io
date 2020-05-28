import styled from "styled-components";

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
  
  @media (max-width: 1085px) {
    bottom: -260px;
  }

  @media (max-width: 966px) {
    bottom: -336px;
  }

  ${({ theme }) => theme.media.tablet`
    bottom: -136px;
  `}

  @media (max-width: 911px) {
    bottom: -202px;
  }

  @media (max-width: 813px) {
    bottom: -268px;
  }

  ${({ theme }) => theme.media.phone`
    bottom: -78px;
  `}

  @media (max-width: 737px) {
    bottom: -133px;
  }

  @media (max-width: 659px) {
    bottom: -190px;
  }

  @media (max-width: 559px) {
    bottom: -246px;
  }

  ${({ theme }) => theme.media.smallPhone`
    bottom: 2px;
  `}

  @media (max-width: 414px) {
    bottom: 28px;
  }

  @media (max-width: 411px) {
    bottom: 115px;
  }

  @media (max-width: 375px) {
    bottom: -44px;
  }

  @media (max-width: 320px) {
    bottom: -236px;
  }
  
`
export const PositionLine = styled.div`
  position: absolute;
  right: -20px;
  bottom: -146px;

  .line1 {
    width: 2px;
    height: 80px;
    
    background-color: ${({ theme }) => theme.colors.blueDefault};
  }

  .line2 {
    width: 2px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.whiteDefault};
  } 
`
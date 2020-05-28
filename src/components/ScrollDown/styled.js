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
    background-color: red;
  }

  @media (max-width: 1085px) {
    bottom: -220px;
  }

  @media (max-width: 966px) {
    bottom: -296px;
  }

  ${({ theme }) => theme.media.tablet`
    bottom: -98px;
  `}

  @media (max-width: 911px) {
    bottom: -164px;
  }

  @media (max-width: 813px) {
    bottom: -228px;
  }

  ${({ theme }) => theme.media.phone`
    bottom: -40px;
  `}

  @media (max-width: 737px) {
    bottom: -94px;
  }

  @media (max-width: 659px) {
    bottom: -150px;
  }

  @media (max-width: 559px) {
    bottom: -206px;
  }

  ${({ theme }) => theme.media.smallPhone`
    bottom: 40px;
  `}

  @media (max-width: 414px) {
    bottom: 65px; 
  }

  @media (max-width: 411px) {
    bottom: 152px; 
  }

  @media (max-width: 375px) {
    bottom: -2px;
  }

  @media (max-width: 320px) {
    bottom: -197px;
  }

`
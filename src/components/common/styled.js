import styled from "styled-components";

export const Title = styled.h1 `
  font-family: ${({ theme }) => theme.fonts.montLight};
  color: ${({ theme }) => theme.colors.grayTittle};
  font-size: 16px;
  margin: 0;
  line-height: 46px;
  letter-spacing: 2px;

  ${({ theme }) => theme.media.phone`
    font-size: 14px;
    margin: 0;
    line-height: 36px; 
  `}
`

export const Description = styled.h2 `
  font-family: ${({ theme }) => theme.fonts.montRegular};
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-size: 58px;
  width: 76%;
  margin-top: 0;
  line-height: 76px;

  ${({ theme }) => theme.media.tablet`
    font-size: 48px;
    line-height: 66px;
  `}

  ${({ theme }) => theme.media.phone`
    font-size: 38px;
    line-height: 56px;
  `}

  ${({ theme }) => theme.media.smallPhone`
    width: initial;
    font-size: 30px;
    line-height: 48px;
  `}
`

export const Navigation = styled.nav`
  cursor: pointer;
`

export const UnList = styled.ul`
    padding: 0;
`

export const List = styled.li`
  list-style-type: none;
  line-height: 50px;
`

export const Link = styled.a `
  &:hover{
      transition: all 0.6s;
      color: ${({ theme }) => theme.colors.blueDefault};
  }
`
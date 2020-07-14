import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgMenu};
  display: flex;
`

export const ContainerFooter = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const ContentFooter = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 60px auto 0;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grafit};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 120px;
  grid-row-gap: 30px;

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: 1fr;
  `}
`

export const DescFooter = styled.p`
  font-family: ${({ theme }) => theme.fonts.montLight};
  line-height: 30px;
  font-size: 14px;
`
export const TitleFooter = styled.h3`
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-family: ${({ theme }) => theme.fonts.montLight};
  font-size: 14px;
  padding-bottom: 8px;
  letter-spacing: 2px;
`

export const PositionCopy = styled.div`
  padding: 60px 0;
`

export const Copyright = styled.span`
  color: ${({ theme }) => theme.colors.grafit};
  font-family: ${({ theme }) => theme.fonts.montLight};
  font-size: 14px;
`
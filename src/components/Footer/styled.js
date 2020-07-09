import styled from "styled-components";

import Icons from "@components/Icons";

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
export const ContentEmail = styled.div`
  background: ${({ theme }) => theme.colors.writeHove};
  max-width: 440px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
`

export const EmailWrapper = styled(Icons.Email)`
  width: 38px;
  padding: 10px;
`

export const EmailLine = styled.input`
  background: none;
  max-width: 260px;
  width: 100%;
  height: 28px;
  padding-top: 14px;
  color: ${({ theme }) => theme.colors.whiteDefault};
  border-style: none;

  &:focus{
    outline-style: none;
  }
`

export const EmailBtn = styled.button`
  max-width: 124px;
  width: 100%;
  height: 96%;
  color: ${({ theme }) => theme.colors.whiteDefault};
  background: ${({ theme }) => theme.colors.blueDefault};
  font-family: ${({ theme }) => theme.fonts.montRegular};
  font-size: 11px;
  border-style: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.6s;

  &:focus{
    outline-style: none;
  }

  &:hover{
    background: ${({ theme }) => theme.colors.btnHover};
  }
`

export const PositionCopy = styled.div`
  padding: 60px 0;
`

export const Copyright = styled.span`
  color: ${({ theme }) => theme.colors.grafit};
  font-family: ${({ theme }) => theme.fonts.montLight};
  font-size: 14px;
`
import styled from "styled-components"

import Icons from "../Icons"

export const ClientsWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.clientsBg};
  display: flex;
  padding-bottom: 138px;
`

export const ContainerClients = styled.div`
  ${({ theme }) => theme.setContainer()};
  width: 86%;
`

export const ContentHeader = styled.header`
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;
  max-width: 1000px;
`

export const ContentClients = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-top: 46px;
  text-align: center;
  text-align: -webkit-center;

  div.slick-slider {
    button.slick-arrow {
      display: none !important;
    }

    ul > li > button::before {
      font-size: 12px;
    }
  }
`

export const BorderClients = styled.div`
  border-style: none;

  &:focus {
    outline-style: none;
  }
`

const iconsClients = `
  max-width: 130px;
  width: 100%;
  transition: all 0.6s;
`

export const AppleWrapper = styled(Icons.Apple)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.grafit};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const ReactWrapper = styled(Icons.ReactLogo)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.grafit};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const DropboxWrapper = styled(Icons.Dropbox)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.grafit};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const FirefoxWrapper = styled(Icons.Firefox)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.grafit};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const DisplayLine = styled.div`
  position: relative;
`

export const LineClients = styled.div`
  position: absolute;
  bottom: -14rem;
  width: 2px;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.blueDefault};
  z-index: 8;
`

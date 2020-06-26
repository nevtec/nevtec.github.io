import styled from "styled-components";

import Icons from "../Icons";

export const ClientsWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.clientsBg};
  display: flex;
  padding-bottom: 138px;
`

export const ContainerClients = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const ContentHeader = styled.header`
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;
`

export const ContentClients = styled.div`
  width: 100%;
  margin-top: 46px;
  text-align: center;
  text-align: -webkit-center;
`

export const BorderClients = styled.div`
  border-style: none;

  &:focus{
    outline-style: none;
  }
`

const iconsClients = `
  width: 130px;
  transition: all 0.6s;
`

export const AppleWrapper = styled(Icons.Apple)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.linelight};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const ReactWrapper = styled(Icons.ReactLogo)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.linelight};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const DropboxWrapper = styled(Icons.Dropbox)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.linelight};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`

export const FirefoxWrapper = styled(Icons.Firefox)`
  ${iconsClients}
  color: ${({ theme }) => theme.colors.linelight};

  &:hover{
    color: ${({ theme }) => theme.colors.bgMenu};
  }
`
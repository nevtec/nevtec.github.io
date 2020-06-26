import styled from "styled-components";

// import Icons from "../Icons";git 

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

  &::after{
    content: '';
    display: block;
    width: 40%;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.linelight};
    margin-bottom: 16px;
  }
`

export const ContentClients = styled.div`
  width: 100%;
  margin-top: 46px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 50px;

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: 1fr;
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`
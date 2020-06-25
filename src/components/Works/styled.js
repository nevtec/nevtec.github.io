import styled from "styled-components";

import mujer from '@images/mujer.jpg';

export const WorksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 138px;
`

export const BgTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.bgWorks};
  width: 100%;
  display: flex;
  padding-bottom: 210px;
`

export const BgWorks = styled.div`
  width: 100%;
  display: flex;
`

export const ContainerWorks = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const IntroWrapper = styled.header`
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
export const WorksContent = styled.div`
  text-align: center;
  text-align: -webkit-center;
  width: 90%;
  margin-top: -170px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`






export const ItemThumb = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Figurao = styled.figure`
  margin: 0;
  padding: 0;
  background-image: url(${mujer});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-size: cover;
  height: 580px;

  &:hover{
    background-size: 190%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
  }
`

export const Textao = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: red;
  background: rgba(0, 0, 0, 0.4);
  transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  box-shadow: inset 0 0 100px 50px rgba(0, 0, 0, 0.5);
`

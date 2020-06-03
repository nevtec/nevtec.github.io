import styled from "styled-components";

import img from '../../images/back.jpg';

export const SectionHeader = styled.header `
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    opacity: .9;
    display: flex;
    padding-bottom: 138px;
`

export const ContainerHeader = styled.div `
    ${ ({ theme }) => theme.setContainer()};
`

export const PositionLogo = styled.div `
    max-width: 10%;
    margin-right: auto;
    padding: 38px 0;
`

export const HeaderWrapper = styled.div `
    width: 100%;
    max-width: 1000px;
    padding-top: 114px;

    ${({ theme }) => theme.media.smallPhone`
        text-align: center;
        text-align: -webkit-center;
        padding-top: 30px;
    `}
`

export const BtnContainer = styled.div `
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    ${({ theme }) => theme.media.smallPhone`
        flex-direction: column;
        padding-top: 10px;
    `} 
`

export const BtnHeader = styled.button`
    background: none;
    color: ${({ theme }) => theme.colors.whiteDefault};
    border: 2px solid ${({ theme }) => theme.colors.whiteDefault};
    padding: 18px 46px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.6s;

    &:hover{
        background: ${({ theme }) => theme.colors.whiteDefault};
        color: ${({ theme }) => theme.colors.writeHove};
    }

    ${({ theme }) => theme.media.smallPhone`
        margin-bottom: 14px;
    `} 
`

export const ScrollWrapper = styled.div`
    position: relative;
`
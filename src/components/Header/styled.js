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

    h1{
        font-family: ${({ theme }) => theme.fonts.montLight};
        color: ${({ theme }) => theme.colors.grayTittle};
        font-size: 16px;
        margin: 0;
        line-height: 46px;
        letter-spacing: 2px;
    }
    
    h3{
        font-family: ${({ theme }) => theme.fonts.montRegular};
        color: ${({ theme }) => theme.colors.whiteDefault};
        font-size: 58px;
        width: 76%;
        margin-top: 0;
        line-height: 76px;
    }

    ${({ theme }) => theme.media.tablet`
        h3{
            font-size: 48px;
            line-height: 66px;
        }
    `}

    ${({ theme }) => theme.media.phone`

        h1{
            font-size: 14px;
            margin: 0;
            line-height: 36px; 
        }

        h3{
            font-size: 38px;
            line-height: 56px;
        }
    `}

    ${({ theme }) => theme.media.smallPhone`
        text-align: center;
        text-align: -webkit-center;
        padding-top: 30px;

        h3{
            width: initial;
            font-size: 30px;
            line-height: 48px;
        }
    `}
    
`

export const BtnContainer = styled.div `
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;

    button{
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
    } 

    ${({ theme }) => theme.media.smallPhone`
        flex-direction: column;
        padding-top: 10px;

        button{
            margin-bottom: 14px;
        }
    `} 
`

export const testeScroll = styled.div`
    color: red;
    position: relative;
    bottom: -186px;
    right: 68px;
`
import styled from "styled-components";
import img from '../../images/back.jpg';


export const SectionHeader = styled.section `
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
    z-index: 2;
`

export const HeaderWrapper = styled.div `

    width: 94%;
    max-width: 1000px;
    position: relative;
    padding-top: 114px;
    margin: 0 auto;
    
    h3{
        font-family: ${({ theme }) => theme.fonts.montLight};
        color: ${({ theme }) => theme.colors.grayTittle};
        font-size: 16px;
        margin: 0;
        line-height: 46px;
        letter-spacing: 2px;
    }

    h1{
        font-family: ${({ theme }) => theme.fonts.montRegular};
        color: ${({ theme }) => theme.colors.whiteDefault};
        font-size: 58px;
        width: 76%;
        margin-top: 0;
        line-height: 76px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}){
        h1{
            color: red;
        }
    }
`

export const BtnHeader = styled.div `
    align-content: space-between;
    max-width: 450px;
    display: flex;
    justify-content: flex-start;
    place-content: space-between;
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
    
    @media (max-width: 783px){
        flex-direction: column;

        button{
            margin-bottom: 10px;
        }
    }

    @media (max-width: 720px){
        padding-top: 20;
    }

    @media (max-width: 600px){
        padding-top: 10px;
    }

`
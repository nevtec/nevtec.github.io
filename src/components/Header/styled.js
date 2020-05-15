import styled from "styled-components";
import img from '../../images/back.jpg';
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';

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

    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }
`

/*export const HeaderShadow = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 133%;
    opacity: .6;
    background-color: #000000;
`*/

export const PositionLogo = styled.div `
    max-width: 10%;
    padding: 38px;
    z-index: 2;
`

export const HeaderWrapper = styled.div `
    

    max-width: 55%;
    font-family: "montserrat-bold-webfont";
    position: relative;
    padding-top: 228px;
    
    h3{
        color: rgba(255,255,255,.5);
        font-size: 16px;
        margin: 0;
        line-height: 46px;
    }

    h1{
        font-size: 56px;
        color: #fff;
        margin-top: 0;
        line-height: 76px;
    }

    @media (max-width: 1315px){
        h1{
            font-size: 43px;
        }
    }

    @media (max-width: 1014px){
        max-width: 60%;
    }

    @media (max-width: 930px){
        padding-top: 150px;

        h1{
            font-size: 36px; 
        }
    }

    @media (max-width: 720px){
        max-width: 70%;
        margin-left: -44px;
        text-align: center;

        h1{
            line-height: 68px;
        }
    }

    @media (max-width: 600px){
        h1{
            font-size: 32px;
            line-height: 57px;
        }
    }

    @media (max-width: 500px){
        h3{
            line-height: 40px;
            font-size: 14px;
        }

        h1{
            font-size: 26px;
            line-height: 50px;
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
        color: #fff;
        border: 2px solid #fff;
        padding: 18px 46px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.6s;

        &:hover{
            background: #fff;
            color: #000;
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

export const MenuSection = styled.div `

`

export const SocialSection = styled.div `

`
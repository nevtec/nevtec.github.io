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
    padding-bottom: 100px;

    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }
`

export const HeaderShadow = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 135%;
    opacity: .6;
    background-color: #000000;
`

export const PositionLogo = styled.div `
    padding: 38px;
    z-index: 2;
`

export const HeaderWrapper = styled.div `
    

    max-width: 716px;
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

`

export const ScrollD = styled.div `
    position: absolute;
    z-index: 3;
    bottom: -106px;
    right: 54px;
    
    a{
        font-family: "montserrat-bold-webfont";
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
    }

    div{
        width: 2px;
        height: 162px;
        position: absolute;
        right: -20px;
        bottom: -152px;
        background-color: #345cc6;
    }
`

export const MenuSection = styled.div `


`

export const SocialSection = styled.div `


`
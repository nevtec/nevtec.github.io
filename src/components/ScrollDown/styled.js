import styled from "styled-components";
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';

export const ScrollStyled = styled.div `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    font-family: "montserrat-regular-webfont";
    position: absolute;
    z-index: 3;
    bottom: -186px;
    right: 68px;

    a{
        font-family: "montserrat-bold-webfont";
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
        transition: all 0.6s;

        &:hover{
            color: #345cc6;
            cursor: pointer;
        }
    }

    .line1 {
        width: 2px;
        height: 162px;
        position: absolute;
        right: -20px;
        bottom: -152px;
        background-color: #345cc6;
    }

    .line2 {
        width: 2px;
        height: 82px;
        position: absolute;
        right: -20px;
        bottom: -148px;
        background-color: #fff;
    }

    @media (max-width: 1315px){
        bottom: -165px;

        .line2{
            bottom: -159px;
        }
    }

    @media (max-width: 930px){
        bottom: -106px;

        .line2{
            bottom: -134px;
        }
    }

    @media (max-width: 783px){
        bottom: -250px;

        .line2{
            bottom: -142px;
        }
    }

    @media (max-width: 720px){
        bottom: -174px;

        .line2{
            bottom: -76px;
            height: 48px;
        }
    }

    @media (max-width: 672px){
        bottom: -258px;

        .line2{
            bottom: -42px;
            height: 30px;
        }
    }

    @media (max-width: 600px){
        bottom: -132px;

        .line2{
            bottom: -102px;
            height: 62px;
        }
    }

    @media (max-width: 533px){
        bottom: -189px;
    }

    @media (max-width: 500px){
        bottom: -36px;
    }

`
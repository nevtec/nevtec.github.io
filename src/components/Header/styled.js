import styled from "styled-components";
import img from '../../images/back.jpg';
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';

export const SectionHeader = styled.div `
    width: 100%;
    height: 890px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    opacity: 0.9;

`

export const PositionLogo = styled.div `
    padding: 38px;

`

export const HeaderWrapper = styled.div `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    max-width: 700px;
    font-family: "montserrat-bold-webfont";
    
    h3{
        color: rgba(255,255,255,.5);
        font-size: 16px;
        margin: 0;
    }

    h1{
        font-size: 56px;
        color: #fff;
        margin-top: 0;
    }

`
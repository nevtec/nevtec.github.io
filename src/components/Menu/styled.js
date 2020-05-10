import styled from "styled-components";
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';

export const Menu = styled.div `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    background-color: #000;
    display: block;
    position: absolute;
    right: 10px;
    margin: 38px;

    h3{
        font-family: "montserrat-bold-webfont";
        color: #fff;
    }

`
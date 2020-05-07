import styled from "styled-components";
import montserrat from '../../fonts/montserrat/montserrat-semibold-webfont.woff2'

export const LogoWrapper = styled.div `

    @font-face {
        font-family: "montserrat-bold-webfont";
        src: url(${montserrat});
    }

    font-family: "montserrat-bold-webfont";
    font-size: 28px;
    color: #fff;

`
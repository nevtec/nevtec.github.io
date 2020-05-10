import styled from "styled-components";
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';

export const MediaWrapper = styled.article `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    } 
    
    font-family: "montserrat-bold-webfont";
    color: #fff;
    position: absolute;
    right: 0;
    top: 272px;
    
    div{
        width: 50px;
        height: 50px;
        border: 1px solid #fff;
        border-radius: 50px 50px;
        text-align-last: center;
        margin: 6px;
    }
    
`
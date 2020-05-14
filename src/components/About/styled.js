import styled from "styled-components"
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';
import montserratlight from '../../fonts/montserrat/montserrat-light-webfont.woff2';

export const AboutSection = styled.section `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    @font-face {
        font-family: "montserrat-light-webfont";
        src: url(${montserratlight});
    }

    max-width: 100%;
    background: #1e8bc3;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "montserrat-regular-webfont";

    header{
        text-align: center;
        padding-top: 160px;
        border-bottom: 1px solid #ffffff69;
        width: 470px;

        h3{
            font-size: 16px;
            margin: 0;
            line-height: 46px;
        }

        h1{
            font-size: 74px;
            color: #fff;
            margin-top: 0;
            line-height: 76px;
        }
    }

    div{
        max-width: 970px;
        margin-top: 10px;

        p{
            font-family: "montserrat-light-webfont";
            font-size: 22px;
            line-height: 42px;
            text-align: center;
        }
    }

`
export const ScoreWrapper = styled.div `
    display: flex;
    flex-direction: row;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin-top: 46px;

    .ScoreBox{
        margin: auto;
        padding: 0px 38px;
    }

    .acount{
        font-size: 90px;
        font-weight: bold;
    }

    h5{
        color: #000;
    }
`
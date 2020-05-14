import styled from "styled-components";
import montserrat from '../../fonts/montserrat/montserrat-regular-webfont.woff2';
import montserratlight from '../../fonts/montserrat/montserrat-light-webfont.woff2';

export const BtnMenu = styled.label `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    display: block;
    position: fixed;
    background-color: #000;
    right: 4px;
    top: -8px;
    margin: 38px;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    z-index: 99;

    span{
        font-family: "montserrat-regular-webfont";
        font-size: 16px;
        text-transform: uppercase;
        color: #1e8bc3;
        padding-right: 14px;
        transition: all 0.6s;

        &:hover{
            color: #fff;
        }   
    }
`

export const Gerald = styled.div `
    input{
        display: none;
    }
`

export const SideMenu = styled.div `
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserrat});
    }

    font-family: "montserrat-regular-webfont";
    color: #fff;
    background-color: #000;
    width: 280px;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 98;
    position: fixed;
    
    //display: none;

    div{
        padding-left: 40px;
        padding-top: 64px;

        div{
            padding: 0;
        }
    }

    nav{
        cursor: pointer;

        ul{
            padding: 0;
        }

        li{
            list-style-type: none;
            line-height: 50px;

            a:hover{
                transition: all 0.6s;
                color: #1e8bc3;
            }
        }
    }
`

export const TextMenu = styled.div `
    @font-face {
        font-family: "montserrat-light-webfont";
        src: url(${montserratlight});
    }

    width: 198px;
    margin-top: 26px;
    font-family: "montserrat-light-webfont";

    p{
        color: #808080;
        line-height: 23px;
        font-size: 13px;
    }

    span{
        color: #1e8bc3;
    }
`
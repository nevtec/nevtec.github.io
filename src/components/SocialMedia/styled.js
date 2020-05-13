import styled from "styled-components";

export const MediaWrapper = styled.nav ` 
    
    color: #fff;
    position: absolute;
    right: 84px;
    top: 280px;
    width: 100px;

    li{
        list-style-type: none;
        cursor: pointer;
        position: relative;
        height: 60px;

        a{
            text-decoration: none;
            color: #fff;
            display: block;
            width: 100%;
            height: 100%;
            transition: all .5s linear;
            display: block;

            figure{
                width: 38px;
                height: 38px;
                border: 2px solid #fff;
                border-radius: 38px 38px;
                text-align-last: center;
                position: absolute;
                top: -24px;
                left: 30px;
            }

            span{
                display: none;
            }

            &:hover{
                z-index: 1;

                span{
                    display: block;
                    padding-left: -40%;
                }
            }
        }
    }

    svg{
        width: 22px;
        padding-top: 8px;
    }

    @media (max-width: 930px){
        top: 198px;
    }

    @media (max-width: 783px){
        bottom: -106px;
    }
    
    @media (max-width: 720px){
        display: none;
    }
`
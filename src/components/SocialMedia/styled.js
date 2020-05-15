import styled from "styled-components";
import montserratlight from '../../fonts/montserrat/montserrat-light-webfont.woff2';
import Icons from '../Icons'

export const MediaWrapper = styled.nav ` 
    @font-face {
        font-family: "montserrat-regular-webfont";
        src: url(${montserratlight});
    }
    
    color: #fff;
    position: absolute;
    right: 84px;
    top: 280px;
    width: 100px;

    li{
        list-style-type: none;
        cursor: pointer;
        position: relative;
        height: 42px;

        a{
            text-decoration: none;
            color: #fff;
            display: block;
            width: 100%;
            height: 100%;
            font-family: "montserrat-regular-webfont";

            

            span{
                display: none;
                font-size: 12px;
                text-align: right;
            }

            &:hover{
                z-index: 1;

                span{
                    transition: all 0.6s;
                    display: block;
                    padding-left: -40%;
                }
            }
        }
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

export const FaceWrapper = styled(Icons.Facebook) `
    width: 32px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 38px 38px;
    text-align-last: center;
    position: absolute;
    top: -14px;
    left: 70px;
    transition: all 0.6s;

    &:hover{
        
        color: #3b5998;
        border: 2px solid #3b5998;
    }
`

export const TwitterWrapper = styled(Icons.Twitter) `
    width: 32px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 38px 38px;
    text-align-last: center;
    position: absolute;
    top: -14px;
    left: 70px;
    transition: all 0.6s;

    &:hover{
        
        color: #1da1f2;
        border: 2px solid #1da1f2;
    }
`

export const InstaWrapper = styled(Icons.Instagram) `
    width: 32px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 38px 38px;
    text-align-last: center;
    position: absolute;
    top: -14px;
    left: 70px;
    transition: all 0.6s;

    &:hover{
        
        color: #e95950;
        border: 2px solid #e95950;
    }
`

export const BehanceWrapper = styled(Icons.Behance) `
    width: 32px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 38px 38px;
    text-align-last: center;
    position: absolute;
    top: -14px;
    left: 70px;
    transition: all 0.6s;

    &:hover{
        
        color: #053eff;
        border: 2px solid #053eff;
    }
`

export const DribbbleWrapper = styled(Icons.Dribbble) `
    width: 32px;
    height: 31px;
    border: 2px solid #fff;
    border-radius: 38px 38px;
    text-align-last: center;
    position: absolute;
    top: -14px;
    left: 70px;
    transition: all 0.6s;

    &:hover{
        
        color: #ea4c89 ;
        border: 2px solid #ea4c89;
    }
`

import styled from "styled-components";

import Icons from '../Icons';

export const BtnMenu = styled.label `
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bgBtnMenu};
    position: fixed;
    right: 4px;
    top: -8px;
    margin: 38px;
    color: ${({ theme }) => theme.colors.whiteDefault};
    font-size: 28px;
    cursor: pointer;
    z-index: 99;

    span{
        font-family: ${({ theme }) => theme.fonts.montRegular};
        font-size: 16px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.blueDefault};
        padding-right: 14px;
        transition: all 0.6s;

        &:hover{
            color: ${({ theme }) => theme.colors.whiteDefault};
        }   
    }
`

export const Gerald = styled.div `
    input{
        display: none;
    }

    .menu {
    margin-right: -100%;
    transition: all .6s;
    }

    #bt_menu:checked ~ .menu{
        margin-right: 0;
    }
`

export const SideMenu = styled.div `
    font-family: ${({ theme }) => theme.fonts.montRegular};
    color: ${({ theme }) => theme.colors.whiteDefault};
    background-color: ${({ theme }) => theme.colors.bgMenu};
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
                color: ${({ theme }) => theme.colors.blueDefault};
            }
        }
    }
`

export const TextMenu = styled.div `
    font-family: ${({ theme }) => theme.fonts.montLight};
    width: 198px;
    margin-top: 26px;

    p{
        color: ${({ theme }) => theme.colors.grayText};
        line-height: 23px;
        font-size: 13px;
    }

    span{
        color: ${({ theme }) => theme.colors.blueDefault};
    }
`

export const SocialStyle = styled.div `
    cursor: pointer;
    display: flex;
    flex-direction: row;

    ul{
        text-decoration: none;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        padding: 0;

        li{
            margin: 0 8px;
        }

        a{
            
            color: ${({ theme }) => theme.colors.whiteDefault};
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    
`

const iconsocial = `
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 38px 38px;
    transition: all 0.6s;
`

export const FaceWrapper = styled(Icons.Facebook) `
    ${iconsocial};

    &:hover{
        
        color: ${({ theme }) => theme.colors.fbColor};
        border: 2px solid ${({ theme }) => theme.colors.fbColor};
    }
`

export const TwitterWrapper = styled(Icons.Twitter) `
    ${iconsocial};

    &:hover{
        
        color: ${({ theme }) => theme.colors.twColor};
        border: 2px solid ${({ theme }) => theme.colors.twColor};
    }
`

export const InstaWrapper = styled(Icons.Instagram) `
    ${iconsocial};
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 38px 38px;

    &:hover{
        
        color: ${({ theme }) => theme.colors.instaColor};
        border: 2px solid ${({ theme }) => theme.colors.instaColor};
    }
`

export const BehanceWrapper = styled(Icons.Behance) `
    ${iconsocial};

    &:hover{
        
        color: ${({ theme }) => theme.colors.behaColor};
        border: 2px solid ${({ theme }) => theme.colors.behaColor};
    }
`

export const DribbbleWrapper = styled(Icons.Dribbble) `
    ${iconsocial};

    &:hover{
        
        color: ${({ theme }) => theme.colors.dribbbColor};
        border: 2px solid ${({ theme }) => theme.colors.dribbbColor};
    }
`
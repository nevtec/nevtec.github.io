import styled from "styled-components";

import Icons from '../Icons';

export const MenuWrapper = styled.div `
    input{
        display: none;
    }
`

export const BtnContent = styled.label `
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
`

export const MenuName = styled.span`
    font-family: ${({ theme }) => theme.fonts.montRegular};
    font-size: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blueDefault};
    position: relative;
    top: -4px;
    padding-right: 14px;
    transition: all 0.6s;

    &:hover{
        color: ${({ theme }) => theme.colors.whiteDefault};
    }
`

export const SideMenu = styled.div`
    font-family: ${({ theme }) => theme.fonts.montRegular};
    color: ${({ theme }) => theme.colors.whiteDefault};
    background-color: ${({ theme }) => theme.colors.bgMenu};
    width: 280px;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 98;
    position: fixed;
    transform: translateX(280px);
    transition: all .6s;
    
    #bt_menu:checked ~ &{
        transform: translateX(0);
    }
`

export const ContainerMenu = styled.div`
    padding-left: 40px;
    padding-top: 64px;
`

export const NavWrapper = styled.nav`
  cursor: pointer;
`

export const UnList = styled.ul`
    padding: 0;
`

export const List = styled.li`
  list-style-type: none;
  line-height: 50px;
`

export const Link = styled.a`
  &:hover{
      transition: all 0.6s;
      color: ${({ theme }) => theme.colors.blueDefault};
  }
`

export const BoxText = styled.div`
    font-family: ${({ theme }) => theme.fonts.montLight};
    width: 198px;
    margin-top: 26px;
`

export const TextDescription = styled.p`
    color: ${({ theme }) => theme.colors.grayText};
    line-height: 23px;
    font-size: 13px;
`

export const Contrast = styled.span`
    color: ${({ theme }) => theme.colors.blueDefault};
`

export const UlSocial = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
    margin-left: -8px;
    margin-top: 40px;
`

export const LiSocial = styled.li`
    margin: 0 8px;
`

export const IconLink = styled.a`
    color: ${({ theme }) => theme.colors.whiteDefault};
`

const iconsocial = `
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-radius: 38px 38px;
    transition: all 0.6s;
`

export const FaceWrapper = styled(Icons.Facebook)`
    ${iconsocial};

    &:hover{
        color: ${({ theme }) => theme.colors.fbColor};
        border: 2px solid ${({ theme }) => theme.colors.fbColor};
    }
`

export const TwitterWrapper = styled(Icons.Twitter)`
    ${iconsocial};

    &:hover{
        color: ${({ theme }) => theme.colors.twColor};
        border: 2px solid ${({ theme }) => theme.colors.twColor};
    }
`

export const InstaWrapper = styled(Icons.Instagram)`
    ${iconsocial};

    &:hover{
        color: ${({ theme }) => theme.colors.instaColor};
        border: 2px solid ${({ theme }) => theme.colors.instaColor};
    }
`

export const BehanceWrapper = styled(Icons.Behance)`
    ${iconsocial};

    &:hover{
        color: ${({ theme }) => theme.colors.behaColor};
        border: 2px solid ${({ theme }) => theme.colors.behaColor};
    }
`

export const DribbbleWrapper = styled(Icons.Dribbble)`
    ${iconsocial};

    &:hover{
        color: ${({ theme }) => theme.colors.dribbbColor};
        border: 2px solid ${({ theme }) => theme.colors.dribbbColor};
    }
`
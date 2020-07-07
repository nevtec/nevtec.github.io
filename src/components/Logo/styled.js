import styled from "styled-components";

export const LogoWrapper = styled.h1 `
    color: ${({ theme }) => theme.colors.whiteDefault};
    font-family: ${({ theme }) => theme.fonts.montBold};
    font-size: 28px;
    width: 114px;
    margin-top: 0;
`

export const Highlight = styled.span `
    color: ${({ theme }) => theme.colors.blueDefault};
`
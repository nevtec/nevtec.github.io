import styled from "styled-components";

const dynanmicVariants = ({ variant, theme }) =>
({
  primary:`
    color: ${theme.colors.whiteDefault};
    width: 76%;
    font-size: 58px;
  `,

  secondary: `
    color: ${theme.colors.whiteDefault};
    width: 76%;
    font-size: 70px;
    letter-spacing: 2px;
  `,

  light: `
    color: ${theme.colors.bgMenu};
    width: 80%;
    font-size: 52px;
  `,

  black: `
    color: ${theme.colors.whiteDefault};
    width: 76%;
    font-size: 52px;
  `
}[variant]);

const Title = styled.h2`
  ${dynanmicVariants};
  font-family: ${({ theme }) => theme.fonts.montRegular};
  margin-top: 0;
  line-height: 76px;

  ${({ theme }) => theme.media.tablet`
    font-size: 48px;
    line-height: 56px;
  `}

  ${({ theme }) => theme.media.phone`
    width: initial;
    font-size: 42px;
    line-height: 48px;
  `}
`

export default Title;
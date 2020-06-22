import styled from "styled-components";

const dynanmicVariants = ({ variant, theme }) =>
({
  primary: `
    color: ${theme.colors.whiteDefault};
    width: 76%;
  `,
}[variant]);

const Title = styled.h2`
  ${dynanmicVariants};
  font-family: ${({ theme }) => theme.fonts.montRegular};
  font-size: 58px;
  margin-top: 0;
  line-height: 76px;

  ${({ theme }) => theme.media.tablet`
    font-size: 48px;
    line-height: 56px;
  `}

  ${({ theme }) => theme.media.phone`
    width: initial;
    font-size: 34px;
    line-height: 48px;
  `}
`

export default Title;
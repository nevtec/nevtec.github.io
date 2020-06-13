import styled from "styled-components";

const dynanmicVariants = ({ variant, theme }) =>
({
  primary: `
    color: ${theme.colors.whiteDefault};
  `,

  secondary: `
  `,
}[variant]);

const Description = styled.h1`
  ${dynanmicVariants};
  font-family: ${({ theme }) => theme.fonts.montLight};
  font-size: 16px;
  margin: 0;
  line-height: 46px;
  letter-spacing: 2px;
`

export default Description;
import styled from "styled-components";

const Description = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montLight};
  color: ${({ theme }) => theme.colors.grayTittle};
  font-size: 16px;
  margin: 0;
  line-height: 46px;
  letter-spacing: 2px;
`

export default Description;
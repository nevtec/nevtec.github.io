import styled from "styled-components";

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.montRegular};
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-size: 58px;
  width: 76%;
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
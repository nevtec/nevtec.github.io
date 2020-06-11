import styled from "styled-components";

export const BtnStyles = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.whiteDefault};
  border: 2px solid ${({ theme }) => theme.colors.whiteDefault};
  padding: 18px 46px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s;

  &:hover{
      background: ${({ theme }) => theme.colors.whiteDefault};
      color: ${({ theme }) => theme.colors.writeHove};
  }

  ${({ theme }) => theme.media.phone`
      margin-bottom: 14px;
  `} 
`
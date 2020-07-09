import styled from "styled-components";

const dynanmicVariants = ({ variant, theme }) =>
({
  primary: `
    background: none;
    color: ${theme.colors.whiteDefault};
    border: 2px solid ${theme.colors.whiteDefault};
    
    &:hover{
      background: ${theme.colors.whiteDefault};
      color: ${theme.colors.writeHove};
    }
  `,

  secondary: `
    width: 100%;
    height: 50px;
    color: ${theme.colors.whiteDefault};
    background: ${theme.colors.blueDefault};
    font-family: ${theme.fonts.montRegular};
    border-style: none;
    
    &:hover{
      background: ${theme.colors.btnHover};
      color: ${theme.colors.writeHove};
    }
  `,
}[variant]);

const BtnStyled = styled.button`
  ${dynanmicVariants};
  font-family: ${({ theme }) => theme.fonts.montRegular};
  font-size: 12px;
  letter-spacing: 2px;
  padding: 18px 36px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s;

  ${({ theme }) => theme.media.phone`
      margin-bottom: 14px;
  `} 
`

export default BtnStyled;
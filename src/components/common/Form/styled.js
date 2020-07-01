import styled from "styled-components";

export const FormWrapper = styled.form`
  text-align: center;
  text-align: -webkit-center;
`

export const FieldOrientation = styled.fieldset`
  border-style: none;
  width: 86%;
`

const formInfo = `
  width: 100%;
  height: 30px;
  font-size: 14px;
  background: none;
  border: none;
  border-bottom: 1px solid;
  outline: 0;
  padding-bottom: 10px;
  margin-bottom: 24px;
  transition: all 0.8s;
`

export const YourInfo = styled.input`
  ${formInfo}
  color: ${({ theme }) => theme.colors.whiteDefault};
  border-color: ${({ theme }) => theme.colors.grafit};
  
  &:focus {
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.blueDefault};
  }
`

export const YourMessage = styled.textarea`
  ${formInfo}
  height: 180px;
  color: ${({ theme }) => theme.colors.whiteDefault};
  border-color: ${({ theme }) => theme.colors.grafit};
  
  &:focus {
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.blueDefault};
  }
`

export const PositionButton = styled.div`
  padding: 50px 0 20px;
`
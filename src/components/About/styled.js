import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.blueDefault};
  display: flex;
  padding-bottom: 138px;
`

export const ContainerAbout = styled.div`
  ${ ({ theme }) => theme.setContainer()};
`

export const ContentHeader = styled.header`
  text-align: center;
  text-align: -webkit-center;
  padding-top: 146px;
  width: 100%;

  &::after{
    content: '';
    display: block;
    width: 40%;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.lineColor};
    margin-bottom: 16px;
  }
`

export const ContentText = styled.div`
  font-family: ${({ theme }) => theme.fonts.montLight};
  width: 78%;
  text-align: center;

  ${({ theme }) => theme.media.phone`
    width: 100%;
  `} 
`

export const ParagraphAbout = styled.p`
  font-size: 22px;
  line-height: 40px;

  ${({ theme }) => theme.media.phone`
    font-size: 18px;
    line-height: 30px;
  `}
`

export const ContentNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.fonts.montBold};
  text-align: center;
  margin-top: 46px;
`

export const ScoreContent = styled.div`
  margin: auto;
  padding: 0px 38px;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.lineColor};
`

export const ScoreNumber = styled.div`
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-size: 90px;
`

export const ScoreName = styled.h3 `
  font-size: 16px;
`
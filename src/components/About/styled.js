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
  font-size: 28px;
  line-height: 40px;
  font-family: "lora-regular, serif";

  ${({ theme }) => theme.media.phone`
    font-size: 22px;
    line-height: 30px;
  `}
`

export const ContentNumber = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.montBold};
  text-align: center;
  margin-top: 46px;
  place-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${({ theme }) => theme.media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
  `}

  ${({ theme }) => theme.media.phone`
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`

export const ScoreContent = styled.div`
  padding: 0px 4px;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.lineColor};

  &:nth-child(4n){
      border-style: none;
    }

  ${({ theme }) => theme.media.desktop`
    &:nth-child(2n){
      border-style: none;
    }
  `}

  ${({ theme }) => theme.media.phone`
    font-size: 34px;
    width: 50%;
    border-style: none;
    grid-template-columns: 1fr;
    border-bottom: 1px solid #ffffff6e; //TODO

    &:nth-child(even){
      border-bottom: 1px solid #ffffff6e; //TODO
    }
  `}
`

export const ScoreNumber = styled.div`
  color: ${({ theme }) => theme.colors.whiteDefault};
  font-size: 80px;

  ${({ theme }) => theme.media.phone`
    font-size: 60px;
  `}
`

export const ScoreName = styled.h3 `
  font-size: 18px;
`
import React, { useEffect } from "react"
import Aos from "aos"

import Title from "@components/common/Title"
import Description from "@components/common/Description"

import {
  WorksWrapper,
  BgTitle,
  BgWorks,
  ContainerWorks,
  IntroWrapper,
  WorksContent,
  FigureBox,
  FigureContent,
  TextBox,
  PositionText,
  LinkWrapper,
  TitleBox,
  SubBox,
} from "./styled"

import { mockPortifolios } from "./mocks"

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, once: true })
  }, [])

  return (
    <WorksWrapper id="Works">
      <BgTitle>
        <ContainerWorks data-aos="fade-up">
          <IntroWrapper>
            <Description variant="light">RECENT WORKS</Description>
            <Title variant="black">
              We love what we do, check out some of our latest works
            </Title>
          </IntroWrapper>
        </ContainerWorks>
      </BgTitle>

      <BgWorks>
        <ContainerWorks>
          <WorksContent>
            {mockPortifolios.map((portifolio, index) => (
              <FigureBox data-aos="fade-up" key={index}>
                <FigureContent img={portifolio.img}>
                  <TextBox>
                    <PositionText>
                      <LinkWrapper />
                      <TitleBox>{portifolio.title}</TitleBox>
                      <SubBox>{portifolio.subTitle}</SubBox>
                    </PositionText>
                  </TextBox>
                </FigureContent>
              </FigureBox>
            ))}
          </WorksContent>
        </ContainerWorks>
      </BgWorks>
    </WorksWrapper>
  )
}

export default Works

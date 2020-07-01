import React, { useEffect } from "react";
import Aos from "aos";

import Title from "@components/common/Title";
import Description from "@components/common/Description";
import ServiceShowIn from '@components/common/ServiceShow';

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

          <WorksContent data-aos="fade-up">

            <FigureBox>
              <FigureContent>
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <TitleBox>SHUTTERBUG</TitleBox>
                    <SubBox>Paragráfo</SubBox>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <FigureContent>
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <TitleBox>SHUTTERBUG</TitleBox>
                    <SubBox>Paragráfo</SubBox>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <FigureContent>
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <TitleBox>SHUTTERBUG</TitleBox>
                    <SubBox>Paragráfo</SubBox>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox>
              <ServiceShowIn variant="primary">
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <TitleBox>SHUTTERBUG</TitleBox>
                    <SubBox>Paragráfo</SubBox>
                  </PositionText>
                </TextBox>
              </ServiceShowIn>
            </FigureBox>

          </WorksContent>

        </ContainerWorks>

      </BgWorks>
    </WorksWrapper>
  )
}

export default Works;

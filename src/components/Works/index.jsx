import React, { useEffect } from "react";
import Aos from "aos";

import Title from "@components/common/Title";
import Description from "@components/common/Description";

import {
  WorksWrapper,
  BgTitle,
  BgWorks,
  ContainerWorks,
  IntroWrapper,
  WorksContent,
  FigureBox,
  FigureContent,
  Figure,
  TextBox,
  PositionText,
  LinkWrapper,
  TitleBox,
  SubBox,
} from "./styled"

import mujer from "@images/mujer.jpg";
import woodcraft from "@images/woodcraft.jpg";

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
            
            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ mujer } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ woodcraft } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ woodcraft } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>
          
            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ mujer } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>
          
            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ mujer } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

            <FigureBox data-aos="fade-up">
              <FigureContent>
                <Figure src={ woodcraft } title="alguma coisa" />
                <TextBox>
                  <PositionText>
                    <LinkWrapper />
                    <div>
                      <TitleBox>SHUTTERBUG</TitleBox>
                      <SubBox>Paragráfo</SubBox>
                    </div>
                  </PositionText>
                </TextBox>
              </FigureContent>
            </FigureBox>

          </WorksContent>
        </ContainerWorks>
      </BgWorks>
    </WorksWrapper>
  )
}

export default Works;

import React, { useEffect } from "react"
import Aos from "aos"

import Title from "@components/common/Title"
import Description from "@components/common/Description"

import {
  ServicesWrapper,
  ContainerServices,
  ContentHeader,
  ContentService,
  TypeService,
  FigCapsule,
  WorldWrapper,
  TextBox,
  TitleBox,
  ParagraphServices,
} from "./styled"

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, once: true })
  }, [])

  return (
    <ServicesWrapper id="Services">
      <ContainerServices>
        <ContentHeader data-aos="fade-up">
          <Description variant="light">WHAT WE DO</Description>
          <Title variant="light">
            We’ve got everything you need to launch and grow your business
          </Title>
        </ContentHeader>

        <ContentService>
          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>

          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>

          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>

          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>

          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>

          <TypeService data-aos="fade-up">
            <FigCapsule>
              <WorldWrapper />
            </FigCapsule>
            <TextBox>
              <TitleBox>Brand Identity</TitleBox>
              <ParagraphServices>
                Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab
                sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt
                suscipit voluptas ipsa in tempora esse soluta sint.
              </ParagraphServices>
            </TextBox>
          </TypeService>
        </ContentService>
      </ContainerServices>
    </ServicesWrapper>
  )
}

export default Services

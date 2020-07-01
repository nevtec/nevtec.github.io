import React, { useEffect } from "react"
import Aos from "aos"

import Title from "@components/common/Title"
import Description from "@components/common/Description"
import Form from "@components/common/Form"

import {
  ContactWrapper,
  ContainerContact,
  ContentHeader,
  ContentContact,
  ContactPrimary,
  ContactSecondary,
  TitleOrientation,
  TitleContact,
  ContactInfo,
  InfoBox,
  InfoTitle,
  Information
} from "./styled"

import {
  NavWrapper,
  UlSocial,
  LiSocial,
  IconLink,
  FaceWrapper,
  TwitterWrapper,
  InstaWrapper,
  BehanceWrapper,
  DribbbleWrapper,
} from "@components/Menu/styled"

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210 })
  }, [])

  return (
    <ContactWrapper id="Contact">
      <ContainerContact>

        <ContentHeader data-aos="fade-up">
          <Description variant="light">Contact Us</Description>
          <Title variant="black">
            Reach out for a new project or just say hello
          </Title>
        </ContentHeader>

        <ContentContact data-aos="fade-up">

          <ContactPrimary>
            <TitleOrientation>
              <TitleContact>Send Us A Message</TitleContact>
            </TitleOrientation>
            <Form />
          </ContactPrimary>

          <ContactSecondary>
            <TitleOrientation>
              <TitleContact>Contact Info</TitleContact>
            </TitleOrientation>

            <ContactInfo>
              <InfoBox>
                <InfoTitle>Where to Find Us</InfoTitle>
                <Information>
                  1600 Amphitheatre Parkway Mountain View, CA 94043 US
                </Information>
              </InfoBox>

              <InfoBox>
                <InfoTitle>Email Us At</InfoTitle>
                <Information>contact@glintsite.com</Information>
                <Information>contact@glintsite.com</Information>
              </InfoBox>

              <InfoBox>
                <InfoTitle>Call Us At</InfoTitle>
                <Information>Phone: (+63) 555 1212</Information>
                <Information>Phone: (+63) 555 1212</Information>
                <Information>Phone: (+63) 555 1212</Information>
              </InfoBox>

              <div>
                <NavWrapper>
                  <UlSocial>
                    <LiSocial>
                      <IconLink href="./">
                        <FaceWrapper />
                      </IconLink>
                    </LiSocial>

                    <LiSocial>
                      <IconLink href="./">
                        <TwitterWrapper />
                      </IconLink>
                    </LiSocial>

                    <LiSocial>
                      <IconLink href="./">
                        <InstaWrapper />
                      </IconLink>
                    </LiSocial>

                    <LiSocial>
                      <IconLink href="./">
                        <BehanceWrapper />
                      </IconLink>
                    </LiSocial>

                    <LiSocial>
                      <IconLink href="./">
                        <DribbbleWrapper />
                      </IconLink>
                    </LiSocial>
                  </UlSocial>
                </NavWrapper>
              </div>
            </ContactInfo>
          </ContactSecondary>
        </ContentContact>

      </ContainerContact>
    </ContactWrapper>
  )
}

export default Contact

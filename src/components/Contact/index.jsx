import React, { useEffect } from "react";
import Aos from "aos";

import Title from '@components/common/Title';
import Description from '@components/common/Description';


import { ContactWrapper, ContainerContact, ContentHeader, ContentContact, ContactPrimary, ContactSecondary, TitleOrientation, TitleContact, FormWrapper, FieldOrientation, YourInfo, YourMessage, PositionButton, Submit, ContactInfo, InfoBox, InfoTitle, Information, PositionSocial } from './styled';

import { NavWrapper, UlSocial, LiSocial, IconLink, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper } from '@components/Menu/styled';

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, offset : 210 , });
  }, []);

  return (
    <ContactWrapper id="Contact">

      <ContainerContact>

        <ContentHeader data-aos="fade-up">
          <Description variant="light">CONTACT US</Description>
          <Title variant="black">Reach out for a new project or just say hello</Title>
        </ContentHeader>

        <ContentContact>
          <ContactPrimary>
            <TitleOrientation>
              <TitleContact>SEND US A MESSAGE</TitleContact>
            </TitleOrientation>
            
            <FormWrapper>
              <FieldOrientation>
                <YourInfo name="contactName" type="text" placeholder="Your Name" required />
                <YourInfo name="contactEmail" type="email" placeholder="Your E-mail" required />
                <YourInfo name="contactSubject" type="text" placeholder="Subject" required />
                <YourMessage name="contactMessage" type="text" placeholder="Your Message" row="10" cols="50" required></YourMessage>
                <PositionButton>
                  <Submit>Submit</Submit>
                </PositionButton>
              </FieldOrientation>
            </FormWrapper>
          </ContactPrimary>

          <ContactSecondary>
            <TitleOrientation>
              <TitleContact>CONTACT INFO</TitleContact>
            </TitleOrientation>

            <ContactInfo>
              <InfoBox>
                <InfoTitle>Where to Find Us</InfoTitle>
                <Information>1600 Amphitheatre Parkway Mountain View, CA 94043 US</Information>
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

              <PositionSocial>
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
              </PositionSocial>
            </ContactInfo>
          </ContactSecondary>
        </ContentContact>
        
      </ContainerContact>

    </ContactWrapper>
  )
  
};

export default Contact;
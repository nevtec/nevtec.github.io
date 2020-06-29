import React, { useEffect } from "react";
import Aos from "aos";

import Title from '@components/common/Title';
import Description from '@components/common/Description';


import { ContactWrapper, ContainerContact, ContentHeader, ContentContact, ContactPrimary, ContactSecondary, TitleOrientation, TitleContact, FormWrapper, FieldOrientation, YourInfo, YourMessage, Submit, ContactInfo, InfoBox, InfoTitle, Information } from './styled';

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
                <Submit>Submit</Submit>
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
            </ContactInfo>
          </ContactSecondary>
        </ContentContact>
        
      </ContainerContact>

    </ContactWrapper>
  )
  
};

export default Contact;
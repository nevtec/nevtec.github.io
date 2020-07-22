import React, { useEffect } from "react";
import Aos from "aos";

import Title from "@components/common/Title";
import Description from "@components/common/Description";
import Testimony from "@components/Testimony";
import SliderShow from "@components/common/SliderShow";

import {
  ClientsWrapper,
  ContainerClients,
  ContentHeader,
  ContentClients,
  BorderClients,
  AppleWrapper,
  ReactWrapper,
  DropboxWrapper,
  FirefoxWrapper,
  DisplayLine,
  LineClients,
} from "./styled"

const Clients = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, once: true, });
  }, []);

  return (
    <ClientsWrapper id="Clients">
      <ContainerClients>
        <ContentHeader data-aos="fade-up">
          <Description variant="light">Our Clients</Description>
          <Title variant="light">
            Glint has been honored to partner up with these clients
          </Title>
        </ContentHeader>

        <ContentClients data-aos="fade-up">
          <SliderShow dots={true} slidesToShow={5}>
            <BorderClients>
              <AppleWrapper />
            </BorderClients>

            <BorderClients>
              <AppleWrapper />
            </BorderClients>

            <BorderClients>
              <ReactWrapper />
            </BorderClients>

            <BorderClients>
              <ReactWrapper />
            </BorderClients>

            <BorderClients>
              <DropboxWrapper />
            </BorderClients>

            <BorderClients>
              <FirefoxWrapper />
            </BorderClients>
          </SliderShow>
        </ContentClients>

        <Testimony />

        <DisplayLine>
            <LineClients />
        </DisplayLine>
      </ContainerClients>
    </ClientsWrapper>
  );
}

export default Clients;

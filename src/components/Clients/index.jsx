import React, { Component } from "react";
import Slider from "react-slick";

import Title from '@components/common/Title';
import Description from '@components/common/Description';
import Testimony from '@components/Testimony';

import { ClientsWrapper, ContainerClients, ContentHeader, ContentClients, BorderClients, AppleWrapper, ReactWrapper, DropboxWrapper, FirefoxWrapper, DisplayLine,  LineOrientation, LineClients } from './styled';

export default class Clients extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    return (
      <ClientsWrapper id="Clients">

        <ContainerClients>

          <ContentHeader data-aos="fade-up">
            <Description variant="light">OUR CLIENTS</Description>
            <Title variant="light">Glint has been honored to partner up with these clients</Title>
          </ContentHeader>

          <ContentClients>
            <Slider {...settings}>
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
            </Slider>
          </ContentClients>

          <Testimony />

          <DisplayLine>
            <LineOrientation>
              <LineClients />
            </LineOrientation>
          </DisplayLine>
          
          
        </ContainerClients>

      </ClientsWrapper>
    )
  }  
};
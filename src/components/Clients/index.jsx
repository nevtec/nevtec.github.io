import React, { useEffect } from "react";
import Aos from "aos";

import Title from '@components/common/Title';
import Description from '@components/common/Description';

import { ClientsWrapper, ContainerClients, ContentHeader, ContentClients } from './styled';

const Clients = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, offset : 210 , });
  }, []);

  return (
    <ClientsWrapper id="Clients">

      <ContainerClients>

        <ContentHeader data-aos="fade-up">
          <Description variant="light">OUR CLIENTS</Description>
          <Title variant="light">Glint has been honored to partner up with these clients</Title>
        </ContentHeader>

        <ContentClients>
        
        </ContentClients>
        
      </ContainerClients>

    </ClientsWrapper>
  )
};

export default Clients;

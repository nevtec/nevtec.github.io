import React, { useEffect } from "react";
import Aos from "aos";

import Title from '@components/common/Title';
import Description from '@components/common/Description';

import { WorksWrapper, BgTitle, BgWorks, ContainerWorks, IntroWrapper, WorksContent, ItemThumb, Figurao, Textao } from './styled';


const Works = () => {

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210, });
  }, []);

  return (
    <WorksWrapper>
      <BgTitle>
        <ContainerWorks>
          <IntroWrapper>
            <Description variant="light">RECENT WORKS</Description>
            <Title variant="black">We love what we do, check out some of our latest works</Title>
          </IntroWrapper>
        </ContainerWorks>
      </BgTitle>
      <BgWorks>
        <ContainerWorks>
          <WorksContent>

            <ItemThumb>
              <Figurao></Figurao>
              <Textao>fsdfsdfsdffd</Textao>
            </ItemThumb>

            <ItemThumb>
              <Figurao></Figurao>
              <Textao>ffsdfsfdfs</Textao>
            </ItemThumb>

            <ItemThumb>
              
            </ItemThumb>

            <ItemThumb>
              
            </ItemThumb>

            <ItemThumb>
              
            </ItemThumb>

            <ItemThumb>
              
            </ItemThumb>

          </WorksContent>
        </ContainerWorks>
      </BgWorks>

    </WorksWrapper>
  )
};

export default Works;
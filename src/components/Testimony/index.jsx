import React, { Component } from "react";
import Slider from "react-slick";

import { TestimonyWrapper, TestimonyBox, TestimonyText, PositionTest, AvatarTestimony, InfoTestimony, TimonyName, TimonyPos } from './styled';


export default class Testimony extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <TestimonyWrapper>
         <Slider {...settings}>
          <TestimonyBox>
            <TestimonyText>
              1. Excepturi nam cupiditate culpa doloremque deleniti repellat.
              Veniam quos repellat voluptas animi adipisci.Nisi eaque consequatur.
              Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
            </TestimonyText>
            <PositionTest>
              <AvatarTestimony></AvatarTestimony>
              <InfoTestimony>
                <TimonyName>Nevinho Nevinhoso</TimonyName>
                <TimonyPos>CEO. NevTec</TimonyPos>
              </InfoTestimony>
            </PositionTest>
          </TestimonyBox>

          <TestimonyBox>
            <TestimonyText>
              2. Excepturi nam cupiditate culpa doloremque deleniti repellat.
              Veniam quos repellat voluptas animi adipisci.Nisi eaque consequatur.
              Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
            </TestimonyText>
            <PositionTest>
              <AvatarTestimony></AvatarTestimony>
              <InfoTestimony>
                <TimonyName>Nevinho Nevinhoso</TimonyName>
                <TimonyPos>CEO. NevTec</TimonyPos>
              </InfoTestimony>
            </PositionTest>
          </TestimonyBox>

          <TestimonyBox>
            <TestimonyText>
              3. Excepturi nam cupiditate culpa doloremque deleniti repellat.
              Veniam quos repellat voluptas animi adipisci.Nisi eaque consequatur.
              Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
            </TestimonyText>
            <PositionTest>
              <AvatarTestimony></AvatarTestimony>
              <InfoTestimony>
                <TimonyName>Nevinho Nevinhoso</TimonyName>
                <TimonyPos>CEO. NevTec</TimonyPos>
              </InfoTestimony>
            </PositionTest>
          </TestimonyBox>
        </Slider>
     </TestimonyWrapper>
    )
  }
}

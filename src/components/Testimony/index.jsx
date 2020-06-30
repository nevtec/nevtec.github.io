import React, { Component } from "react"

import SliderShow from "@components/common/SliderShow"

import {
  TestimonyWrapper,
  TestimonyBox,
  TestimonyText,
  PositionTest,
  AvatarTestimony,
  InfoTestimony,
  TimonyName,
  TimonyPos,
} from "./styled"

export default class Testimony extends Component {
  render() {
    return (
      <TestimonyWrapper>
        <SliderShow dots={false} slidesToShow={1}>
          <TestimonyBox>
            <TestimonyText>
              1. Excepturi nam cupiditate culpa doloremque deleniti repellat.
              Veniam quos repellat voluptas animi adipisci.Nisi eaque
              consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui
              ipsam temporibus quisquam vel.
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
              Veniam quos repellat voluptas animi adipisci.Nisi eaque
              consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui
              ipsam temporibus quisquam vel.
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
              Veniam quos repellat voluptas animi adipisci.Nisi eaque
              consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui
              ipsam temporibus quisquam vel.
            </TestimonyText>
            <PositionTest>
              <AvatarTestimony></AvatarTestimony>
              <InfoTestimony>
                <TimonyName>Nevinho Nevinhoso</TimonyName>
                <TimonyPos>CEO. NevTec</TimonyPos>
              </InfoTestimony>
            </PositionTest>
          </TestimonyBox>
        </SliderShow>
      </TestimonyWrapper>
    )
  }
}

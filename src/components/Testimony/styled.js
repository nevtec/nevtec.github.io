import styled from "styled-components";

import avatar from "@images/avatar.jpg";

export const TestimonyWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin-top: 80px;
  text-align: center;
  text-align: -webkit-center;

  div.slick-slider {
    button.slick-arrow::before {
      color: ${({ theme }) => theme.colors.grafit};
      font-size: 24px;
    }
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    max-width: 540px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.linelight};
    margin-bottom: 16px;
  }
`

export const TestimonyBox = styled.div`
  &:focus {
    outline-style: none;
  }
`

export const TestimonyText = styled.p`
  font-family: "lora-regular", serif;
  font-size: 32px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.grafit};

  ${({ theme }) => theme.media.desktop`
    font-size: 26px;
  `}

  ${({ theme }) => theme.media.phone`
    font-size: 22px;
    line-height: 40px;
  `}
`

export const PositionTest = styled.div`
  padding: 20px 0px;
`

export const AvatarTestimony = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const InfoTestimony = styled.div``

export const TimonyName = styled.h3`
  font-family: "montserrat-semibold", sans-serif;
  line-height: 6px;
  font-size: 16px;
`

export const TimonyPos = styled.span`
  color: ${({ theme }) => theme.colors.linelight};
  font-family: "montserrat-semibold", sans-serif;
  font-size: 14px;
`

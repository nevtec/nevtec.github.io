import React from "react";

import BtnStyled from '@components/common/BtnStyles';

import {
  FormWrapper,
  FieldOrientation,
  YourInfo,
  YourMessage,
  PositionButton
} from "./styled"


const Form = () => {
  return (
    <>
      <FormWrapper>
        <FieldOrientation>
          <YourInfo
            name="contactName"
            type="text"
            placeholder="Your Name"
            required
          />
          <YourInfo
            name="contactEmail"
            type="email"
            placeholder="Your E-mail"
            required
          />
          <YourInfo
            name="contactSubject"
            type="text"
            placeholder="Subject"
            required
          />
          <YourMessage
            name="contactMessage"
            type="text"
            placeholder="Your Message"
            row="10"
            cols="50"
            required
          ></YourMessage>
          <PositionButton>
            <BtnStyled variant="secondary">Submit</BtnStyled>
          </PositionButton>
        </FieldOrientation>
      </FormWrapper>
    </>
  )
}

export default Form;

import styled from "styled-components";

import mujer from "@images/mujer.jpg";

const dynanmicVariants = ({ variant, theme }) =>
({
  primary: `
    background-color: url(${mujer});
  `,
}[variant]);

const ServiceShowIn = styled.figure`
  ${dynanmicVariants};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`

export default ServiceShowIn;
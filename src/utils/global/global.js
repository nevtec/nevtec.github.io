import { createGlobalStyle } from 'styled-components';

import montserratBold from '@fonts/montserrat/montserrat-bold-webfont.woff2';
import montserratLight from '@fonts/montserrat/montserrat-light-webfont.woff2';
import montserratMedium from '@fonts/montserrat/montserrat-medium-webfont.woff2';
import montserratRegular from '@fonts/montserrat/montserrat-regular-webfont.woff2';
import montserratSemibold from '@fonts/montserrat/montserrat-semibold-webfont.woff2';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "montserratBold";
    src: url(${montserratBold});
  }

  @font-face {
    font-family: "montserratLight";
    src: url(${montserratLight});
  }

  @font-face {
    font-family: "montserratMedium";
    src: url(${montserratMedium});
  }

  @font-face {
    font-family: "montserratRegular";
    src: url(${montserratRegular});
  }

  @font-face {
    font-family: "montserratSemibold";
    src: url(${montserratSemibold})
  }

`

export default GlobalStyle;

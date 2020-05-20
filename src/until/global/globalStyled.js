import { createGlobalStyle } from 'styled-components';

import montserratBold from '../../fonts/montserrat/montserrat-bold-webfont.woff2';
import montserratLight from '../../fonts/montserrat/montserrat-light-webfont.woff2';
import montserratMedium from '../../fonts/montserrat/montserrat-medium-webfont.woff2';
import montserratRegular from '../../fonts/montserrat/montserrat-regular-webfont.woff2';
import montserratSemibold from '../../fonts/montserrat/montserrat-semibold-webfont.woff2';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "montserratBold";
    src: local('montetBold'),
    url(${montserratBold}) format('woff2'),
  }

  @font-face {
    font-family: "montserratLight";
    src: local('monteLight'),
    url(${montserratLight}) format('woff2'),
  }

  @font-face {
    font-family: "montserratMedium";
    src: local('montetMedium'),
    url(${montserratMedium}) format('woff2'),
  }


  @font-face {
    font-family: "montserratRegular";
    src: local('monteRegular'),
    url(${montserratRegular}) format('woff2'),
  }

  @font-face {
    font-family: "montserratSemibold";
    src: local('monteSemibold'),
    url(${montserratSemibold}) format('woff2'),
  }

`

export default GlobalStyle;

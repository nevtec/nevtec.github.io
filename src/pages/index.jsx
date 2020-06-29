import React from "react";

import theme from '@utils/theme/theme';
import Layout from '@components/Layout';
import Header from '@components/Header';
import About from '@components/About';
import Services from '@components/Services';
import Works from '@components/Works';
import Clients from '@components/Clients';
import Contact from '@components/Contact';

import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <About />
      <Services />
      <Works />
      <Clients />
      <Contact />
    </Layout>
  </ThemeProvider>
)

export default IndexPage;

import React from "react";

import theme from '@utils/theme/theme';
import Layout from '@components/Layout';
import Header from '@components/Header';
import About from '@components/About';
import Services from '@components/Services';

import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <About />
      <Services />
    </Layout>
  </ThemeProvider>
)

export default IndexPage;

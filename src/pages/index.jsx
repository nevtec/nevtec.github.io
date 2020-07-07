import React from "react";

import theme from '@utils/theme/theme';
import Layout from '@components/Layout';
import Header from '@components/Header';
import About from '@components/About';

import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <About />
    </Layout>
  </ThemeProvider>
)

export default IndexPage;

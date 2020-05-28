import React from "react";
import { ThemeProvider } from "styled-components";
import theme from '../until/theme/theme.js';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <About />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

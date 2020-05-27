import React from "react";
import { ThemeProvider } from "styled-components";
import theme from '../until/theme/theme.js';
import Layout from '../components/Layout';
import Header from '../components/Header';

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
    </Layout>
  </ThemeProvider>
)

export default IndexPage

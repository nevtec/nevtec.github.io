import React from "react";

import theme from "@utils/theme/theme";
import Layout from "@components/Layout";
import Menu from "@components/Menu/";
import Header from "@components/Header";
import About from "@components/About";
import Services from "@components/Services";
import Works from "@components/Works";
import Clients from "@components/Clients";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

import { ThemeProvider } from "styled-components";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Menu />
      <Header />
      <About />
      <Services />
      <Works />
      <Clients />
      <Contact />
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default IndexPage;

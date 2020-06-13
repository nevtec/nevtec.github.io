import React from "react";

import GlobalStyle from '@utils/global/global';

const Layout = ({ children }) => {
 return (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
 )
}

export default Layout;

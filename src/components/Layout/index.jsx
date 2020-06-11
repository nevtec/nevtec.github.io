import React from "react";

import GlobalStyle from '../../utils/global/global.js';

const Layout = ({ children }) => {
 return (
  <>
    <GlobalStyle />
    <main>{children}</main>
  </>
 )
}

export default Layout;

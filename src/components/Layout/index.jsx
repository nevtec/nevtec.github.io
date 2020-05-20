import React from "react"
import GlobalStyle from '../../until/global/globalStyled.js'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />  
          <main>{children}</main>
    </>
  )
}

export default Layout

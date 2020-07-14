import React, { useEffect } from "react"
import Aos from "aos"

import Logo from "@components/Logo/"

import {
  FooterWrapper,
  ContainerFooter,
  ContentFooter,
  DescFooter,
  TitleFooter,
  PositionCopy,
  Copyright,
} from "./styled"

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 210 })
  }, [])

  return (
    <FooterWrapper>
      <ContainerFooter>
        <ContentFooter>
          <div>
            <Logo />
            <DescFooter>
              Proin eget tortor risus. Mauris blandit aliquet elit, eget
              tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
              tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
              autem necessitatibus vitae aut.
            </DescFooter>
          </div>
          <div>
            <TitleFooter>Get Notified</TitleFooter>
            <DescFooter>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
              aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
              iusto porro.
            </DescFooter>
          </div>
        </ContentFooter>

        <PositionCopy>
          <Copyright>© Copyright NevTec 2020</Copyright>
        </PositionCopy>
      </ContainerFooter>
    </FooterWrapper>
  )
}

export default Footer

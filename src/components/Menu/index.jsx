import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import { MenuWrapper, BtnContent, MenuName, SideMenu, ContainerMenu, NavWrapper, UnList, List, Link, BoxText, TextDescription, Contrast, UlSocial, LiSocial, IconLink, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper } from './styled';

const scrollToHeader = (Header) => () => scrollTo(Header)

const scrollToAbout = (About) => () => scrollTo(About)

const scrollToServices = (Services) => () => scrollTo(Services)

const scrollToWorks = (Works) => () => scrollTo(Works)

const scrollToClients = (Clients) => () => scrollTo(Clients)

const scrollToContact = (Contact) => () => scrollTo(Contact)

const Menu = () => (
  <MenuWrapper>

    <BtnContent for="bt_menu">
        <MenuName>Menu</MenuName>
        &#9776;
    </BtnContent>
    
    <input type="checkbox" id="bt_menu" />

    <SideMenu>
      <ContainerMenu>
        <NavWrapper>
            <UnList>
              <List>
                <Link onClick={scrollToHeader('#Header')}>Home</Link>
              </List>
              <List>
                <Link onClick={scrollToAbout('#About')}>About</Link>
              </List>
              <List>
                <Link onClick={scrollToServices('#Services')}>Services</Link>
              </List>
              <List>
                <Link onClick={scrollToWorks('#Works')}>Works</Link>
              </List>
              <List>
                <Link onClick={scrollToClients('#Clients')}>Clients</Link>
              </List>
              <List>
                <Link onClick={scrollToContact('#Contact')}>Contact</Link>
              </List>
            </UnList>
        </NavWrapper>

        <BoxText>
          <TextDescription>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum <Contrast>voluptatem </Contrast>  
          porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis 
          neque reprehenderit.
          </TextDescription>
        </BoxText>

        <NavWrapper>

          <UlSocial>

            <LiSocial>
              <IconLink href="./">
                <FaceWrapper />
              </IconLink>
            </LiSocial>

            <LiSocial>
              <IconLink href="./">
                <TwitterWrapper />
              </IconLink>
            </LiSocial>

            <LiSocial>
              <IconLink href="./">
                <InstaWrapper />
              </IconLink>
            </LiSocial>

            <LiSocial>
              <IconLink href="./">
                <BehanceWrapper />
              </IconLink>
            </LiSocial>
            
            <LiSocial>
              <IconLink href="./">
                <DribbbleWrapper />
              </IconLink>
            </LiSocial>

          </UlSocial>

        </NavWrapper>

      </ContainerMenu>

    </SideMenu>

  </MenuWrapper>
)

export default Menu;
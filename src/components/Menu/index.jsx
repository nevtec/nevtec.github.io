import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import { MenuSection, BtnMenu, MenuName, SideMenu, ContainerMenu, BoxText, TextDescription, Contrast, UlSocial, LiSocial, IconLink, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper } from './styled';
import { Navigation, UnList, List, Link } from '../../components/common/styled';

const Menu = () => (
  <MenuSection>

    <BtnMenu for="bt_menu">
        <MenuName>Menu</MenuName>
        &#9776;
    </BtnMenu>
    
    <input type="checkbox" id="bt_menu" />

    <SideMenu className="menu">
      <ContainerMenu>
        <Navigation>
            <UnList>
              <List>
                <Link onClick={() => scrollTo('#Header')}>Home</Link>
              </List>
              <List>
                <Link onClick={() => scrollTo('#About')}>About</Link>
              </List>
              <List>
                <Link onClick={() => scrollTo('#Services')}>Services</Link>
              </List>
              <List>
                <Link onClick={() => scrollTo('#Works')}>Works</Link>
              </List>
              <List>
                <Link onClick={() => scrollTo('#Clients')}>Clients</Link>
              </List>
              <List>
                <Link onClick={() => scrollTo('#Contact')}>Contact</Link>
              </List>
            </UnList>
        </Navigation>

        <BoxText>
          <TextDescription>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum <Contrast>voluptatem </Contrast>  
          porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis 
          neque reprehenderit.
          </TextDescription>
        </BoxText>

        <Navigation>

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

        </Navigation>

      </ContainerMenu>

    </SideMenu>

  </MenuSection>
)

export default Menu;
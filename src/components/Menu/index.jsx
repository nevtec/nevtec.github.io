import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';

import {Gerald, BtnMenu, SideMenu, TextMenu, SocialStyle, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper} from './styled';

const Menu = () => (
  <Gerald>

    <BtnMenu for="bt_menu">
        <span>Menu</span>
        &#9776;
    </BtnMenu>
    <input type="checkbox" id="bt_menu" />

    <SideMenu className="menu">
      <div>
        <nav>
            <ul>
              <li>
                <a onClick={() => scrollTo('#Header')}>Home</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#About')}>About</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#Services')}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#Works')}>Works</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#Clients')}>Clients</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#Contact')}>Contact</a>
              </li>
            </ul>
        </nav>

        <TextMenu>
          <p>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum <span>voluptatem </span>  
          porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis 
          neque reprehenderit.
          </p>
        </TextMenu>

        <SocialStyle>
          <ul>
            <li>
              <a href="./">
                <FaceWrapper />
              </a>
            </li>
            <li>
              <a href="./">
                <TwitterWrapper />
              </a>
            </li>
            <li>
              <a href="./">
                <InstaWrapper />
              </a>
            </li>
            <li>
              <a href="./">
                <BehanceWrapper />
              </a>
            </li>
            <li>
              <a href="./">
                <DribbbleWrapper />
              </a>
            </li>
          </ul>
        </SocialStyle>

      </div>

    </SideMenu>

  </Gerald>
)

export default Menu;
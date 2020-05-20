import React from "react"
import * as Styled from './styled'
import scrollTo from 'gatsby-plugin-smoothscroll';
import SocialMedia from '../SocialMedia'

const Menu = () => (
  <Styled.Gerald>

    <Styled.BtnMenu for="bt_menu">
        <span>Menu</span>
        &#9776;
    </Styled.BtnMenu>
    <input type="checkbox" id="bt_menu" />

    <Styled.SideMenu className="menu">
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
                <a onClick={() => scrollTo('#')}>Services</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#')}>Works</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#')}>Clients</a>
              </li>
              <li>
                <a onClick={() => scrollTo('#')}>Contact</a>
              </li>
            </ul>
        </nav>

        <Styled.TextMenu>
          <p>
          Perspiciatis hic praesentium nesciunt. Et neque a dolorum <span>voluptatem </span>  
          porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis 
          neque reprehenderit.
          </p>
        </Styled.TextMenu>

        <Styled.SocialStyle>
          <ul>
            <li><a href="#">
              <Styled.FaceWrapper />
            </a></li>
            <li><a href="#">
              <Styled.TwitterWrapper />
            </a></li>
            <li><a href="#">
              <Styled.InstaWrapper />
            </a></li>
            <li><a href="#">
              <Styled.BehanceWrapper />
            </a></li>
            <li><a href="#">
              <Styled.DribbbleWrapper />
            </a></li>
          </ul>
        </Styled.SocialStyle>

      </div>

    </Styled.SideMenu>

  </Styled.Gerald>
)

export default Menu
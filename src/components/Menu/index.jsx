import React from "react"
import * as Styled from './styled'
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import "./style.css"

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

        <div>
          Social Media
        </div>
      </div>

    </Styled.SideMenu>

  </Styled.Gerald>
)

export default Menu
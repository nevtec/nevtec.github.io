import React from "react"
import * as Styled from './styled'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Twitter } from '@styled-icons/boxicons-logos/Twitter'
import { Instagram } from '@styled-icons/fa-brands/Instagram'
import { Behance } from '@styled-icons/boxicons-logos/Behance'
import { Dribbble } from '@styled-icons/boxicons-logos/Dribbble'

const SocialMedia = () => (
  <Styled.MediaWrapper>
    <ul>
      <li><a href="#">
        <figure><Facebook /></figure> <span>Facebook</span>
      </a></li>
      <li><a href="#">
        <figure><Twitter /></figure><span>Twitter</span>
      </a></li>
      <li><a href="#">
        <figure><Instagram /></figure><span>Instagram</span>
      </a></li>
      <li><a href="#">
        <figure><Behance /></figure><span>Behance</span>
      </a></li>
      <li><a href="#">
        <figure><Dribbble /></figure><span>Dribbble</span>
      </a></li>
    </ul>
  </Styled.MediaWrapper>
)

export default SocialMedia
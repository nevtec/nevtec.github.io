import React from "react"
import * as Styled from './styled'

const SocialMedia = () => (
  <Styled.MediaWrapper>
    <ul>
      <li><a href="#" value="media">
        <figure><Styled.FaceWrapper /></figure> <span>Facebook</span>
      </a></li>
      <li><a href="#" value="media">
        <figure><Styled.TwitterWrapper /></figure><span>Twitter</span>
      </a></li>
      <li><a href="#" value="media">
        <figure><Styled.InstaWrapper /></figure><span>Instagram</span>
      </a></li>
      <li><a href="#" value="media">
        <figure><Styled.BehanceWrapper /></figure><span>Behance</span>
      </a></li>
      <li><a href="#" value="media">
        <figure><Styled.DribbbleWrapper /></figure><span>Dribbble</span>
      </a></li>
    </ul>
  </Styled.MediaWrapper>
)

export default SocialMedia
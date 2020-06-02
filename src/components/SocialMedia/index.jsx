import React from "react";

import { MediaWrapper, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper } from './styled';

const SocialMedia = () => (
  <MediaWrapper>
    <ul>
      <li>
        <a href="https://www.facebook.com/" value="media">
          <figure>
            <FaceWrapper />
          </figure>
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" value="media">
          <figure>
            <TwitterWrapper />
          </figure>
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" value="media">
          <figure>
            <InstaWrapper />
          </figure>
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://www.behance.net/" value="media">
          <figure>
            <BehanceWrapper />
          </figure>
          <span>Behance</span>
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/" value="media">
          <figure>
            <DribbbleWrapper />
          </figure>
          <span>Dribbble</span>
        </a>
      </li>
    </ul>
  </MediaWrapper>
)

export default SocialMedia;
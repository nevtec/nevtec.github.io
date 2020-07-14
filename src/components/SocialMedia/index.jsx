import React from "react";

import { MediaWrapper, LiMedia, LinkMedia, TitleSocial, FaceWrapper, TwitterWrapper, InstaWrapper } from './styled';

const SocialMedia = () => (
  <MediaWrapper>
    <ul>
      
      <LiMedia>
        <LinkMedia href="https://www.facebook.com/">
          <figure>
            <FaceWrapper />
          </figure>
          <TitleSocial>Facebook</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://twitter.com/">
          <figure>
            <TwitterWrapper />
          </figure>
          <TitleSocial>Twitter</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://www.instagram.com/">
          <figure>
            <InstaWrapper />
          </figure>
          <TitleSocial>Instagram</TitleSocial>
        </LinkMedia>
      </LiMedia>

    </ul>
  </MediaWrapper>
);

export default SocialMedia;
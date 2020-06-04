import React from "react";

import { MediaWrapper, UlMedia, LiMedia, LinkMedia, FigCapsule, TitleSocial, FaceWrapper, TwitterWrapper, InstaWrapper, BehanceWrapper, DribbbleWrapper } from './styled';

const SocialMedia = () => (
  <MediaWrapper>
    <UlMedia>
      
      <LiMedia>
        <LinkMedia href="https://www.facebook.com/" value="media">
          <FigCapsule>
            <FaceWrapper />
          </FigCapsule>
          <TitleSocial>Facebook</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://twitter.com/" value="media">
          <FigCapsule>
            <TwitterWrapper />
          </FigCapsule>
          <TitleSocial>Twitter</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://www.instagram.com/" value="media">
          <FigCapsule>
            <InstaWrapper />
          </FigCapsule>
          <TitleSocial>Instagram</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://www.behance.net/" value="media">
          <FigCapsule>
            <BehanceWrapper />
          </FigCapsule>
          <TitleSocial>Behance</TitleSocial>
        </LinkMedia>
      </LiMedia>

      <LiMedia>
        <LinkMedia href="https://dribbble.com/" value="media">
          <FigCapsule>
            <DribbbleWrapper />
          </FigCapsule>
          <TitleSocial>Dribbble</TitleSocial>
        </LinkMedia>
      </LiMedia>

    </UlMedia>
  </MediaWrapper>
)

export default SocialMedia;
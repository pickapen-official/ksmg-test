import { css } from '@emotion/react';
import { color } from 'src/styles/colors';
import { mq } from 'src/styles/mediaQuery';
import { animationSettings } from './Banners.constants';

export const BannerContainerCSS = css({
  position: 'relative',
  width: '100%',
  height: '100%', // ✅ 높이를 100%로 설정하여 비율 유지
  aspectRatio: '1440 / 600',
  overflow: 'hidden',

  [mq.mobile]: {
    aspectRatio: '390 / 510',
    position: 'contain',
  },
});
export const BannerImagesWrapperCSS = css({
  width: '100%',
  display: 'flex',
  transition: `transform ${animationSettings.slideSpeed}ms ease-in-out`,
});

export const BannerSkeletonCSS = css({
  width: '100%',
  height: 'auto',
  aspectRatio: '1440 / 600',
  // background: color.background.container.image,

  [mq.mobile]: {
    aspectRatio: '390 / 510',
  },
});

export const BannerItemCSS = css({
  width: '100%',
  height: 'auto',
  aspectRatio: '1440 / 600',
  flexShrink: 0,
  position: 'relative',
  // background: color.background.container.image,

  [mq.mobile]: {
    aspectRatio: '390 / 510',
  },
});

export const BannerImageCSS = css({
  objectFit: 'cover',
  width: '100%',
  height: 'auto',
  aspectRatio: '1440 / 600',

  [mq.mobile]: {
    aspectRatio: '390 / 510',
    objectFit: 'contain',
  },
});

export const DotsContainerCSS = css({
  position: 'absolute',
  bottom: 80,
  left: '50%',
  transform: 'translateX(-50%)',
});

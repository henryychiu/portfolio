/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const theme = {
  blue: '#3784f3',
  grey: {
    300: '#ededed',
    400: '#dfdfdf',
    500: '#c8c8c8',
    600: '#9b9b9b',
    700: '#787878',
    800: '#3c3c3c',
  },
  breakpoint: {
    sm: 600,
    md: 800,
    lg: 1000,
  },
};

export const screenBackground = css({
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: theme.grey[600],
  borderRadius: '15px',
  overflow: 'hidden',
});

const checkerboardSizing = css({
  backgroundSize: '4px 4px',
  backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px',
});

export const checkerboardBackgroundGrey = css(
  {
    backgroundImage: `linear-gradient(45deg, ${theme.grey[500]} 25%, transparent 25%), linear-gradient(-45deg, ${theme.grey[500]} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.grey[500]} 75%), linear-gradient(-45deg, transparent 75%, ${theme.grey[500]} 75%)`,
  },
  checkerboardSizing
);

export const checkerboardBackgroundDarkGrey = css(
  {
    backgroundImage: `linear-gradient(45deg, ${theme.grey[800]} 25%, transparent 25%), linear-gradient(-45deg, ${theme.grey[800]} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${theme.grey[700]} 75%), linear-gradient(-45deg, transparent 75%, ${theme.grey[700]} 75%)`,
  },
  checkerboardSizing
);

export const stripedBackground = css({
  background: `repeating-linear-gradient(to bottom, white 0px, white 2px, ${theme.grey[700]} 2px,  ${theme.grey[700]} 4px)`,
});

export const MENU_BAR_HEIGHT = 32;

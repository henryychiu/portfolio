/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { stripedBackground, theme } from '../../../styles/styles';

const stripedBoxCss = {
  container: css({
    boxSizing: 'border-box',
    width: '10px',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    borderRight: `2px solid ${theme.grey[500]}`,
    borderBottom: `2px solid ${theme.grey[500]}`,
  }),
  self: css(
    {
      transform: 'rotate(-45deg)',
      position: 'absolute',
      height: '50px',
      width: '50px',
      left: '-20px',
    },
    stripedBackground
  ),
};

const StripedBox = () => {
  return (
    <div css={stripedBoxCss.container}>
      <div css={stripedBoxCss.self} />
    </div>
  );
};

export default StripedBox;

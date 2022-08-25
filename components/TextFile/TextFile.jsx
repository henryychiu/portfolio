import { css } from '@emotion/react';

const textFileCss = {
  self: css({
    background: 'white',
    height: '100%',
    width: '100%',
    fontSize: '14px',
    padding: '20px',
  }),
};

const TextFile = ({ content }) => {
  return <div css={textFileCss.self}>{content}</div>;
};

export default TextFile;

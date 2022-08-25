import { css } from '@emotion/react';

const photoCss = {
  container: css({
    height: '100%',
    width: '100%',
    background: 'black',
    display: 'flex',
    justifyContent: 'center',
  }),
};

const Photo = ({ imageSource }) => {
  return (
    <div css={photoCss.container}>
      <img src={imageSource} />
    </div>
  );
};

export default Photo;

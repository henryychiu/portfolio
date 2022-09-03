/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const photoCss = {
  container: css({
    height: '100%',
    width: '100%',
    background: 'white',
  }),
  downloadButton: css({
    position: 'absolute',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    top: '20px',
    right: '20px',
    backgroundColor: 'black',
    backgroundImage: 'url(/downloadIcon.svg)',
    opacity: '0.5',
    transition: 'all 0.2s ease',

    '&:hover': {
      opacity: 0.8,
    },
  }),
};

const Photo = ({ imageSource, isPdf, downloadSource }) => {
  return (
    <div
      css={photoCss.container}
      style={
        isPdf
          ? { overflowY: 'scroll' }
          : { display: 'flex', justifyContent: 'center' }
      }
    >
      <img css={{ objectFit: 'cover', width: '100%' }} src={imageSource} />
      {downloadSource && (
        <a css={photoCss.downloadButton} href={downloadSource} download />
      )}
    </div>
  );
};

export default Photo;

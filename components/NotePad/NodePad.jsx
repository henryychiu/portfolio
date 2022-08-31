/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

import { theme } from '../../styles/styles';

const notePadCss = {
  self: css({
    position: 'relative',
    height: '100%',
    width: '100%',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }),
  line: css({
    position: 'absolute',
    width: '100%',
    height: '2px',
    background: 'black',
  }),
  triangleBorder: css({
    position: 'absolute',
    borderTop: '2px solid black',
    borderRight: '2px solid black',
    clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
    height: '50px',
    width: '50px',
    bottom: '10px',
    left: '0',
    background: theme.grey[400],
  }),
  triangleHypotenuse: css({
    position: 'absolute',
    height: '2px',
    width: '70.7106781187px',
    bottom: '35px',
    left: '-10px',
    background: 'black',
    transform: 'rotate(45deg)',
  }),
  textArea: css({
    padding: '20px',
    flex: 1,
    maxHeight: 'calc(100% - 110px)',
    resize: 'none',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
  }),
  pageNumber: css({
    alignSelf: 'center',
  }),
};
const TIMING = {
  INITIAL: 600,
  SPEED: 30,
  DELAY: 600,
};

const NotePad = ({ defaultPhrase = '', opened }) => {
  const [pos, setPos] = useState(0);
  const [typingInitated, settypingInitated] = useState(false);

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        settypingInitated(true);
        type();
      }, TIMING.INITIAL);
    } else {
      setPos(0);
      settypingInitated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  useEffect(() => {
    if (typingInitated) {
      if (defaultPhrase.slice(pos, pos + 1) === '\u00a0') {
        setTimeout(() => type(), TIMING.DELAY);
      } else {
        setTimeout(() => type(), TIMING.SPEED);
      }
    }
  }, [pos, typingInitated, defaultPhrase, type]);

  const type = useCallback(() => {
    if (pos < defaultPhrase.length) {
      setPos((prev) => prev + 1);
    }
  }, [pos, defaultPhrase.length]);

  return (
    <div css={notePadCss.self}>
      <textarea
        css={notePadCss.textArea}
        defaultValue={defaultPhrase.slice(0, pos)}
      />
      <div css={notePadCss.pageNumber}>1</div>
      <div
        css={notePadCss.line}
        style={{
          bottom: '2px',
        }}
      />
      <div
        css={notePadCss.line}
        style={{
          bottom: '6px',
        }}
      />
      <div
        css={notePadCss.line}
        style={{
          left: '50px',
          bottom: '10px',
        }}
      />
      <div css={notePadCss.triangleBorder} />
      <div css={notePadCss.triangleHypotenuse} />
    </div>
  );
};

export default NotePad;

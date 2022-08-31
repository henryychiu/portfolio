/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import {
  checkerboardBackgroundDarkGrey,
  checkerboardBackgroundGrey,
  screenBackground,
  theme,
} from '../../styles/styles';

const welcomeScreenCss = {
  self: css(
    {
      transition: 'all 1s ease',
      position: 'absolute',
      top: '0',
    },
    screenBackground
  ),
  box: css({
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    height: '200px',
    width: '80%',
    maxWidth: '650px',
    backgroundColor: theme.grey[400],
    padding: '7px',
    outline: '2px solid black',
    borderTop: '2px solid white',
    borderLeft: '2px solid white',
    borderRight: `2px solid ${theme.grey[600]}`,
    borderBottom: `2px solid ${theme.grey[600]}`,
  }),
  boxInner: css({
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    outline: '3px black solid',
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gap: '10px',
    alignItems: 'center',
  }),
  icon: css({ height: '60px', width: '60px' }),
  centerContent: css({
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }),
  loadingBar: {
    container: css(
      {
        position: 'relative',
        width: '100%',
        height: '10px',
        border: '2px black solid',
      },
      checkerboardBackgroundGrey
    ),
    self: css(
      {
        position: 'absolute',
        height: '100%',
        transition: 'all 1s ease',
      },
      checkerboardBackgroundDarkGrey
    ),
  },
};

const WelcomeScreen = ({ loadingDone }) => {
  const [percent, setPercent] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => Math.min(prev + 30, 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => {
        setOpacity(0);
        setTimeout(() => loadingDone(), 1000);
      }, 1000);
    }
  }, [loadingDone, percent]);

  return (
    <div css={welcomeScreenCss.self} style={{ opacity: opacity }}>
      <div css={welcomeScreenCss.box}>
        <div css={welcomeScreenCss.boxInner}>
          <img alt="mac" src="/mac.svg" css={welcomeScreenCss.icon} />
          <div css={welcomeScreenCss.centerContent}>
            <div>Starting...</div>
            <div css={welcomeScreenCss.loadingBar.container}>
              <div
                css={welcomeScreenCss.loadingBar.self}
                style={{ width: percent + '%' }}
              />
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

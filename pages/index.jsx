/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useState } from 'react';

import IconsList from '../components/IconsList';
import MenuBar from '../components/MenuBar';
import Meta from '../components/Meta';
import Mobile from '../components/Mobile';
import WelcomeScreen from '../components/WelcomeScreen';
import { DESKTOP_WINDOWS } from '../content/windows';
import useBrowserWindowSize from '../hooks/useBrowserWindowSize';
import { screenBackground } from '../styles/styles';

const homeCss = {
  windowSpawn: css({
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: 1,
  }),
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { browserWindowSize } = useBrowserWindowSize();

  const loadingDone = useCallback(() => {
    setLoading(false);
  }, []);

  const useMobile = browserWindowSize.width < 700;

  return (
    <>
      <Meta />
      <div css={screenBackground}>
        {useMobile ? (
          <Mobile />
        ) : (
          <>
            <MenuBar />
            <div id="windowSpawn" css={homeCss.windowSpawn} />
            <IconsList
              loading={loading}
              icons={DESKTOP_WINDOWS}
              direction="column"
            />
          </>
        )}
        {loading && <WelcomeScreen loadingDone={loadingDone} />}
      </div>
    </>
  );
}

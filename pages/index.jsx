import { css } from '@emotion/react';
import { useCallback, useState } from 'react';

import IconsList from '../components/IconsList';
import MenuBar from '../components/MenuBar';
import Meta from '../components/Meta';
import WelcomeScreen from '../components/WelcomeScreen';
import { DESKTOP_WINDOWS } from '../content/windows';
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

  const loadingDone = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Meta />
      <div css={screenBackground}>
        <MenuBar />
        <div id="windowSpawn" css={homeCss.windowSpawn} />
        <IconsList
          loading={loading}
          icons={DESKTOP_WINDOWS}
          direction="column"
        />
        {loading && <WelcomeScreen loadingDone={loadingDone} />}
      </div>
    </>
  );
}

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useMemo, useState } from 'react';

import Title from '../Title';

const aboutThisComputerCss = {
  self: css({
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    padding: '40px',
  }),

  image: {
    self: css({
      width: '100%',
      border: '2px solid black',
    }),
    container: css({
      flexBasis: '40%',
    }),
  },

  data: {
    self: css({
      flexBasis: '60%',
    }),

    title: css({ fontSize: '24px' }),

    text: css({ fontSize: '12px' }),
  },
};

const AboutThisComputer = () => {
  const [differenceInDays, setDifferenceInDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birth = new Date('10/08/2002');
    setDifferenceInDays(
      Math.round((today.getTime() - birth.getTime()) / (1000 * 3600 * 24))
    );
  }, []);

  const getVersion = useMemo(() => {
    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30.4167);
    const days = Math.round(differenceInDays % 30.4167);
    return `${years}.${months}.${days}`;
  }, [differenceInDays]);

  return (
    <div css={aboutThisComputerCss.self}>
      <div css={aboutThisComputerCss.image.container}>
        <img src="/henry.jpg" css={aboutThisComputerCss.image.self} />
      </div>
      <div css={aboutThisComputerCss.data.self}>
        <Title css={aboutThisComputerCss.data.title}>henryOS</Title>
        <div css={aboutThisComputerCss.data.text}>
          <b>Version</b> {getVersion}
        </div>
        <br />
        <div css={aboutThisComputerCss.data.text}>
          <b>Human</b> (Taiwanese, 70-inch, 2002)
        </div>
        <div css={aboutThisComputerCss.data.text}>
          <b>Processor</b> Cerebrum
        </div>
        <div css={aboutThisComputerCss.data.text}>
          <b>Memory</b> Hippocampus
        </div>
        <div css={aboutThisComputerCss.data.text}>
          <b>Graphics</b> Retina 20/20
        </div>
        <div css={aboutThisComputerCss.data.text}>
          <b>Serial Number</b> HYC100802
        </div>
      </div>
    </div>
  );
};

export default AboutThisComputer;

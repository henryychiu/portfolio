/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Title from '../Title';

const mobileCss = {
  self: css({
    padding: '50px 20px',
    fontSize: '14px',
    height: '100%',
    background: 'white',
  }),
  header: css({
    fontSize: '20px',
    marginBottom: '50px',
  }),
  footer: css({
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '12px',
  }),
  link: css({
    color: 'black',
  }),
};

const Mobile = () => {
  return (
    <div css={mobileCss.self}>
      <Title css={mobileCss.header}>Henry Chiu</Title>
      <p>
        My name is Henry Chiu and I&apos;m a 4th year studying Computer Science
        at UC Berkeley.
      </p>
      <p>
        I&apos;m passionate about full-stack development, and have worked at
        companies such as <b style={{ color: '#0b1721' }}>Plaid</b>,{' '}
        <b style={{ color: '#0b1721' }}>Verkada</b>, and{' '}
        <b style={{ color: '#0b1721' }}>Tesla</b>.
      </p>
      <br />
      <p>
        <a href="mailto: henrychiu@berkeley.edu" css={mobileCss.link}>
          henrychiu@berkeley.edu
        </a>
      </p>
      <p>
        <a href="/Henry_Chiu_Resume.pdf" download css={mobileCss.link}>
          resume
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/henryychiu/"
          target="_blank"
          rel="noopener noreferrer"
          css={mobileCss.link}
        >
          linkedin
        </a>
      </p>
      <p>
        <a
          href="https://github.com/henryychiu"
          target="_blank"
          rel="noopener noreferrer"
          css={mobileCss.link}
        >
          github
        </a>
      </p>
      <p css={mobileCss.footer}>
        <i>Please visit this page on desktop for the complete portfolio</i>
      </p>
    </div>
  );
};

export default Mobile;

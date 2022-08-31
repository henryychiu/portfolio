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
};

const Mobile = () => {
  return (
    <div css={mobileCss.self}>
      <Title css={mobileCss.header}>Henry Chiu</Title>
      <p>
        My name is Henry Chiu and I&apos;m a 3rd year studying Computer Science
        at UC Berkeley.
      </p>
      <p>
        I specialize in Web Development, with 1+ years of professional
        experience, working at companies such as{' '}
        <b style={{ color: '#cc0000' }}>Tesla</b> and{' '}
        <b style={{ color: '#0b1721' }}>Verkada</b>.
      </p>
      <p>
        My goal is simple: to surround myself with smart, energetic, creative
        people who challenge me and make me better at what I do.
      </p>
      <br />
      <p>
        <a href="mailto: henrychiu@berkeley.edu">henrychiu@berkeley.edu</a>
      </p>
      <p>
        <a href="/Henry_Chiu_Resume.pdf" download style={{ color: 'black' }}>
          resume
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/henryychiu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </p>
      <p>
        <a
          href="https://github.com/henryychiu"
          target="_blank"
          rel="noopener noreferrer"
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

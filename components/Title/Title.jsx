/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const titleCss = css({ fontWeight: 'bold', fontSize: '14px' });

const Title = ({ children, className, style, ...props }) => {
  return (
    <div
      as="h1"
      css={[titleCss]}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default Title;

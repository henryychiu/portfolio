/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback } from 'react';

import { theme } from '../../styles/styles';
import IconsList from '../IconsList';

const finderCss = {
  self: css({
    position: 'relative',
    background: 'white',
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
  }),
  header: css({
    position: 'sticky',
    top: '0',
    background: theme.grey[400],
    borderTop: '2px solid white',
    borderLeft: '2px solid white',
    borderRight: `2px solid ${theme.grey[600]}`,
    borderBottom: `2px solid ${theme.grey[600]}`,
    outline: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    padding: '2px',
    textAlign: 'center',
  }),
};

const Finder = ({ icons = [], loading }) => {
  const renderItemsText = useCallback(() => {
    if (icons.length === 1) return 'item';
    return 'items';
  }, [icons.length]);

  return (
    <div css={finderCss.self}>
      <div css={finderCss.header}>
        {icons.length} {renderItemsText()}, 12.31 GB available
      </div>
      <div css={finderCss.iconsList}>
        <IconsList
          loading={loading}
          icons={icons}
          noLabelBackground
          direction="row"
        />
      </div>
    </div>
  );
};

export default Finder;

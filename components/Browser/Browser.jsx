/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react';

import { theme } from '../../styles/styles';
import StripedBox from './components/StripedBox';

const browserCss = {
  self: css({
    background: 'white',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  addressInput: css({
    flex: '1',
    boxSizing: 'border-box',
    fontSize: '12px',
    border: 'none',
    borderTop: `2px solid ${theme.grey[600]}`,
    borderLeft: `2px solid ${theme.grey[600]}`,
    '&:focus': {
      outline: 'none',
    },
  }),

  contentContainer: css({
    overflowY: 'scroll',
    overflowX: 'hidden',
  }),

  bar: {
    self: css({
      zIndex: 1,
      boxSizing: 'border-box',
      background: theme.grey[300],
      display: 'flex',
      padding: '5px',
      borderTop: '2px solid white',
      borderLeft: '2px solid white',
      borderRight: `2px solid ${theme.grey[500]}`,
      borderBottom: `2px solid ${theme.grey[500]}`,
      alignItems: 'center',
      gap: '10px',
    }),
    text: css({ fontSize: '12px' }),

    button: {
      self: css({
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center',
        width: '55px',
        position: 'relative',
        paddingTop: '2px',
      }),
      icon: css({
        height: '20px',
        width: '20px',
        zIndex: '1',
      }),
      iconShadow: css({
        position: 'absolute',
        left: '20px',
        top: '6px',
        height: '20px',
        width: '20px',
      }),
    },
  },
};

const BarButton = ({
  label,
  clickable,
  iconSource,
  iconShadowSource,
  onClick,
}) => {
  return (
    <div css={browserCss.bar.button.self}>
      <img
        onClick={onClick}
        src={iconSource}
        css={css(
          browserCss.bar.button.icon,
          clickable
            ? {
                transition: 'all 0.2s ease',
                '&:active': {
                  transform: 'translate(2px, 2px)',
                },
                cursor: 'pointer',
              }
            : {}
        )}
      />
      {clickable && (
        <img src={iconShadowSource} css={browserCss.bar.button.iconShadow} />
      )}
      <div
        css={browserCss.bar.text}
        style={!clickable ? { color: theme.grey[700] } : {}}
      >
        {label}
      </div>
    </div>
  );
};

const Browser = ({ address, content, windowSize }) => {
  const [addressValue, setAddressValue] = useState(address);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (refreshing) setTimeout(() => setRefreshing(false), 600);
  }, [refreshing]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const handleAddressChange = useCallback((e) => {
    setAddressValue(e.target.current);
  }, []);

  return (
    <div css={browserCss.self}>
      <div css={browserCss.bar.self} style={{ borderTop: 'none' }}>
        <StripedBox />
        <BarButton label="Back" iconSource="leftArrow.svg" clickable={false} />
        <BarButton
          label="Forward"
          iconSource="rightArrow.svg"
          clickable={false}
        />
        <BarButton
          label="Refresh"
          iconSource="refresh.svg"
          iconShadowSource="refreshShadow.svg"
          clickable={true}
          onClick={handleRefresh}
        />
      </div>
      <div
        css={browserCss.bar.self}
        style={{
          boxShadow: '0 2px black',
        }}
      >
        <StripedBox />
        <div css={browserCss.bar.text}>Address:</div>
        <input
          css={browserCss.addressInput}
          value={addressValue}
          onChange={handleAddressChange}
        />
      </div>
      <div
        css={browserCss.contentContainer}
        style={{ opacity: refreshing ? 0 : 1 }}
      >
        {React.cloneElement(content, { windowSize })}
      </div>
    </div>
  );
};

export default Browser;

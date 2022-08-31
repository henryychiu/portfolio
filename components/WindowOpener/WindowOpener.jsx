/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useTopZIndexContext } from '../../context/TopZIndexContext';
import Title from '../Title';
import Window from '../Window/Window';

const iconCss = {
  self: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    display: 'flex',
  }),
  thumbnail: {
    self: css({
      cursor: 'pointer',
      objectPosition: 'center bottom',
      objectFit: 'contain',
      width: 'auto',
      height: 'auto',
      maxHeight: '100%',
      maxWidth: '100%',
    }),
    container: {
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'center',
    },
  },
  label: {
    self: css({
      marginTop: '10px',
      textAlign: 'center',
      fontSize: '14px',
      overflowWrap: 'break-word',
      background: 'white',
      padding: '0 5px',
      cursor: 'pointer',
    }),
    container: css({
      width: '100px',
      display: 'flex',
      justifyContent: 'center',
    }),
  },
};

const Icon = ({ iconSource, handleClick, noLabelBackground, label }) => {
  return (
    <div css={iconCss.self}>
      <div css={iconCss.thumbnail.container}>
        <img
          css={iconCss.thumbnail.self}
          onClick={handleClick}
          src={iconSource}
          style={
            !iconSource.includes('.svg') ? { border: '2px solid black' } : {}
          }
        />
      </div>
      <div css={iconCss.label.container}>
        <div
          css={iconCss.label.self}
          onClick={handleClick}
          style={noLabelBackground ? { background: 'none' } : {}}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

const windowOpener = {
  textButton: css({
    cursor: 'pointer',
  }),
};

const WindowOpener = ({
  id,
  size,
  minSize,
  pos,
  label,
  content,
  iconSource,
  noLabelBackground,
  openOnStartUpOrder,
  loading,
  isIcon,
}) => {
  const [windowDOM, setWindowDOM] = useState(null);
  const [windowOpened, setWindowOpened] = useState(false);
  const [windowZIndex, setWindowZIndex] = useState(openOnStartUpOrder || 0);
  const { getNewTopZIndex } = useTopZIndexContext();

  useEffect(() => {
    setWindowDOM(document.getElementById('windowSpawn'));
  }, []);

  useEffect(() => {
    if (!loading && openOnStartUpOrder) {
      setTimeout(() => {
        setWindowOpened(true);
        updateWindowZIndex();
      }, openOnStartUpOrder * 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, openOnStartUpOrder]);

  const updateWindowZIndex = useCallback(() => {
    const newZIndex = getNewTopZIndex(windowZIndex);
    setWindowZIndex(newZIndex);
  }, [getNewTopZIndex, windowZIndex]);

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation;
      if (!windowOpened) setWindowOpened(true);
      updateWindowZIndex();
    },
    [updateWindowZIndex, windowOpened]
  );

  const handleWindowClose = useCallback(() => {
    setWindowOpened(false);
  }, []);

  return (
    <>
      {isIcon ? (
        <Icon
          iconSource={iconSource}
          handleClick={handleClick}
          noLabelBackground={noLabelBackground}
          label={label}
        />
      ) : (
        <Title onClick={handleClick} css={windowOpener.textButton}>
          {label}
        </Title>
      )}
      {windowDOM
        ? ReactDOM.createPortal(
            <Window
              id={id}
              label={label}
              content={content}
              opened={windowOpened}
              onClose={handleWindowClose}
              defaultSize={size}
              minSize={minSize}
              defaultPos={pos}
              zIndex={windowZIndex}
              updateZIndex={updateWindowZIndex}
              loading={loading}
            />,
            windowDOM
          )
        : null}
    </>
  );
};

export default WindowOpener;

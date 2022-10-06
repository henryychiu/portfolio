/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useTopZIndexContext } from '../../context/TopZIndexContext';
import useBrowserWindowSize from '../../hooks/useBrowserWindowSize';
import { MENU_BAR_HEIGHT, stripedBackground, theme } from '../../styles/styles';
import Title from '../Title';

const windowCss = {
  self: css({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    background: theme.grey[400],
    outline: '2px solid black',
    borderTop: '2px solid white',
    borderLeft: '2px solid white',
    borderRight: `2px solid ${theme.grey[600]}`,
    borderBottom: `2px solid ${theme.grey[600]}`,
    boxShadow: '4px 4px black',
  }),
  header: {
    self: css({
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 1fr',
      height: '20px',
      padding: '7px',
      userSelect: 'none',
      cursor: 'grab',
    }),
    background: css(
      {
        position: 'absolute',
        top: '7px',
        left: '34px',
        bottom: '7px',
        right: '34px',
        zIndex: '-1',
      },
      stripedBackground
    ),
  },
  button: {
    self: css({
      height: '20px',
      width: '20px',
      border: '2px solid black',
      padding: '0',
      position: 'relative',
      cursor: 'pointer',
      '&:hover': {
        background: 'white',
      },
      transition: 'ease 0.3s all',
    }),
    maximizeIcon: css({
      height: '10px',
      width: '10px',
      borderBottom: '2px solid black',
      borderRight: '2px solid black',
      position: 'absolute',
      top: 0,
    }),
  },
  content: css({
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
    border: '2px solid black',
    margin: '0 7px 7px 7px',
  }),
  title: css({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: '0 7px',
    background: theme.grey[400],
    justifySelf: 'center',
  }),
  scaleArea: {
    self: css({
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: '34px',
      width: '34px',
      background: theme.grey[400],
      cursor: 'nwse-resize',
      userSelect: 'none',
    }),
    border: css({
      position: 'absolute',
      bottom: 0,
      right: 0,
      height: '25px',
      width: '25px',
      outline: '2px solid black',
    }),
    icon: css(
      {
        margin: '7px',
        height: '12px',
        width: '14px',
        transform: 'rotate(-45deg)',
      },
      stripedBackground
    ),
  },
};

let offset = { x: 0, y: 0 };

const DEFAULT_TRANSITION = 'ease 0.3s all, 0s ease z-index';

const WINDOW = {
  MIN_WIDTH: 200,
  MIN_HEIGHT: 160,
};

const Window = ({
  id,
  label,
  content,
  opened,
  onClose,
  defaultSize,
  minSize,
  defaultPos,
  zIndex,
  updateZIndex,
  loading,
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [pos, setPos] = useState(defaultPos);
  const [initalSize, setInitalSize] = useState(defaultSize);
  const [prevSize, setPrevSize] = useState(defaultSize);
  const [prevPos, setPrevPos] = useState(defaultPos);
  const [opacity, setOpacity] = useState(0);
  const [transition, setTransition] = useState(DEFAULT_TRANSITION);
  const { topZIndex } = useTopZIndexContext();
  const { browserWindowSize } = useBrowserWindowSize();
  const [maximized, setMaximized] = useState(false);

  /**
   * Open window
   */
  useEffect(() => {
    if (opened && size.width === 0 && size.height === 0) {
      setOpacity(1);
      setSize(initalSize);
    }
  }, [initalSize, opened, size.width, size.height]);

  /**
   * Handler for close button
   */
  const handleClose = useCallback(
    (e) => {
      e.stopPropagation();
      onClose();
      setInitalSize({ width: size.width, height: size.height });
      setSize({ width: 0, height: 0 });
      setTimeout(() => {
        setOpacity(0);
      }, 280);
    },
    [onClose, size.width, size.height]
  );

  const isAtTop = useMemo(() => zIndex === topZIndex, [zIndex, topZIndex]);

  /**
   * EventListener for handling window selection
   */
  const onMouseDownZIndex = useCallback(
    (e) => {
      e.stopPropagation();
      updateZIndex();
    },
    [updateZIndex]
  );

  /**
   * EventListeners for dragging window
   */
  const onMouseDownPos = useCallback(
    (e) => {
      setTransition('none');
      offset = { x: pos.x - e.clientX, y: pos.y - e.clientY };
      document.addEventListener('mousemove', onMouseMovePos);
      document.addEventListener('mouseup', onMouseUpPos);
      const headerStyle = document.getElementById(`header-${id}`).style;
      headerStyle.cursor = 'grabbing';
    },
    [id, onMouseMovePos, onMouseUpPos, pos.x, pos.y]
  );

  const onMouseMovePos = useCallback((e) => {
    e.stopPropagation();
    setMaximized(false);
    setPos({
      x: offset.x + e.clientX,
      y: Math.max(offset.y + e.clientY, 0),
    });
  }, []);

  const onMouseUpPos = useCallback(() => {
    setTransition(DEFAULT_TRANSITION);
    document.removeEventListener('mousemove', onMouseMovePos);
    document.removeEventListener('mouseup', onMouseUpPos);
    const headerStyle = document.getElementById(`header-${id}`).style;
    headerStyle.cursor = 'grab';
  }, [id, onMouseMovePos]);

  /**
   * EventListeners for resizing window
   */
  const onMouseDownSize = useCallback(
    (e) => {
      setTransition('none');
      offset = { x: size.width - e.clientX, y: size.height - e.clientY };
      document.addEventListener('mousemove', onMouseMoveSize);
      document.addEventListener('mouseup', onMouseUpSize);
    },
    [onMouseMoveSize, onMouseUpSize, size.height, size.width]
  );

  const onMouseMoveSize = useCallback(
    (e) => {
      e.stopPropagation();
      setMaximized(false);
      setSize({
        width: Math.max(
          offset.x + e.clientX,
          minSize ? minSize.width : WINDOW.MIN_WIDTH
        ),
        height: Math.max(
          offset.y + e.clientY,
          minSize ? minSize.height : WINDOW.MIN_HEIGHT
        ),
      });
    },
    [minSize]
  );

  const onMouseUpSize = useCallback(() => {
    setTransition(DEFAULT_TRANSITION);
    document.removeEventListener('mousemove', onMouseMoveSize);
    document.removeEventListener('mouseup', onMouseUpSize);
  }, [onMouseMoveSize]);

  /**
   * Handler for maximize button
   */
  const handleMaximize = useCallback(
    (e) => {
      e.stopPropagation();
      if (!maximized) {
        setPrevPos({ x: pos.x, y: pos.y });
        setPrevSize({ width: size.width, height: size.height });
        setPos({ x: -browserWindowSize.width / 2, y: 0 });
        setSize({
          width: browserWindowSize.width,
          height: browserWindowSize.height - MENU_BAR_HEIGHT,
        });
        setMaximized(true);
      } else {
        setPos({ x: prevPos.x, y: prevPos.y });
        setSize({ width: prevSize.width, height: prevSize.height });
        setMaximized(false);
      }
    },
    [
      browserWindowSize.height,
      browserWindowSize.width,
      maximized,
      pos.x,
      pos.y,
      prevPos.x,
      prevPos.y,
      prevSize.width,
      prevSize.height,
      size.width,
      size.height,
    ]
  );

  /**
   * Handler for rendering elipsis
   */
  const renderTitle = useMemo(() => {
    if (size.width === 0) return '...';
    const charactersLeft = Math.round(size.width / 8.5) - 9;
    return charactersLeft < label.length
      ? label.slice(0, charactersLeft - 3) + '...'
      : label;
  }, [label, size.width]);

  return (
    <div
      id={id}
      css={windowCss.self}
      style={{
        zIndex: zIndex,
        opacity: opacity,
        width: size.width,
        height: size.height,
        left: pos.x,
        top: pos.y,
        transition: transition,
      }}
      onMouseDown={onMouseDownZIndex}
    >
      <div
        id={`header-${id}`}
        css={windowCss.header.self}
        onMouseDown={onMouseDownPos}
      >
        {isAtTop && <div css={windowCss.header.background} />}
        {isAtTop ? (
          <button
            css={windowCss.button.self}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleClose}
          />
        ) : (
          <div />
        )}
        <Title
          key={`title-${id}`}
          css={windowCss.title}
          style={!isAtTop ? { color: theme.grey[700] } : {}}
        >
          {renderTitle}
        </Title>
        {isAtTop ? (
          <button
            css={windowCss.button.self}
            style={{ justifySelf: 'end' }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleMaximize}
          >
            <div css={windowCss.button.maximizeIcon} />
          </button>
        ) : (
          <div />
        )}
      </div>
      <div css={windowCss.content}>
        {React.cloneElement(content, {
          opened,
          loading,
          windowSize: size,
        })}
        <div css={windowCss.scaleArea.border} />
      </div>
      <div css={windowCss.scaleArea.self} onMouseDown={onMouseDownSize}>
        {isAtTop && <div css={windowCss.scaleArea.icon} />}
      </div>
    </div>
  );
};

export default Window;

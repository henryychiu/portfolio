import { css } from '@emotion/react';
import { useCallback, useState } from 'react';

import { ABOUT_THIS_COMPUTER_WINDOW } from '../../content/windows';
import { MENU_BAR_HEIGHT, theme } from '../../styles/styles';
import Title from '../Title';
import WindowOpener from '../WindowOpener';
import useFormattedClock from './hooks/useFormattedClock';

const menuBarCss = {
  self: css({
    boxSizing: 'border-box',
    background: theme.grey[400],
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    gap: '12px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    outline: '2px solid black',
    borderTop: '2px solid white',
    borderLeft: '2px solid white',
    borderRight: `2px solid ${theme.grey[600]}`,
    borderBottom: `2px solid ${theme.grey[600]}`,
    marginBottom: '2px',
    height: MENU_BAR_HEIGHT,
  }),
  icon: css({
    height: '18px',
    width: '18px',
  }),
  clock: css({ marginLeft: 'auto' }),
};

const menuBarButtonCss = {
  self: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }),

  label: css({
    height: '20px',
    userSelect: 'none',
    padding: '4px',
    cursor: 'pointer',
  }),

  dropdown: {
    self: css({
      zIndex: 1000000000,
      position: 'absolute',
      width: '200px',
      left: 0,
      top: 'calc(100% + 4px)',
      display: 'flex',
      flexDirection: 'column',
      background: theme.grey[400],
      outline: '2px solid black',
      borderTop: '2px solid white',
      borderLeft: '2px solid white',
      borderRight: `2px solid ${theme.grey[600]}`,
      borderBottom: `2px solid ${theme.grey[600]}`,
      boxShadow: '4px 4px black',
      transition: 'all 0.2s ease',
    }),

    outside: css({
      zIndex: 999999999,
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      height: '200%',
      width: '200%',
      transition: 'all 0.2s ease',
    }),

    divider: css({
      boxSizing: 'border-box',
      height: '4px',
      borderTop: `2px solid ${theme.grey[600]}`,
      borderBottom: '2px solid white',
    }),

    text: css({
      margin: '4px 7px',
      cursor: 'pointer',
    }),
  },
};

const MenuBarButton = ({ id, label, isLogo, clickable }) => {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [sleeping, setSleeping] = useState(false);

  const handleDropdownOpen = useCallback((e) => {
    e.stopPropagation();
    setDropdownOpened(true);
  }, []);

  const handleDropdownClose = useCallback((e) => {
    e.stopPropagation();
    setDropdownOpened(false);
  }, []);

  const handleReload = useCallback(() => {
    location.reload();
    return false;
  }, []);

  const handleSleep = useCallback(() => {
    setDropdownOpened(false);
    setTimeout(() => setSleeping(true), 400);
  }, []);

  const onMouseMoveSleep = useCallback(() => {
    setTimeout(() => setSleeping(false), 600);
  }, []);

  return (
    <>
      <div id={id} css={menuBarButtonCss.self}>
        <div
          css={menuBarButtonCss.label}
          style={
            clickable
              ? dropdownOpened
                ? { background: theme.blue, color: 'white' }
                : {}
              : { color: theme.grey[700], cursor: 'default' }
          }
          onClick={clickable ? handleDropdownOpen : () => {}}
        >
          {isLogo ? (
            <img
              alt="apple"
              src={dropdownOpened ? 'appleWhite.svg' : '/apple.svg'}
              css={menuBarCss.icon}
            />
          ) : (
            <Title>{label}</Title>
          )}
        </div>
        <div
          css={menuBarButtonCss.dropdown.self}
          style={
            dropdownOpened
              ? { opacity: 1 }
              : { opacity: 0, pointerEvents: 'none' }
          }
        >
          <div css={menuBarButtonCss.dropdown.text}>
            <WindowOpener {...ABOUT_THIS_COMPUTER_WINDOW} />
          </div>
          <div css={menuBarButtonCss.dropdown.divider} />
          <Title css={menuBarButtonCss.dropdown.text} onClick={handleSleep}>
            Sleep
          </Title>
          <Title css={menuBarButtonCss.dropdown.text} onClick={handleReload}>
            Restart
          </Title>
        </div>
      </div>
      <div
        id={`${id}-outside`}
        css={menuBarButtonCss.dropdown.outside}
        style={
          dropdownOpened
            ? { opacity: 1 }
            : { opacity: 0, pointerEvents: 'none' }
        }
        onClick={handleDropdownClose}
      />
      <div
        id="sleep-black-screen"
        css={menuBarButtonCss.dropdown.outside}
        style={
          sleeping
            ? { opacity: 1, background: 'black' }
            : { opacity: 0, pointerEvents: 'none', background: 'black' }
        }
        onMouseMove={onMouseMoveSleep}
      />
    </>
  );
};

const MenuBar = () => {
  const [clock] = useFormattedClock();

  return (
    <div css={menuBarCss.self}>
      <MenuBarButton id="menu-logo" isLogo clickable />
      <MenuBarButton id="menu-file" label="File" />
      <MenuBarButton id="menu-edit" label="Edit" />
      <MenuBarButton id="menu-view" label="View" />
      <Title css={menuBarCss.clock}>{clock}</Title>
    </div>
  );
};

export default MenuBar;

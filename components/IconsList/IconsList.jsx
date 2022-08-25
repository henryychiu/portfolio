import { css } from '@emotion/react';

import WindowOpener from '../WindowOpener';

const iconsListCss = {
  self: css({
    display: 'flex',
    flexWrap: 'wrap',
    width: '0px',
    height: '0px',
    padding: '20px',
  }),
  row: css({ flexDirection: 'row', width: '100%', height: '100%' }),
  column: { flexDirection: 'column', height: '100%' },
};

const getStyles = (direction) =>
  direction === 'row' ? iconsListCss.row : iconsListCss.column;

const IconsList = ({ direction, icons, loading, noLabelBackground }) => {
  return (
    <div css={[iconsListCss.self, getStyles(direction)]}>
      {icons.map((icon) => (
        <WindowOpener
          key={'icon-' + icon.id}
          id={icon.id}
          label={icon.label}
          size={icon.size}
          minSize={icon.minSize}
          pos={icon.pos}
          content={icon.content}
          iconSource={icon.iconSource}
          noLabelBackground={noLabelBackground}
          openOnStartUpOrder={icon.openOnStartUpOrder}
          loading={loading}
          isIcon
        />
      ))}
    </div>
  );
};

export default IconsList;

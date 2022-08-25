import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { theme } from '../../styles/styles';
import Title from '../Title';

const projectCardCss = {
  self: css({
    display: 'flex',
    gap: '20px',
  }),
  image: {
    container: css({
      flexBasis: '60%',
    }),
    self: css({ width: '100%', border: '2px solid black' }),
  },
  info: {
    self: css({
      fontSize: '14px',
      flexBasis: '40%',
    }),
    header: css({
      marginBottom: '20px',
    }),
    title: css({
      fontSize: '16px',
    }),
    subtitle: css({ color: theme.grey[700] }),
  },
};

const ProjectCard = ({
  imageSource,
  title,
  subtitle,
  description,
  direction,
}) => {
  return (
    <div css={projectCardCss.self} style={{ flexDirection: direction }}>
      <div css={projectCardCss.image.container}>
        <img css={projectCardCss.image.self} src={imageSource} />
      </div>
      <div css={projectCardCss.info.self}>
        <div css={projectCardCss.info.header}>
          <Title css={projectCardCss.info.title}>{title}</Title>
          <div css={projectCardCss.info.subtitle}>{subtitle}</div>
        </div>
        {description}
      </div>
    </div>
  );
};

const projectsListCss = {
  self: {
    padding: '20px',
    display: 'flex',
    gap: '40px',
  },
};

const ProjectsList = ({ windowSize, projects = [] }) => {
  const [direction, setDirection] = useState('row');

  useEffect(() => {
    if (windowSize.width < theme.breakpoint.sm) {
      setDirection('column');
    } else {
      setDirection('row');
    }
  }, [windowSize.width]);

  return (
    <div css={projectsListCss.self}>
      {projects.map((project) => (
        <ProjectCard
          direction={direction}
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          imageSource={project.imageSource}
        />
      ))}
    </div>
  );
};

export default ProjectsList;

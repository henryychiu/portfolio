/** @jsxImportSource @emotion/react */
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
      position: 'relative',
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
  link: {
    container: css({
      position: 'absolute',
      top: '10px',
      right: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }),
    self: css({
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: 'black',
      opacity: '0.5',
      transition: 'all 0.2s ease',

      '&:hover': {
        opacity: 0.8,
      },
    }),
  },
};

const ProjectCard = ({
  imageSource,
  title,
  subtitle,
  description,
  direction,
  link,
  github,
}) => {
  return (
    <div css={projectCardCss.self} style={{ flexDirection: direction }}>
      <div css={projectCardCss.image.container}>
        <img css={projectCardCss.image.self} src={imageSource} />
        <div css={projectCardCss.link.container}>
          {link && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              css={projectCardCss.link.self}
              style={{ backgroundImage: 'url(/linkIcon.svg)' }}
            />
          )}
          {github && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              css={projectCardCss.link.self}
              style={{ backgroundImage: 'url(/githubIcon.svg)' }}
            />
          )}
        </div>
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
    flexDirection: 'column',
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
          link={project.link}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default ProjectsList;

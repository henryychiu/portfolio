import AboutThisComputer from '../components/AboutThisComputer';
import Browser from '../components/Browser';
import Finder from '../components/Finder';
import NotePad from '../components/NotePad';
import Photo from '../components/Photo';
import ProjectsList from '../components/ProjectsList';
import TextFile from '../components/TextFile';
import { PROJECTS } from './projects';

export const ABOUT_THIS_COMPUTER_WINDOW = {
  id: 'about-this-computer',
  size: {
    width: 600,
    height: 300,
  },
  pos: { x: -300, y: 150 },
  label: 'About This Computer',
  content: <AboutThisComputer />,
};

export const DISK_WINDOWS = [
  {
    id: 'me-text',
    size: {
      width: 420,
      height: 460,
    },
    pos: { x: -280, y: 110 },
    label: 'About Me.txt',
    iconSource: '/page.svg',
    content: (
      <TextFile
        content={
          <>
            <p>
              My name is Henry Chiu and I&apos;m a 4th year studying Computer
              Science at UC Berkeley.
            </p>
            <p>
              I&apos;m passionate about full-stack development, and have worked
              at companies such as <b style={{ color: '#0b1721' }}>Plaid</b>,{' '}
              <b style={{ color: '#0b1721' }}>Verkada</b>, and{' '}
              <b style={{ color: '#0b1721' }}>Tesla</b>.
            </p>
            <br />
            <p>
              Email me at{' '}
              <a href="mailto: henrychiu@berkeley.edu">
                henrychiu@berkeley.edu
              </a>
            </p>
            <p>
              Or find me at{' '}
              <a
                href="https://www.linkedin.com/in/henryychiu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>{' '}
              <a
                href="https://github.com/henryychiu"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </p>
          </>
        }
      />
    ),
  },
  {
    id: 'me-photo',
    size: { width: 528, height: 452.5 },
    pos: { x: -360, y: 40 },
    label: 'me.jpg',
    iconSource: '/me.jpg',
    content: <Photo imageSource="/me.jpg" />,
    openOnStartUpOrder: 1,
  },
];

export const DESKTOP_WINDOWS = [
  {
    id: 'About Me',
    size: { width: 560, height: 340 },
    pos: { x: -200, y: 140 },
    label: 'About Me',
    iconSource: '/disk.svg',
    content: <Finder icons={DISK_WINDOWS} />,
  },
  {
    id: 'projects',
    size: { width: 900, height: 440 },
    minSize: { width: 300, height: 300 },
    pos: { x: -450, y: 80 },
    label: 'Projects',
    iconSource: 'internetExplorer.svg',
    content: (
      <Browser
        address="http://localhost:3000/"
        content={<ProjectsList projects={PROJECTS} />}
      />
    ),
  },
  {
    id: 'note-pad',
    size: {
      width: 370,
      height: 300,
    },
    pos: { x: 50, y: 120 },
    label: 'Note Pad',
    iconSource: '/notePad.svg',
    content: (
      <NotePad
        defaultPhrase={`Hey there!\n\u00a0\nI'm Henry Chiu\u00a0and this is a portfolio of my coding work.\n\u00a0\u00a0\nClick around to explore :D`}
      />
    ),
    openOnStartUpOrder: 2,
  },
  {
    id: 'resume',
    size: { width: 710, height: 400 },
    pos: { x: -410, y: 25 },
    label: 'Resume.pdf',
    iconSource: '/Henry_Chiu_Resume.jpg',
    content: (
      <Photo
        imageSource="/Henry_Chiu_Resume.jpg"
        downloadSource="/Henry_Chiu_Resume.pdf"
        isPdf
      />
    ),
  },
];

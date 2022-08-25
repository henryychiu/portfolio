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
    width: 460,
    height: 300,
  },
  pos: { x: -230, y: 150 },
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
    content: <TextFile content={''} />,
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
  {
    id: 'note-pad2',
    size: {
      width: 370,
      height: 300,
    },
    pos: { x: 50, y: 120 },
    label: 'Note Pad',
    iconSource: '/notePad.svg',
    content: (
      <NotePad
        defaultPhrase={`Hello!\n\nI'm Henry Chiu\u00a0and this is a portfolio of my coding work.\n\u00a0\nClick around to explore :D`}
      />
    ),
  },
];

export const DESKTOP_WINDOWS = [
  {
    id: 'henryychiu',
    size: { width: 560, height: 340 },
    pos: { x: -200, y: 180 },
    label: 'henryychiu',
    iconSource: '/disk.svg',
    content: <Finder icons={DISK_WINDOWS} />,
  },
  {
    id: 'projects',
    size: { width: 800, height: 440 },
    minSize: { width: 300, height: 300 },
    pos: { x: -420, y: 80 },
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
        defaultPhrase={`Hello!\n\nI'm Henry Chiu\u00a0and this is a portfolio of my coding work.\n\u00a0\nClick around to explore :D`}
      />
    ),
    openOnStartUpOrder: 2,
  },
];

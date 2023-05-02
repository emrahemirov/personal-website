import { TR, US } from 'country-flag-icons/react/3x2';
import {
  balanceMfetProjectImg,
  larkProjectImg,
  newsMfetProjectImg,
  reformMfetProjectImg,
  spaceToolsProjectImg,
} from '@/assets/images';
import { IoWalletOutline, IoLanguage } from 'react-icons/io5';
import { MdDevices } from 'react-icons/md';
import { Extra, Project } from './types';

export const navLinks = [
  { label: 'nav-links.me', href: '#me' },
  { label: 'nav-links.skills', href: '#skills' },
  {
    label: 'nav-links.projects',
    href: '#projects',
  },
];

export const langs = {
  tr: { Flag: TR, label: 'Türkçe' },
  en: { Flag: US, label: 'English' },
};

export const extras: Record<string, Extra> = {
  web3: {
    Icon: IoWalletOutline,
    color: 'rgb(255,165,0)',
    bgColor: 'rgba(255,165,0,0.4)',
    label: 'projects.web3',
  },
  responsive: {
    Icon: MdDevices,
    color: 'rgb(0,0,255)',
    bgColor: 'rgba(0,0,255,0.4)',
    label: 'projects.responsive',
  },
  language: {
    Icon: IoLanguage,
    color: 'rgb(0,255,0)',
    bgColor: 'rgba(0,255,0,0.4)',
    label: 'projects.language',
  },
};

export const projects: Project[] = [
  {
    image: balanceMfetProjectImg,
    name: 'BALANCE',
    href: 'https://balance.mfet.earth/',
    extras: [extras.web3, extras.responsive, extras.language],
  },
  {
    image: larkProjectImg,
    name: 'LARK',
    href: 'https://www.lark-international.com/',
    extras: [extras.responsive],
  },
  {
    image: newsMfetProjectImg,
    name: 'NEWS',
    href: 'https://news.mfet.earth/',
    extras: [extras.responsive, extras.language],
  },
  {
    image: reformMfetProjectImg,
    name: 'REFORM',
    href: 'https://reform.mfet.earth/',
    extras: [extras.web3, extras.responsive, extras.language],
  },
  {
    image: spaceToolsProjectImg,
    name: 'SPACE TOOLS',
    href: 'https://space-tools.io/',
    extras: [extras.web3, extras.responsive],
  },
];

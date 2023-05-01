import { TR, US } from 'country-flag-icons/react/3x2';

export const navLinks = [
  { label: 'nav-links.me', href: '#me', matches: /#me/ },
  { label: 'nav-links.about', href: '#about', matches: /#about/ },
  { label: 'nav-links.skills', href: '#skills', matches: /#skills/ },
  {
    label: 'nav-links.projects',
    href: '#projects',
    matches: /#projects/,
  },
];

export const langs = {
  tr: { Flag: TR, label: 'Türkçe' },
  en: { Flag: US, label: 'English' },
};

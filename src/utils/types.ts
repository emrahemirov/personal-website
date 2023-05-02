import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons/lib';

export interface Extra {
  Icon: IconType;
  color: `rgb(${string},${string},${string})`;
  bgColor: `rgba(${string},${string},${string},${string})`;
  label: string;
}

export interface Project {
  image: StaticImageData;
  name: string;
  href: string;
  extras: Extra[];
}

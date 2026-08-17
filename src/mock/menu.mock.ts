import type { IconName } from 'node_modules/lucide-react/dynamic';

type MenuMockType = {
  href: string;
  label: string;
  icon: IconName;
};

export const menuMock: MenuMockType[] = [
  {
    href: '#sobre',
    label: 'Sobre',
    icon: 'user',
  },
  {
    href: '#atendimento',
    label: 'Atendimento',
    icon: 'book-open-text',
  },
  {
    href: '#especialidades',
    label: 'Universo terapêutico',
    icon: 'briefcase',
  },
  {
    href: '#faq',
    label: 'FAQ',
    icon: 'circle-help',
  },
];

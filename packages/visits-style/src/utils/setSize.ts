import { SizeType } from '../types';

type SizePropsNameType = 'font-size' | 'height';

export default function setSize(name: SizePropsNameType, size?: SizeType) {
  switch (size) {
    case 'small':
      return `${name}: 0.75rem;`;
    case 'medium':
      return `${name}: 1.25rem;`;
    case 'large':
      return `${name}: 1.5rem;`;
    default:
      return `${name}: 1rem;`;
  }
}

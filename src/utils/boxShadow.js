import { transparentize } from 'polished';

export default function boxShadow(size, color) {
  return `box-shadow: 0 0 0 ${size} ${transparentize(0.5, color)};`;
}

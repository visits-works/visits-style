import { transparentize } from 'polished';

export default function boxShadow(size, color, amount = 0.5) {
  return `box-shadow: 0 0 0 ${size} ${transparentize(amount, color)};`;
}

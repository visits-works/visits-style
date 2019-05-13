import { getLuminance } from 'polished';
import { ThemeType } from '../types';

export default function findColorInvert({ black, white }: ThemeType, color: string) {
  if (!color || getLuminance(color) > 0.55) {
    return black;
  }
  return white;
}

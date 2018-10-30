import getLuminance from 'polished/lib/color/getLuminance';
import { ThemeType } from '../types';

export default function findColorInvert({ black, white }: ThemeType, color: string) {
  if (getLuminance(color) > 0.55) {
    return black;
  } else {
    return white;
  }
}

import { getLuminance } from 'polished';
import { white, black } from '../styles/colors';

export default function findColorInvert(color) {
  if (getLuminance(color) > 0.55) {
    return black;
  } else {
    return white;
  }
}

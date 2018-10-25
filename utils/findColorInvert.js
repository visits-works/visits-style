import getLuminance from 'polished/lib/color/getLuminance';
export default function findColorInvert(_ref, color) {
  var black = _ref.black,
      white = _ref.white;

  if (getLuminance(color) > 0.55) {
    return black;
  } else {
    return white;
  }
}
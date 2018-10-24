import transparentize from 'polished/lib/color/transparentize';
export default function boxShadow(size, color, amount) {
  var shadowColor = amount ? transparentize(amount, color) : color;
  return "box-shadow: 0 0 0 " + size + " " + shadowColor + ";";
}
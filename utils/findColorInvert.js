import getLuminance from 'polished/lib/color/getLuminance';
export default function findColorInvert({ black, white }, color) {
    if (getLuminance(color) > 0.55) {
        return black;
    }
    else {
        return white;
    }
}

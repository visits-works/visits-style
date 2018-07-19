
export default function setAlign({ align }: { align?: 'left' | 'right' | 'center' }) {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'space-evenly';
  }
}

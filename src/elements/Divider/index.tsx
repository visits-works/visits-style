import Base, { type HTMLAttributes } from '../Base';

export interface Props extends HTMLAttributes<HTMLElement> {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ orientation = 'horizontal', ...props }: Props) {
  return (
    <Base
      as="hr"
      role="none"
      classList={[
        'border-0 p-0 shrink-0 bg-input',
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
      ]}
      {...props}
    />
  );
}

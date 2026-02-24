import Base, { type HTMLAttributes } from '../Base';

export default function ButtonGroup(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <Base
      role="group"
      classList={[
        'flex items-center justify-center',
        '[&_button]:rounded-none **:first:rounded-bl **:first:rounded-tl **:last:rounded-br **:last:rounded-tr',
        '**:first:border-r-0 **:last:border-l-0',
      ]}
      {...props}
    />
  );
}

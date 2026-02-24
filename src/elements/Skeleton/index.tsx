import Base, { type HTMLAttributes } from '../Base';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Skeleton(props: Props) {
  return <Base<Props> classList="inline-block animate-pulse rounded-md bg-accent" {...props} />;
}

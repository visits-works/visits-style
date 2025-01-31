import { HTMLAttributes, useMemo } from 'react';
import merge from 'utils/merge';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement>{
  /** 現状の進捗 */
  value: number;
  /**
   * 進捗の最大値\
   * 最小値は0基準になるので、それに合わせてください
  */
  max: number;
}

export default function Progress({ value, max, className, ...rest }: ProgressProps) {
  const percent = useMemo(() => (value ? Math.round((value / max) * 100) : 0), [value, max]);
  const name = useMemo(() => merge('relative overflow-hidden rounded-full bg-primary', className), [className]);
  return (
    <div role="progressbar" className={name} aria-valuemax={max} aria-valuemin={0}  {...rest}>
      <div
        className="h-full w-full flex-1 bg-input transition-all origin-right"
        style={{ transform: `translateX(${percent > 100 ? 100 : percent}%)` }}
      />
    </div>
  );
}

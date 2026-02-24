import { useMemo } from 'react';

import Base, { type HTMLAttributes } from '../Base';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement>{
  /** 現状の進捗 */
  value: number;
  /**
   * 進捗の最大値\
   * 最小値は0基準になるので、それに合わせてください
  */
  max: number;
}

export default function Progress({ value, max, ...rest }: ProgressProps) {
  const percent = useMemo(() => (value ? Math.min(100, Math.round((value / max) * 100)) : 0), [value, max]);
  return (
    <Base
      role="progressbar"
      classList="relative overflow-hidden rounded-full bg-primary"
      aria-valuemax={max}
      aria-valuemin={0}
      {...rest}
    >
      <Base
        className="h-full w-full flex-1 bg-input transition-all origin-right"
        style={{ transform: `translateX(${percent}%)` }}
      />
    </Base>
  );
}

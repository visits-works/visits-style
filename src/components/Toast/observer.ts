import type { ReactNode } from 'react';

import type { ToastConfig } from './types';

function noop() {}

type PublishArgs = (
  { id: string; type: 'add'; config: ToastConfig; }
  | { id: string; type: 'remove'; }
  | { id: string; type: 'update'; config: Partial<ToastConfig>; }
);

class ToastObserver {
  /** システムで１つしか存在しない前提とする */
  notify: (args: PublishArgs) => void = noop;

  lastId = 0;

  /** internal use only */
  subscribe = (callback: (args: PublishArgs) => void) => {
    this.notify = callback;
    return () => {
      this.notify = noop;
    };
  };

  add = (label: ReactNode, config: Omit<ToastConfig, 'label' | 'id'> = {}) => {
    this.lastId += 1;
    const id = `${this.lastId}`;
    this.notify({ id, type: 'add', config: { id, label, ...config } });
    return id;
  };

  /** 表示中のtoastを修正します。promiseのロード状態を表示することなどに使います */
  update = (id: string, config: Partial<Omit<ToastConfig, 'id'>>) => {
    this.notify({ id, type: 'update', config });
  };

  remove = (id: string) => {
    this.notify({ id, type: 'remove' });
  };

  clear = () => {
    this.lastId = 0;
  };
}

const observer = new ToastObserver();
export default observer;

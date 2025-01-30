import type { ReactNode } from 'react';

import type { ToastConfig } from './types';

function noop() {}

class ToastObserver {
  /** システムで１つしか存在しない前提とする */
  notify = noop;
  data = new Map<string, ToastConfig>();
  lastId = 0;

  /** internal use only */
  subscribe = (callback: () => void) => {
    this.notify = callback;
    return () => {
      this.notify = noop;
    };
  };

  /** internal use only */
  getSnapShot = () => {
    if (!this.data.size) return [];
    return Array.from(this.data.values());
  };

  add = (label: ReactNode, config: Omit<ToastConfig, 'label' | 'id'> = {}) => {
    const id = `${++this.lastId}`;
    this.data.set(id, { id, label, ...config });
    this.notify();

    return id;
  }

  /** 表示中のtoastを修正します。promiseのロード状態を表示することなどに使います */
  update = (id: string, next: Partial<Omit<ToastConfig, 'id'>>) => {
    const prev = this.data.get(id);
    if (!prev) return;
    this.data.set(id, { ...prev, ...next });
    this.notify();
  }

  remove = (id: string) => {
    if (this.data.delete(id)) this.notify();
    if (!this.data.size) {
      this.lastId = 0;
    }
  }

  clear = () => {
    this.data.clear();
    this.lastId = 0;
    this.notify();
  }
}

const observer = new ToastObserver();
export default observer;

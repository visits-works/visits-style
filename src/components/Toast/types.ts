import type { ReactNode } from 'react';

export type ToastType = 'info' | 'success' | 'error' | 'warn' | 'loading';

export interface ToastConfig {
  /** 認識ID */
  id: string;
  label: ReactNode;

  type?: ToastType;

  /** ラベル以外に表示する内容 */
  message?: ReactNode;

  /**
   * 表示される時間 nullの場合は自動で閉じられません
   * @default 5000
   */
  duration?: number | null;
  className?: string;
}

export type ToastItemProps = Omit<ToastConfig, 'duration' | 'className'>;
export type ToasterPosition = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';

export interface ToasterProps {
  className?: string;

  /** レンダリング対象のコンポーネント */
  // ToastComponent?: ReactElement<ToastItemProps>;

  /**
   * toastの表示される場所の指定
   * \
   * top, top-right, top-left, bottom, bottom-right, bottom-left
   * @default 'top-left'
   */
  position?: ToasterPosition;
  /**
   * margin 単位はpx
   * @default '16px'
   */
  margin?: number;
  /** 並ばずに、Toastが積み上げます */
  stack?: boolean;
  /**
   * 表示する最大Toast数を指定します
   * @default 3
  */
  max?: number;
}

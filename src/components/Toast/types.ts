export interface ToastType {
  /** 認識ID */
  id: string;
  /** 表示する内容 */
  message?: React.ReactNode;
  /**
   * 表示される時間 nullの場合は自動で閉じられません
   * @default 5000
   */
  duration?: number | null;
  className?: string;
  /** 押したら閉じられる */
  clearOnClick?: boolean;
}

export interface ToastItemProps extends ToastType {
  clear: (id: string) => void;
}

export type ToastContainerPositionType = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';

export interface ToastContainerProps {
  /** 表示するToastのリスト */
  toasts: ToastType[];
  /** toastを消すタイミングのコールバック */
  clear: (id: string) => void;
  /**
   * toastの表示される場所の指定
   * \
   * top, top-right, top-left, bottom, bottom-right, bottom-left
   * @default 'top-left'
   */
  position?: ToastContainerPositionType;
  /**
   * margin 単位はpx
   * @default '16px'
   */
  margin?: string;
  /** スクロールしても固定として表示する */
  fixed?: boolean;
}

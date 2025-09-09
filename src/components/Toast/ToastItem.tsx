import type { ToastItemProps } from './types';

import Spinner from '../../elements/Spinner';
import { useToastContext } from '.';

export default function ToastItem({ type, label, message }: ToastItemProps) {
  const { icons } = useToastContext();

  return (
    <div className="flex items-center px-4 py-3 w-80 text-sm bg-background border border-input rounded-lg shadow-md m-2">
      {type ? (
        <figure className="mr-2">
          {type === 'success' && icons?.success ? icons.success : null}
          {type === 'info' && icons?.info ? icons.info : null}
          {type === 'error' && icons?.error ? icons.error : null}
          {type === 'warn' && icons?.warn ? icons.warn : null}
          {type === 'loading' ? <Spinner size={20} /> : null}
        </figure>
      ) : null}
      <div className="space-y-2">
        <p className="font-medium leading-none">{label}</p>
        {message ? <p>{message}</p> : null}
      </div>
    </div>
  );
}

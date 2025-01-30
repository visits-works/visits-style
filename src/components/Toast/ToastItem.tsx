import type { ToastItemProps } from './types';

import ApprovedIcon from '../../elements/Icons/Approved';
import AlertIcon from '../../elements/Icons/Alert';
import CautionIcon from '../../elements/Icons/Caution';
import Spinner from '../Spinner';

export default function ToastItem({ id, type, label, message }: ToastItemProps) {
  return (
    <div className="flex items-center px-4 py-3 w-80 text-sm bg-background border border-input rounded-lg shadow-md m-2">
      {type ? (
        <figure className="mr-2">
          {type === 'success' ? <ApprovedIcon className="text-primary size-5" /> : null}
          {type === 'info' ? <AlertIcon className="text-primary size-5" /> : null}
          {type === 'error' ? <AlertIcon className="text-danger size-5" /> : null}
          {type === 'warn' ? <CautionIcon className="text-danger size-5" /> : null}
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

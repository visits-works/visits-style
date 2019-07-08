import { useEffect } from 'react';

export default function useScrollFix(show?: boolean) {
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
    } else if (document.querySelectorAll('[aria-modal]').length <= 1) {
      document.body.style.overflowY = 'auto';
    }
  }, [show]);
}

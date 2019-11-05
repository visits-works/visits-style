import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export default function useScrollFix(show?: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
      return () => {
        if (document.querySelectorAll('[aria-modal]').length <= 1) {
          document.body.style.overflowY = 'auto';
        }
      };
    }
    return undefined;
  }, [show]);
}

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

let fixedNum = 0;

export default function useScrollFix(show?: boolean) {
  useIsomorphicLayoutEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden';
      fixedNum += 1;
      return () => {
        if (fixedNum <= 1) {
          document.body.style.overflowY = 'auto';
          fixedNum = 0;
        } else {
          fixedNum -= 1;
        }
      };
    }
    return undefined;
  }, [show]);
}

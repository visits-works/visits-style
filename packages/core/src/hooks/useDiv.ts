import { useRef, useEffect, useState } from 'react';

export default function useDiv(show: boolean, role?: string): [HTMLDivElement | null, () => void] {
  const div = useRef<HTMLDivElement | null>(null);
  const mounted = useRef(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHack] = useState(0);

  const onExited = () => {
    if (mounted.current) {
      document.body.removeChild(div.current!);
      mounted.current = false;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      div.current = document.createElement('div');
      if (role) div.current.setAttribute('role', role);
    }
    return onExited;
  }, [role]);

  useEffect(() => {
    if (show) {
      document.body.appendChild(div.current!);
      mounted.current = true;
      setHack(1);
    }
  }, [show]);

  return [div.current, onExited];
}
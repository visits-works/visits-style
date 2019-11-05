import { useState, useCallback } from 'react';

export default function useForceUpdate() {
  const [, setState] = useState(0);
  return useCallback(() => setState((c) => c + 1), []);
}

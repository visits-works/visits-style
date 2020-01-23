import { useReducer } from 'react';

export default function useForceUpdate() {
  return useReducer((c) => c + 1, 0)[1] as () => void;
}

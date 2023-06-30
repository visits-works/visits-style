import { useEffect, useLayoutEffect } from 'react';
import isClient from '../utils/isClient';

export default isClient ? useLayoutEffect : useEffect;

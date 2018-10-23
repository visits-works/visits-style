import * as sc from 'styled-components';
import normalize from './normalize';
// @ts-ignore
if ('injectGlobal' in sc) {
  // @ts-ignore
  sc.injectGlobal`${normalize}`;
}

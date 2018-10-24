import * as sc from 'styled-components';
import normalize from './normalize'; // @ts-ignore

if ('injectGlobal' in sc) {
  // @ts-ignore
  sc.injectGlobal.withConfig({
    displayName: "global",
    componentId: "sc-131bpz6-0"
  })([normalize]);
}
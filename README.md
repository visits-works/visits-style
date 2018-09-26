# visits-style
VISITS Technologyのreactデザインコンポーネント

## Getting Started

まずは、開発マシンから会社のgitアクセスをできるようにしてください。

```
npm install --save github:visits-works/visits-style#<branch指定> react react-dom styled-components
```

[yarn](https://yarnpkg.com/ja/)でもできます

```
yarn add github:visits-works/visits-style#<branch指定> react react-dom styled-components
```

## Example

```javascript
// styled.ts
import * as StyledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { ThemeType } from 'visits-style/types';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = StyledComponents as ThemedStyledComponentsModule<ThemeType>;

export { css, injectGlobal, keyframes, ThemeProvider };
export default styled;
```

```javascript
// index.tsx
import * as React from 'react';
import * as reactDOM from 'react-DOM';
import { ThemeProvider } from './styled';
import Button from 'visits-style/components/Button';

import 'visits-style/lib/styles/global';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  )
}

reactDOM.render(App, document.getElementById('root'));
```

## Docs

[Docs](https://github.com/pedronauck/docz)でガイドのドキュメントを生成します。

```
yarn start
```

`http://localhost:5000` で確認できます。

github Pagesのurlは公開されるので、注意してください


## 参考のデザインフレームワーク
[Bulma](https://bulma.io/)
[Bootstrap](http://getbootstrap.com//)


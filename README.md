# visits-style
VISITS Technologyのreactデザインコンポーネント

## Getting Started

まずは、開発マシンから会社のgitアクセスをできるようにしてください。

```
npm install github:visits-works/visits-style#<branch指定>
```

[yarn](https://yarnpkg.com/ja/)でもできます

```
yarn add github:visits-works/visits-style#<branch指定>
```

## Example

```javascript
import React from 'react';
import { render } from 'react-DOM';
import { ThemeProvider } from 'styled-components';
import { Button, Theme } from 'visits-style';
// import Button from 'visits-style/lib/components/Button';

// 一番rootの一回のみ必ずこれを追加してください。cssのnormalizeです
import 'visits-style/lib/styles/global';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  )
}

render(App, document.getElementById('root'));
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


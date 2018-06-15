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
import { Button } from 'visits-style/components';

function SomeComponent() {
  return <Button>Hello World!</Button>
}
```

## Docs

[Docs](https://github.com/pedronauck/docz)でガイドのドキュメントを生成します。
github Pagesのurlは公開されるので、注意してください

## Development

[React Storybook](https://github.com/storybooks/storybook)で動作確認しながら開発ができます。

1. storybookの起動
  ```
  yarn start
  ```
2. ブラウザで `http://localhost:9009` から確認・テストする

3. フォルダ`components/<コンポーネント名>`でコンポーネントを追加してください

4. `stories/*.stories.js`でコンポーネントのストーリーを作る


## 参考のデザインフレームワーク
[Bulma](https://bulma.io/)


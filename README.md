# visits-style
VISITS Technologyのreactデザインコンポーネント

## Getting Started

まずは、githubからこのレポジトリのトークンを取得してください。

```
npm install git+https://<githubのトークン>:x-oauth-basic@github.com/visits-works/visits-style.git#<branch指定>
```

## Example

```javascript
import React from 'react';
import { Button } from 'visits-style/ideagram';

function SomeComponent() {
  return <Button>Hello World!</Button>
}
```

## Development

[React Storybook](https://github.com/storybooks/storybook)で動作確認しながら開発ができます。

1. storybookの起動
  ```
  yarn start
  ```
2. ブラウザで `http://localhost:9009` から確認する

3. フォルダ`<プロジェクト>/components`でコンポーネントを追加してください

4. `<プロジェクト>/stories/*.stories.js`でコンポーネントのストーリーを作る


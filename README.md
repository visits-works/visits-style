<h1 align="center">visits-style</h1>

![release](https://badgen.net/npm/v/visits-style)
![license](https://badgen.net/npm/license/visits-style)
![bundle size](https://badgen.net/bundlephobia/minzip/visits-style)


VISITS Technologiesのreactデザインコンポーネント

## Getting Started

```
npm install --save react react-dom styled-components visits-style
```

[yarn](https://yarnpkg.com/ja/)でもできます

```
yarn add react react-dom styled-components visits-style
```

## Dependencies
- React, React-dom(^18.0.0)
- styled-components(^5.0.0)

## Example

```ts
// index.tsx
import * as React from 'react';
import * as reactDOM from 'react-DOM';
import { ThemeProvider } from 'styled-components';
import { Button, defaultTheme } from 'visits-style';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button>Hello World!</Button>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')!;
const root = reactDOM.createRoot(rootElement);
root.render(<App />);
```

## Docs

- [ドキュメント](https://visits-works.github.io/visits-style/storybook)

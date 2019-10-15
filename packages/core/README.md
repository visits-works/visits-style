# visits-style
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
- React, React-dom(^16.8.6)
- styled-components(^4.2.0)

## Example

```javascript
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

reactDOM.render(App, document.getElementById('root'));
```

## Docs

- [ドキュメント](https://visits-works.github.io/visits-style/)
- [storybook](https://visits-works.github.io/visits-style/storybook)

<h1 align="center">visits-style</h1>

![release](https://badgen.net/npm/v/@visits/style)
![license](https://badgen.net/npm/license/@visits/style)
![bundle size](https://badgen.net/bundlephobia/minzip/@visits/style)


VISITS Technologiesのreactデザインコンポーネント

## Dependencies
- React, React-dom(>=18)
- tailwindcss(>=4)

## Install

```
npm install --save react react-dom @visits/style
npm install --save-dev tailwindcss
```

[bun](https://bun.sh)でもできます

```
bun add react react-dom @visits/style
bun add -D tailwindcss
```

## Getting Started

```css
@import "tailwindcss"
@import "@visits/style/lib.css"

/** カスタムグロバールcss定義 */
```
```tsx
export default function TestComponent() {
  return <div className="bg-primary" />;
}
```

## Docs

- [ドキュメント](https://visits-works.github.io/visits-style)

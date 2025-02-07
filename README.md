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

## カスタム色の定義
```
// primary色
--color-primary: #37B151;
// primaryを薄くした色（hoverなどに使う想定）
--color-primary-fore: #76d58b;
// info色
--color-info: #209CEE;
--color-info-fore: #59b5f3;
// ワーニングの色
--color-warn: #F2B541;
--color-warn-fore: #f7d088;
// エラー系の色
--color-danger: #ee1114;
--color-danger-fore: #F3575A;
// モーダルなどの背景の色（alphaまで含めています）
--color-backdrop: #00000099;

/* utility colors */
// デフォルト背景色
--color-background: #FFFFFF;
// 背景色のもとに少し濃くした色（hoverなどに使う）
--color-accent: #F4F4F5;
// borderのデフォルト色
--color-input: #E4E4E7;
// borderのデフォルト色を薄くした色
--color-input-fore: #BBBBC3;
// focus時の色
--color-ring: #E4E4E7;

/* text */
// デフォルトテキスト色
--color-text: #4A4A4A;
// デフォルトテキスト色の逆転した色
--color-inverted: #FAFAFA;
// 無効、placeholder時に使うテキスト色
--color-muted: #808080;
```

## Docs

- [ドキュメント](https://visits-works.github.io/visits-style)

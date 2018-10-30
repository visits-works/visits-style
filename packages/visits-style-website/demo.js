const parser = require('react-docgen-typescript');
const path = require('path');

const parseConfig = {
  propFilter: {
    skipPropsWithoutDoc: true,
  },
  componentNameResolver: (exp, source) => {
    if (exp.getName() === 'StyledComponentClass') {
      const res = parser.getDefaultExportForFile(source);
      return res;
    }
  },
};

const parse = parser.withCustomConfig(path.resolve(__dirname, '../visits-style/tsconfig.json'), parseConfig).parse;
const url = path.resolve(__dirname, '../visits-style/src/components/AppBar/index.tsx');

function parsePropsItem({ name, description, required, type, defaultValue }) {
  if (name.indexOf('aria-') > -1) return;
  const res = { name, description, required, type: type.name };
  res.defaultValue = defaultValue ? defaultValue.value : defaultValue;
  return res;
}

function parseMeta(meta) {
  let res = [];
  if (meta && meta.length > 0) {
    res = meta.map((item) => {
      const props = Object.keys(item.props).map(keys => parsePropsItem(item.props[keys])).filter(a => a);
      return { name: item.displayName, props };
    });
  }
  return res;
}

const propsParsed = parseMeta(parse(url));
console.log(propsParsed[0].props);

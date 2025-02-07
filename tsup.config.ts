import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  treeshake: true,
  sourcemap: true,
  dts: true,
  clean: true,
  outExtension({ format }) {
    return { js: `.${format}.js` }
  },
  onSuccess: async () => {
    const css = readFileSync(resolve(__dirname, './src/lib.css'), 'utf8');
    writeFileSync(resolve(__dirname, './dist/lib.css'), css);

    // eslint-disable-next-line no-console
    if (!process.env.CI) return console.log('skip modify package.json');

    const pkg = readFileSync(resolve(__dirname, './package.json'), 'utf8');
    const publishPkg = JSON.parse(JSON.stringify(pkg));
    delete publishPkg.devDependencies;
    delete publishPkg.resolutions;
    delete publishPkg.scripts;

    writeFileSync(resolve(__dirname, './package.json'), JSON.stringify(publishPkg, null, 2));
  },
});

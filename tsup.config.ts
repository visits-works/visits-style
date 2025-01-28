import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: true,
  dts: true,
  clean: true,
  onSuccess: async () => {
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

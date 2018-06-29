#!/usr/bin/env node

/**
 * @file
 * The script generates index files for submodules.
 *
 * It's a part of the build process.
 */

const fs = require('fs')
const path = require('path')
const nodeGlob = require('glob')

const generatedAutomaticallyMessage = "// This file is generated automatically by `scripts/indices.js`. Please, don't change it."

const ignoredFiles = ['index.js', 'test.js', 'index.js.flow'];

const glob = (pattern) => new Promise((resolve, reject) => {
  const files = fs.readdirSync(pattern)
  const result = files
    .filter((file) => /^[^._]/.test(file) && !ignoredFiles.includes(file))
    .map((file) => ({
      name: file.replace('.js', ''),
      path: file.indexOf('.js') > -1 ? `./${file}` : `./${file}/index.js`,
    }));
  resolve(result);
});

// generateIndex('src/components' , 'src/components/index.js');
// generateIndex('src/utils' , 'src/utils/index.js');
// generateIndex('src/styles' , 'src/styles/index.js');

(async function () {
  const components = await generateIndex('src/components');
  const utils = await generateIndex('src/utils');
  const styles = await generateIndex('src/styles');

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat('module.exports = {')
    .concat(components)
    .concat('}')
    .join('\n');

  const styleLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat('module.exports = {')
    .concat(styles)
    .concat('}')
    .join('\n');

  fs.writeFileSync('src/index.js', `${indexLines}\n`);
  fs.writeFileSync('src/styles.js', `${styleLines}\n`);
  fs.writeFileSync('src/utils.js', `${styleLines}\n`);
})()

async function generateIndex (pattern) {
  const files = await glob(pattern);
  const propertyRequireLines = files
    .map((fn) => `  ${fn.name}: require('${fn.path}')`);

  const indexLines = propertyRequireLines.join(',\n');

  return `${indexLines}\n`;
}

function generateESMIndex (files) {
  const fileLines = files
    .map(fn => `export {default as ${fn.name}} from '${fn.path.replace(/\.js$/, '')}/index.js'`)

  const indexLines = [generatedAutomaticallyMessage]
    .concat('')
    .concat(fileLines)
    .join('\n')

  return `${indexLines}\n`
}

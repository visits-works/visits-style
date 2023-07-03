const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const publishPkg = JSON.parse(JSON.stringify(pkg));
delete publishPkg.devDependencies;
delete publishPkg.resolutions;
delete publishPkg.scripts;

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(publishPkg, null, 2));

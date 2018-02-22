'use strict';
const path = require('path');
const fs = require('fs');
const recursive = require('recursive-readdir');
const xregexp = require('xregexp');

module.exports.parseFile = function (root, filePath) {
  const contents = fs.readFileSync(filePath, 'utf-8');
  const regex = /require\(["']([^"']*)["']\)/

  const modifiedContents = xregexp.replace(
    contents,
    regex,
    (wholeRequire, modulePath) => {
      // wholeRequire = require("config/index");
      // modulePath = config/index
      try {
        // Skip node_modules such as require('convict');
        require(modulePath);
        return wholeRequire;
      } catch (err) {
        const absModulePath = path.join(root, modulePath);
        let newRequirePath = path.relative(`${filePath}/..`, absModulePath);
        if (newRequirePath[0] !== '.') newRequirePath = './' + newRequirePath;
        return `require("${newRequirePath}")`;
      }
    },
    'all'
  );

  return modifiedContents;
}

// module.exports = (root) => {
//   recursive(root, ['!*.js'], (error, files) => {
//     files.forEach(file => {
//       const replacedContents = parseFile(file);
//     });
//   });
// };
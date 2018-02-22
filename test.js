const fs = require('fs');
const path = require('path');
const { parseFile } = require('./index');

test('parseFile', t => {
  const root = path.join(__dirname, 'fixture', 'dist');
  const filePath = path.join(__dirname, 'fixture', 'dist', 'config', 'express.js');
  const replacedContents = parseFile(root, filePath);

  const expectationFile = fs.readFileSync(path.join(__dirname, 'expectation.js'), 'utf-8');
  expect(replacedContents).toEqual(expectationFile);
});

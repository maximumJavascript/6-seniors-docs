const glob = require('glob');
const fs = require('fs');
const { kebabCase } = require('lodash');

const pathToDocs = 'src/docs';
const pathOutput = 'src/generated/generated.js';
const globNestedMdFiles = '/**/*.md';

const files = glob(pathToDocs + globNestedMdFiles, { sync: true });

const jsonData = files.map((fileName, idx) => {
  const cuttedPath = fileName.replace('src/docs/', '').replace('.md', '');
  const route = kebabCase(cuttedPath.replace(/[./]/g, '-'));

  return {
    filePath: cuttedPath,
    appRoute: route,
    idx,
    fileContent: fs.readFileSync(fileName).toString(),
  };
});

const contentToWrite = `export default ${JSON.stringify(
  jsonData,
  undefined,
  4
)};`;

fs.writeFileSync(pathOutput, contentToWrite);

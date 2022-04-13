const glob = require('glob');
const fs = require('fs');
const { kebabCase, camelCase } = require('lodash');

const pathToDocs = 'src/docs';
const pathOutput = 'src/generated/mdRoutesData.js';
const globNestedMdFiles = '/**/*.md';

const constants = {
  FILE_URL: '$FILE_URL$',
};

const files = glob(pathToDocs + globNestedMdFiles, { sync: true });

function getImportValue(variableName, pathName) {
  return `import ${variableName} from "${pathName}"\n`;
}

let importsText = '';

function getTitle(content) {
  let res = '';

  for (let i = 0; ; i++) {
    if (content[i] === '\n') break;
    if (content[i] !== '#') res += content[i];
  }

  return res.trim();
}

const jsonStrData = files
  .map((fileName, idx) => {
    const pathCutted = fileName.replace('src/docs/', '').replace('.md', '');
    const pathCuttedNoSlash = pathCutted.replace(/[/]/g, '-');

    // eslint-disable-next-line global-require,import/no-dynamic-require
    const fileContent = fs.readFileSync(fileName).toString();
    const fileTitle = getTitle(fileContent);

    const pathRouteValue = kebabCase(pathCuttedNoSlash);
    const variableName = camelCase(pathCuttedNoSlash);
    const pathImportValue = `../docs/${pathCutted}.md`;

    importsText += getImportValue(variableName, pathImportValue);

    const basicData = {
      appRoute: pathRouteValue,
      fileSlashPath: pathCutted,
      fileUrl: constants.FILE_URL,
      fileTitle,
      id: idx + 1,
    };

    return JSON.stringify(basicData).replace(
      `"${constants.FILE_URL}"`,
      variableName
    );
  })
  .join(',');

const jsonReadyData = `export default [${jsonStrData}];`;
const contentToWrite = `${importsText}${jsonReadyData}`;

fs.writeFileSync(pathOutput, contentToWrite);

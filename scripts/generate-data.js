const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');

const {
  DATA_DIRECTORY,
  GENERATED_FILE_DIRECTORY,
  generatedFilePath
} = require('./script-constants.js');

var collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const trimObject = (obj) => {
  if (!Array.isArray(obj) && typeof obj != 'object') return obj;
  return Object.keys(obj).reduce(function(acc, key) {
    acc[key.trim()] = typeof obj[key] == 'string' ? obj[key].trim() : trimObject(obj[key]);
    return acc;
  }, Array.isArray(obj) ? [] : {});
};

console.log(`Reading models directory ${DATA_DIRECTORY}`);

const modelFileNames = fs
  .readdirSync(DATA_DIRECTORY)
  .filter((file) => path.extname(file).toLowerCase() === '.yml')
  .sort(collator.compare);

console.log(`Found ${modelFileNames.length} files.`);

const modelFiles = modelFileNames.map((file) => {
  const model = YAML.load(`${DATA_DIRECTORY}/${file}`);
  return trimObject(model);
});

const jsonFile = JSON.stringify(modelFiles);

if (!fs.existsSync(GENERATED_FILE_DIRECTORY)) {
  fs.mkdirSync(GENERATED_FILE_DIRECTORY);
}

const filePath = generatedFilePath()
fs.writeFileSync(filePath, jsonFile);

console.log(`Generated file at ${filePath} for ${modelFiles.length} models.`);

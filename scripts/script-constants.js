const DATA_DIRECTORY = './data';
const GENERATED_FILE_DIRECTORY = './generated';
const GENERATED_FILE_NAME = 'data.json'

const S3_BUCKET = 'mentalmodelsapp';
const S3_PATH = 'public/data.json';

const generatedFilePath = () => {
  return `${GENERATED_FILE_DIRECTORY}/${GENERATED_FILE_NAME}`;
};

module.exports = {
  DATA_DIRECTORY,
  GENERATED_FILE_DIRECTORY,
  GENERATED_FILE_NAME,
  S3_BUCKET,
  S3_PATH,
  generatedFilePath
}
const fs = require('fs');
const AWS = require('aws-sdk');

const { generatedFilePath, S3_BUCKET, S3_PATH } = require('./script-constants.js');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const filePath = generatedFilePath();
console.log(`Reading file at ${filePath}`);
const data = fs.readFileSync(filePath);
console.log(`Uploading file to s3://${S3_BUCKET}/${S3_PATH}`);

const params = {
  Bucket: S3_BUCKET,
  Key: S3_PATH,
  Body: data,
  CacheControl: 'max-age=300',
  ContentType: 'application/json',
  ACL: 'public-read'
};

s3.upload(params, function(s3Err, data) {
  if (s3Err) throw s3Err;
  console.log(`File uploaded successfully at ${data.Location}`);
});

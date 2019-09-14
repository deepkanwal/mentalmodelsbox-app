import axios from 'axios';
import localData from '../generated/data.json';

// Toggle between the production S3 file and a local file. 
const USE_PROD_DATA = true;

// Use S3 file for production data. File is cached on browsers.
const productionData = axios.create({
  baseURL: 'https://s3-us-west-1.amazonaws.com/mentalmodelsapp/public/data.json',
  timeout: 2000,
  headers: { 'Content-Type': 'application/json' }
});

const loadFile = () => {
  if (USE_PROD_DATA) {
    return productionData.get().then((response) => response.data);
  } else {
    return new Promise((resolve) => resolve(localData));
  }
};

const getNumberOfWeek = () => {
  const today = new Date();
  const firstDayOfYear = new Date(today.getUTCFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7);
};

// API

const getAll = () => {
  return loadFile();
};

const get = (id) => {
  return loadFile().then((models) => models.filter((model) => model.id === id)[0]);
};

const weekly = () => {
  return loadFile().then((models) => {
    const modelIndex = (getNumberOfWeek() + 8) % models.length;
    const model = models[modelIndex];
    return model;
  });
};

export default {
  get,
  getAll,
  weekly
};

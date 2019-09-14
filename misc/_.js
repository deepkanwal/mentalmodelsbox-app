const flatten = (array) => {
  return array.reduce((a, b) => a.concat(b), []);
};

const toSet = (array) => {
  return [ ...new Set(array) ];
};

export { flatten, toSet };

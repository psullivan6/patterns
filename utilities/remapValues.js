// Take an object and transform the values while maintaining the same keys
const remapValues = (object, mapFunc) => {
  const remapped = Object.keys(object)
    .map((key, index) => [key, mapFunc(object[key], index)])
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

  return remapped;
};

export default remapValues;

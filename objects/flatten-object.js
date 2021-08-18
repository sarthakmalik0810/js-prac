function flattenObj(obj, res = {}) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      res = flattenObj(obj[key], res);
    } else {
      res[key] = obj[key];
    }
  });
  return res;
}

let person = {
  name: 'Sarthak',
  address: {
    city: 'Delhi',
    pin: '110078',
  },
};

console.log(flattenObj(person));

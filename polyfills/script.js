//Array polyfills

/** Array.prototype.map */

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback /**thisArg */) {
    let T;
    let array = this;
    let newArray = [];
    if (this === null) {
      throw new TypeError('this is null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }

    if (arguments.length > 1) {
      T = arguments[1] || null;
    }

    for (let i = 0; i < array.length; i++) {
      let newItem = callback.call(T, array[i], i, array);
      newArray.push(newItem);
    }

    return newArray;
  };
}

const mapArr = [10, 20, 30, 40];

const ansArr = mapArr.myMap(function (item, index) {
  console.log(index);
  return item + 1;
});

console.log(ansArr);

/** Array.prototype.filter */

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback /**thisArg */) {
    let T;
    let newArray = [];
    if (this === null) {
      throw new TypeError('this is null or undefined');
    }
    let array = this;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }
    if (arguments.length > 0) {
      T = arguments[1] || null;
    }

    for (let i = 0; i < array.length; i++) {
      let bool = callback.call(T, array[i], i, array);
      if (bool) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
}

const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ansFilterArray = filterArray.myFilter(function (item, index, array) {
  console.log(index);
  return item % 2 === 0;
});

console.log(ansFilterArray);

/** Array.prototype.forEach */

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback, thisArg) {
    let T;
    if (this === null) {
      throw new TypeError('this is null or undefined');
    }
    let array = this;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }
    if (arguments.length > 0) {
      T = arguments[1] || null;
    }

    for (let i = 0; i < array.length; i++) {
      callback.call(T, array[i], i, array);
    }
  };
}

const forEachArray = [1, 2, 3, 4, 5, 6, 7];

const ansForeach = [];

forEachArray.myForEach((ele, idx) => {
  ansForeach[idx] = ele;
});

console.log(ansForeach);

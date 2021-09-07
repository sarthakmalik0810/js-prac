// //Array polyfills

// /** Array.prototype.map */

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

// const mapArr = [10, 20, 30, 40];

// const ansArr = mapArr.myMap(function (item, index) {
//   console.log(index);
//   return item + 1;
// });

// console.log(ansArr);

// // /** Array.prototype.filter */

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

// const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ansFilterArray = filterArray.myFilter(function (item, index, array) {
//   console.log(index);
//   return item % 2 === 0;
// });

// console.log(ansFilterArray);

// /** Array.prototype.forEach */

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

// const forEachArray = [1, 2, 3, 4, 5, 6, 7];

// const ansForeach = [];

// forEachArray.myForEach((ele, idx) => {
//   ansForeach[idx] = ele;
// });

// console.log(ansForeach);

// /** Array.prototype.reduce */

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator;
    if (this === null) {
      throw new TypeError('this is null or undefined');
    }
    let array = this;
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }
    var i;
    if (arguments.length > 1) {
      accumulator = arguments[1];
      i = 0;
    } else {
      accumulator = array[0];
      i = 1;
    }
    for (; i < array.length; i++) {
      accumulator = callback.call(null, accumulator, array[i], i, array);
    }
    return accumulator;
  };
}

// const logicAlbums = [
//   'Bobby Tarantino',
//   'The Incredible True Story',
//   'Supermarket',
//   'Under Pressure',
// ];

// const combineAlbums = logicAlbums.myReduce(function (a, b) {
//   return a + ' , ' + b;
// }, 'Young Sinatra'); // Initial Value is Young Sinatra

// console.log(combineAlbums);

// /** Array.prototype.flat */

if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (depth = 1) {
    const result = [];
    const arr = this;
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        result.push(...item.myFlat(depth - 1));
      } else {
        result.push(item);
      }
    }
    return result;
  };
}

if (!Array.prototype.myFlatWithReduce) {
  Array.prototype.myFlatWithReduce = function (depth = 1) {
    if (this === null) {
      throw new TypeError('this is null or undefined');
    }
    if (typeof depth !== 'number') {
      throw new TypeError(depth + 'is not a number');
    }
    depth = parseInt(depth); // convert decimals to whole number
    const arr = this;
    return arr.reduce((acc, ele) => {
      if (Array.isArray(ele) && depth > 0) {
        acc.push(...ele.myFlatWithReduce(depth - 1));
      } else acc.push(ele);
      return acc;
    }, []);
  };
}

// const unflat = [1, [2], [3, [4, 5, 6]]];

// const ans = unflat.myFlatWithReduce(1);

// console.log(ans);

// //bind

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
      throw new TypeError('cannot bind to ' + this + 'as its not a function');
    }
    context.fn = this;
    return function () {
      context.fn(...args);
    };
  };
}

if (!Function.prototype.myApply) {
  Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this !== ' function') {
      throw new TypeError('cannot apply to ' + this + 'as its not a function');
    }
    if (!Array.isArray(args)) {
      throw new TypeError('CreateListFromArrayLike called on non-object');
    }
    context.fn = this;
    context.fn(...args);
  };
}

if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (context = {}, ...arg) {
    if (typeof this !== ' function') {
      throw new TypeError('cannot call ' + this + 'as its not a function');
    }
    context.fn = this;
    context.fn(...args);
  };
}

// let name = {
//   first: 'sarthak',
//   last: 'malik',
// };

// let printName = function (first, last) {
//   console.log(this.first + ' ' + first + ' ' + this.last + ' ' + last);
// };

// let myBoundCall = printName.apply(name, ['abc', 'def']);

function createSetIntervalPolyfill() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
    if (typeof callbackFn !== 'function') {
      throw new TypeError('callback should be a fn');
    }

    let id = intervalId + 1;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFn(args);
        //terminate

        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }

    repeat();

    return id;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const {
  setIntervalPolyfill, // fuction
  clearIntervalPolyfill
} = createSetIntervalPolyfill();


let counter =0;
let intervalId;


function greeting(name) {
  counter = counter + 1;
  console.log(`Hello ${name}`);
  if(counter >=3){
    clearIntervalPolyfill(intervalId);
  }
}

function printNum(from, to)  {
  let current = from;
  let timerId = setInterval(() => {
    console.log(current);
    if(current == to) {
      clearInterval(timerId);
    }
    current++;
  })
}

printNum(5,10);

intervalId = setIntervalPolyfill(greeting,1000,'abba');
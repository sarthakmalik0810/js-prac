
function math(num) {
  
  this.value = function() {
    return num;
  }

  this.add = function(addNum) {
    let res = num + addNum
    return math(res);
  }

  this.sub = function(subNum) {
    let res = num - subNum;
    return math(res);
  }

  return this;
}

let a = math(6).add(4).sub(2).value()


// using toString

function getSum (...args) {
  let total = 0
  function sum (...args) {
    for (const item of args) {
      total += item
    }
    return sum
  }

  sum.toString = function () {
    return total
  }

  return sum(...args)
}

console.log(0 + getSum(1, 2)(4, 3)(4)(5)())

// using valueOf

function getSumV2 (...args) {
  let total = 0
  function sum (...args) {
    for (const item of args) {
      total += item
    }
    return sum
  }

  sum.valueOf = function () {
    return total
  }

  return sum(...args)
}

console.log(0 + getSumV2(1, 2)(4, 3)(4)(5))

// using extra ()

function getSumV3 (...args) {
  let total = 0
  function sum (...args) {
    for (const item of args) {
      total += item
    }
    if (args.length === 0) {
      return total
    }
    return sum
  }

  return sum(...args)
}

console.log(getSumV3(1, 2)(4, 3)(4)(5)())



// let sum = a => b => b ? sum(a+b) : a;

// let problem = sum(1)(2)(3)(14)();
// console.log(problem);


// addition(6,1,2,3,4)(1)(23, 5,6, 7)....(1).end(); // create addition method

function getSumV4 (...args) {
  let total = 0
  function sum (...args) {
    for (const item of args) {
      total += item
    }
    return sum
  }

  sum.end = function() {
      return total;
  }
 
  sum.valueOf = function () {
    return total
  }

  return  sum(...args)
}

console.log(0 + getSumV4(1, 2)(4, 3)(4)(5).end());


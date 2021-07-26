
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


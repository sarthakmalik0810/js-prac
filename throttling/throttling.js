const expensive = () => {
  console.log('expensive function');
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, limit);
  };
};

const betterExpensiveFunction = throttle(expensive, 3000);

window.addEventListener('resize', betterExpensiveFunction);

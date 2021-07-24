const searchBox = document.getElementById('search');

const debounce = (callback, delay) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      callback.apply(context, args);
    }, delay);
  };
};

const search = (e, num) => {
  console.log(e.target.value)
  console.log(this);
  console.log(num)
}

const searchEvent = debounce(search, 300);

searchBox.addEventListener('keyup', (event) => {
  searchEvent(event, 1);
});



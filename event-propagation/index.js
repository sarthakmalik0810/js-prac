// |                /\
// |                |
// |                |
// |                |
// \/               |
// capturing      Bubbling

//---------------------------bubbling---------------------
// const grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click', () => {
//   console.log('grandparent clicked');
// });

// const parent = document.getElementById('parent');
// parent.addEventListener('click', () => {
//   console.log('parent clicked');
// });

// const child = document.getElementById('child');
// child.addEventListener('click', (e) => {
//   console.log('child clicked');
// });

//----------------------capturing------------------------

// const grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click', (e) => {
//   console.log('grandparent clicked');
// }, true);

// const parent = document.getElementById('parent');
// parent.addEventListener('click', () => {
//   console.log('parent clicked');
// }, true);

// const child = document.getElementById('child');
// child.addEventListener('click', (e) => {
//   console.log('child clicked');
//   e.stopPropagation()
// }, true);

// const grandParentButton = document.querySelector('#grandparent');

// grandParentButton.addEventListener('click', () => {
//     console.log("grandParent hit!")
// },true); // capturing

// const parentButton = document.querySelector('#parent');

// parentButton.addEventListener('click', () => {
//     console.log("parent hit!")
// },false); // bubbling

// const childButton = document.querySelector('#child');

// childButton.addEventListener('click', () => {
//     console.log("child hit!")
// },true); // capturing

//------------------------event delegation-----------------------------

// const grandparent = document.getElementById('grandparent');
// grandparent.addEventListener('click', (e) => {
//   let target = e.target;
//   if(target.id === "grandparent") {
//     console.log('grandparent clicked')
//   } else if (target.id === "parent") {
//     console.log('parent clicked')
//   } else {
//     console.log('child cliked')
//   }
// });

let vehicle = {
  get wheels() {
    return this._wheels;
  },
  set wheels(val) {
    this._wheels = val;
  },
};

vehicle.wheels = 4;
vehicle.wheels;

let vehicle2 = {};

Object.defineProperty(vehicle2, 'wheels', {
  enumerable: true,
  get: function () {
    return this._wheels;
  },
  set: function (val) {
    this._wheels = val;
  },
});

vehicle2.wheels = 3;
vehicle2.wheels;

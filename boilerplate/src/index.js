class C {
  constructor() {
    this.id = 1;
    this.obj = {
      id: 1,
      a: 1,
      b: 1,
      start: () => {
        console.log(this.id);
      },
    };
  }
  idx = 5;

  fun = () => {
    console.log('fun')
  }
}

const sampleObj = new C();
console.log(sampleObj)



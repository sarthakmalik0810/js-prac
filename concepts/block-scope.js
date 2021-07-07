// block - curly braces, used to put multiple lines
// of code into one statement, for eg in if

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }


let b = 100; // Script: b: undefined 
{
  var a = 10; //Global a: undefined
  let b = 20; //Block b: undefined
  const c = 30; //Block c: undefined
  console.log(b);
}

{
  const b = 30;
}
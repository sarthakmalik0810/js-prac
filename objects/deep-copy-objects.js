/**
 *
 * @param {*} obj
 * @returns copy of object
 * would fail for circular references
 */
// function deepCopy(obj) {
//   // check if obj is array or not
//   const newObj = Array.isArray(obj) ? [] : {};

//   //Object.entries for {"name": "Sarthak", "age: 23"} =>
//   // ["name", "Sarthak"], ["age", 23]

//   for (const [key, value] of Object.entries(obj)) {
//     //if type of value is obj/array recursive call deepcopy and pass value
//     newObj[key] = typeof value === 'object' ? deepCopy(value) : value;
//   }
//   return newObj;
// }

function deepCopy(obj) {
  /**
   * Functions that call themselves recursively need
   * a way of guarding against circular data structures
   * by tracking which objects have already been processed.
   * WeakSets are ideal for this purpose.
   */
  const seen = new WeakSet();

  function logic(obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    if (!seen.has(obj)) {
      seen.add(obj);
      for (const [key, value] of Object.entries(obj)) {
        newObj[key] = typeof value === 'object' ? logic(value) : value;
      }
    } else {
      return seen.get(obj);
    }
    return newObj;
  }
  return logic(obj);
}

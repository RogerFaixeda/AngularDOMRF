const mapToCubics = array => array.map(element => element ** 3);

let array = [1, 3, 6];
let arrayCubics = mapToCubics(array);

console.log("Array original:", array);
console.log("Array amb valors cúbics:", arrayCubics);
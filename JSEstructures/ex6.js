let filtre = array => array.filter(word => (word.match(/a/g)).length > 1);

let array = ["hola", "manolo", "patata", "mama"]
let arraydemesdunaA = filtre (array);

console.log("Array original:", array);
console.log("Nova array amb més d'una lletra 'a':", arraydemesdunaA);

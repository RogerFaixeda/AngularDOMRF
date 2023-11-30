console.log("Nom: Roger")
console.log("Cognoms: Faixeda Díez")
console.log("Any de naixement: 2003")

var num = 42;
var text = "Hola, mundo!";
var esCert = true;

console.log("Número: " + num);
console.log("Text: " + text);
console.log("Boolean: " + esCert);

//console.log(variable1)
//var variable1 = '123'

//console.log(variable2)
//let variable2 = '123'

var variable3 = 123
console.log("La variable és " + variable3)
variable3 = 456
console.log("El nou valor de la variable és " + variable3)

// const variable4 = 123
// console.log("La variable és " + variable4)
// variable4 = 456
// console.log("El nou valor de la variable és " + variable4)

const numero = 1234
const bigInt = BigInt("5678")

var suma = numero + Number(bigInt)
var resta = numero - Number(bigInt)
var divisio = numero / Number(bigInt)
var multiplicacio = numero * Number(bigInt)

console.log("Suma: " + suma.toFixed(1))
console.log("Resta: " + resta.toFixed(1))
console.log("Divisio: " + divisio.toFixed(1))
console.log("multiplicacio: " + multiplicacio.toFixed(1))

//Exercici 7
var catetA = 4;
var catetB = 4;

var hipotenusa = Math.sqrt(catetA ** 2 + catetB ** 2);

console.log("La longitud de la hipotenusa és: " + hipotenusa);

//Exercici 8
var enter = 8;
var cadena = "Hola";

var resultat = enter / cadena;
console.log(resultat);
// Ens diu que el resultat és NaN que significa not a number

//Exercici 9
// String amb el nom i cognoms
var nomICognoms = "Roger Faixeda Díez";

// Divideix el String en paraules utilitzant l'espai com a separador
var paraules = nomICognoms.split(" ");

// Declara que el primer cognom és la segona paraula
var primerCognom = paraules[1];

// Compta les lletres que te el primer cognom
var longitud = primerCognom.length;

// Mostra el primer cognom i la seva longitud per pantalla
console.log("El teu primer cognom és: " + primerCognom + " I té " + longitud + " caràcters.");

//Exercici 10
var nomCognoms = "Roger Faixeda Diez";

// Esborra la lletra de la posició 6
var resultat = nomCognoms.slice(0, 6) + nomCognoms.slice(7);

console.log("Nom i cognoms sense la lletra 6: " + resultat);

//Exercici 11
var undefinedV = undefined;
var nullV = null;

var suma = undefinedV + nullV;

console.log(suma);
// Donara NaN, not a number

//Exercici 12
//Implicita
var boolea = true;
var cadena = "El valor del booleà és: " + boolea;
console.log(cadena);
//Explicita
var boolea = true;
var cadena = String(boolea);
console.log(cadena);

//Exercici 13
//Implicita
var cadenaTrue = "true";
var cadenaFalse = "false";
var cadena = "";

console.log(Boolean(cadenaTrue)); // true
console.log(Boolean(cadenaFalse)); // true
console.log(Boolean(cadena)); // false
//Explicita
var cadenaTrue = "true";
var cadenaFalse = "false";
var cadena = "";

var booleanTrue = Boolean(cadenaTrue);
var booleanFalse = Boolean(cadenaFalse);
var boolean = Boolean(cadena);

console.log(booleanTrue); // true
console.log(booleanFalse); // true
console.log(boolean); // false

//Exercici 14
//Implicita
var booleaTrue = true;
var booleaFalse = false;

console.log(booleaTrue + 5);
console.log(booleaFalse + 10);
//Explicita
var booleaTrue = true;
var booleaFalse = false;

var numeroTrue = +booleaTrue;
var numeroFalse = +booleaFalse;

console.log(numeroTrue);
console.log(numeroFalse);




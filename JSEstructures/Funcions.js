//Exercici 1
function nomicognom(nom, cognoms) {
    console.log("(1) El nom és: " + nom);
    console.log("(1) Els cognoms són: " + cognoms);
}

let nom = "Roger";
let cognoms = "Faixeda Diez";

nomicognom(nom, cognoms);

//Exercici 2

function funcio2(parametre){
    console.log("(2) El valor del parametre és " + typeof parametre)
}

parametre = 123

funcio2(parametre)

//Exercici 3
function dataActual() {
    const data = new Date();
    const opcions = { year: 'numeric', month: 'long', day: 'numeric' };
    const datanova  = data.toLocaleDateString('es-ES', opcions);

    console.log("(3) La data actual és: " + datanova);
}

dataActual();

//Exercici 4
function variable() {
    const valor1 = 10
}
//console.log("El valor és: " + valor1)

//Exercici5
function funcioString(cadena){
    const vocals = /[aeiouAEIOU]/g
    const comptadorVocals = cadena.match(vocals)
    return comptadorVocals.length
}
const cadena = "Hola"
const numVocals = funcioString(cadena)
console.log("(5) La cadena " + cadena + " te " + numVocals + " vocals.");

//Exercici 6
function fun6(num1, num2, num3 = 0) {
    return num1 + num2 + num3
}
let resultat = fun6(1, 2, 3)
console.log("(6) La suma dels valors és: " + resultat)

//Exericci7
function fun7(){
    dataActual()
    return resultat
}
console.log("(7) El resultat de la funcio 6 és: " + fun7())

//Exercici 8
function fun8(a, b){
    let boolean
    boolean = a === 30 || b === 30 || (a + b === 30)
    return boolean
}
fun8(a = 15, b = 15)
console.log("(8) És: " + fun8(a, b))

//Exercici 9

let fun9 = function (c = 15, d = 15) {
    let boolean
    boolean = c === 30 || d === 30 || c+d === 30
    return boolean
}
console.log("(9) És: " + fun9())

//Exercici 10
const fun10 = (num1, num2) =>{
    return num1 === num2 && typeof num1 === typeof num2;
}
const resultat1 = fun10(5, 5); // true, ambos valores son números

console.log("(10) Tenen el mateix valor: " + resultat1);

//Exercici 11
const fun11 = (num) => {

    const arrel = Math.sqrt(num);
    const decimals = arrel.toFixed(2);
    return parseFloat(decimals);
}
resultat = fun11(num = 30);
console.log("(11) L'arrel cuadrada de " + num + " amb dos decimals és: " + resultat);

//Exercici 12
const fun12 = (cadena) => {
    return cadena.toLowerCase();
}
resultat = fun12("Introdueix una frase")
console.log("(12) La frase és: " + resultat)

//Exercici 13
const fun13 = (valor1, valor2) =>{
    if (valor1 == null) {
        return valor2
    } else {
        return valor1
    }
}
resultat = fun13(valor1 = "hola", valor2 = null)
console.log("(13) El valor no null és: " + resultat)

//Exercici14

const frase = "Hola com estàs";
const paraula = "com";

const fun14a = (frase, paraula) => frase.length - frase.indexOf(paraula)
console.log("(14 a) " + fun14a(frase,paraula));

const fun14b = (frase, paraula) => frase.slice(fun14a(frase, paraula), frase.length)
console.log("(14 b) " + fun14b(frase, paraula))

//Exercici 15
x  = 2
let fun15 = (x) => x+x+x
console.log("(15) Suma 3 vegades el valor x: " + fun15(x))

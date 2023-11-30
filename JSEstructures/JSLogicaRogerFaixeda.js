//Exercici 1
let numero = 6
if (numero % 3 === 0) {
    console.log("Es multiple de 3")
} else if ( numero % 7 === 0){
    console.log("És multiple de 7")
} else{
    console.log("No es multiple de cap")
}
//Exercici2
let x = 42
let y = 2
 rangX = x <= 50 && x >= 10 ? rangX = "Està dins el rang" : "No està dins"
 rangY = y <= 50 && y >= 10 ? rangY = "Està dins el rang" : "No està dins"
console.log("X: " + rangX,"Y: " + rangY)
//Exercici3
x = 8.53
if ( x >= 0 && x <= 4.99){
    console.log("Suspes")
} else if ( x >= 5 && x <= 5.99){
    console.log("Suficient")
} else if ( x >= 6 && x <= 6.99){
    console.log("Bé")
} else if ( x >= 7 && x <= 8.99){
    console.log("Notable")
} else if ( x >= 9 && x <= 10) {
    console.log("Excelent")
} else {
    console.error("Error")
}
//Exercici4
let num = 21
switch (true) {
    case num % 3 === 0 && num % 7 === 0:
        console.log("És múltiple de 3 i de 7.");
        break;
    case num % 3 === 0:
        console.log("És múltiple de 3.");
        break;
    case num % 7 === 0:
        console.log("És múltiple de 7.");
        break;
    default:
        console.log("No és múltiple de 3 ni de 7.");
}
//Exercici5
x = 15;
let suma = 0;
let n = 0;

while (suma + n + 1 <= x) {
    n++;
    suma += n;
}

console.log("Per x = " + x + ", n és igual a " + n )
//Exercici6
x = "H248navoni932";
suma = 0;

for (let i = 0; i < x.length; i++) {
    let caracter = x.charAt(i);
    let valor = parseInt(caracter);
    if (!isNaN(valor)){
        suma += valor
    }
}

console.log("La suma dels números en la cadena és: "+ suma);
//Exercici7
const numero1 = 7;
const numero2 = 3;
const numero3 = 10;

let major, mitja, menor;

if (numero1 >= numero2 && numero1 >= numero3) {
    major = numero1;
    if (numero2 >= numero3) {
        mitja = numero2;
        menor = numero3;
    } else {
        mitja = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    major = numero2;
    if (numero1 >= numero3) {
        mitja = numero1;
        menor = numero3;
    } else {
        mitja = numero3;
        menor = numero1;
    }
} else {
    major = numero3;
    if (numero1 >= numero2) {
        mitja = numero1;
        menor = numero2;
    } else {
        mitja = numero2;
        menor = numero1;
    }
}
console.log(`Números ordenats de major a menor: ${major}, ${mitja}, ${menor}`);
//Exercici8
x = 10
for (let i = 0; i < x; i++){
    if (i % 2 === 0){
        console.log(`${i} és un número parell`)
    } else {
        console.log(`${i} és un número senar`)
    }
}
//Exercici9
function fun9() {
    let linea = "* "
    for (let i = 0; i <= 4; i++) {
        console.log(linea)
        linea += '* ';
    }
}
fun9();
//Exercici 10
suma = 0;
numero = 0;

do {
    if (numero % 3 === 0 || numero % 5 === 0) {
        suma += numero;
    }
    numero++;
} while (numero <= 1000);

console.log(`La suma dels múltiples de 3 i 5 fins a 1000 és: ${suma}`);
//Exercici 11
function fun11() {
    let linea = "* "
    for (let i = 1; i <= 5; i++) {
        if ( i % 2 === 0 ){
            linea += '* ';
            continue
        }
        console.log(linea)
        linea += '* ';
    }
}
fun11()

//Exercici12
function fun12(enter) {
    //Pasa el valor a una cadena String
    const digits = enter.toString();
    let resultat = '';

    //Gira els valors per el seu adjeçent
    for (let i = 0; i < digits.length - 1; i += 2) {
        resultat += digits[i + 1] + digits[i];
    }
    //torna el string a numero
    return parseInt(resultat, 10);
}

num = 123456;
let num2 = fun12(num);
console.log(`Inicial: ${num}`);
console.log(`Amb dígits intercanviats: ${num2}`);
let array = []
for (let i = 0; i < 5 ; i++){
    array.push(Math.round(1000*Math.random()))
}
array.sort(function (a,b){return a - b})
console.log(array)
console.log(array[0])
console.log(array[4])

let array2 = [20,18,...array]
console.log(array2)

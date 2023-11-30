let array = [1,2,3,4,5,6]
let array2 = [4,5,6,7,8,9]

function ex3 () {
    let array3 = [...array, ...array2]
    return array3.filter((value, index) => array3.indexOf(value) === index)
}
console.log(ex3())

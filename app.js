// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissors = document.querySelector('#scissors')

function logName(Name = "Whats your name") {
    console.log(Name)
}

logName("Dev")

// function add(a=0, b=0){
//     const sum =a+b
//     return sum
// }
// const result = add(5,8)
// console.log(result)
const add = (a=0, b=0) =>{
    return a+b
}
console.log(add(12,13))
// console.log(rock)
// console.log(paper)
// console.log(scissors)

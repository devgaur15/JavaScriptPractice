console.log("merged class 1 ES6")

// normal array calling way
const arr = [1,2,3,4]
console.log(arr[2])

// ES6 destructuring manner
const [one,two,three] = arr
console.log(three)

function getScores() {
    return [90,100]
}

let [x,y,z] = getScores()
console.log(x)
console.log(y)
console.log(z)
// const is immutable, hence we use let/var


// normal object destructuring
const obj = {
    name: "Dev Gaur",
    email: "devgaur15",
    age: 20
}
console.log(obj.email)

// ES6 object destructuring
let {name,email,age, dum} = obj;
console.log(email)
let person = {
    firstname: "Dev",
    lastname: "Gaur",
    age1: 21,
    middlename: "DNA"
}
let {age1, firstname, lastname, middlename="" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);




























console.log("merged class 1 ES6")
// ES6 arrow functions
// function add(x, y) {
//     return x+y;
// }
// console.log(add(10, 20));

// let add = function(x,y) {
//     return x+y;
// }
// console.log(add(10,20))

// ES6 arrow function
let add = (x, y) => {
    return x + y;
  };
  console.log(add(10, 20));

  const counter = {
    count: 1,
    nikhil: function() {
        return ++(this.count);
    },
    // key: this
}
console.log(counter)
console.log(counter.nikhil());
console.log(counter.nikhil());
console.log(counter.nikhil());
console.log(counter)
  
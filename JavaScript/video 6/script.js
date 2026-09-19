console.log("Faulty calculator!");

let random = Math.random();
console.log(random);
let num1 = prompt("Enter the first number.");
let num2 = prompt("Enter the second number.");
let operation = prompt("Enter the operation.");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    // perform correct calculation
    // console.log("big");
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}
else {
    // perform wrong calculation
    // console.log("small");
    operation = obj[operation];
    alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}
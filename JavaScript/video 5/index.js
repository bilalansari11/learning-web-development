console.log ("This is tutorial 5");

// console.log("Hey samee you are nice!");
// console.log("Hey samee you are good.");
// console.log("Hey samee your tshirt is nice!");
// console.log("Hey samee your course is good too!");

// if i want to change name, i have to do manually for every line. To make it simple and reuse we have to create a function.

function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good.");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

// nice("Salman");
// nice("Usman");

function sum(a, b,) {
    console.log(a, b)
    console.log(a + b);
    return a + b;
}

result1 = sum(3, 5);
result2 = sum(8, 6);
result3 = sum(3, 11);

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);


const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(32);
func1(92);
func1(14);

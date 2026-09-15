console.log("This is String Tutorial");

let a = "Bilal";

console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length);

let real_name = "Salman";
let friend = "Bilal";

console.log("His name is " + real_name + " and his friends name is " + friend);

console.log(`His name is ${real_name} and his friends name is ${friend}`);

let b = "Samee";

console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(1, 4)); // it displays only selected & second number will be 4-1 = 3, so it will displays from 1 to 3 index
console.log(b.slice(1)); //  it displays from index 1 to last

console.log(b.replaceAll("Sa", "11"));

console.log(b.concat(a, "Ansari"));
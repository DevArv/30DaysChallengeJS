//Creations of Arrays using the class constructor Array

let developers = new Array("Nikolay", "Alex", "Sergey", "Dmitry");
console.log(developers);
//output: [ 'Nikolay', 'Alex', 'Sergey', 'Dmitry' ]

//Array.from()
let separatedLetters = Array.from('developers');
console.log(separatedLetters);
//output: [ 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', 's' ]

//Array.fill()
let stars = Array(5).fill('*');
console.log(stars);
//output: [ '*', '*', '*', '*', '*' ]

//Array.isArray()
console.log(Array.isArray(separatedLetters));
//output: true

//Create a new instance of Array
let daysLeft = [15, 30, 45];
let rigthDayLeft = new Array(...daysLeft);
console.log(rigthDayLeft);
//output: [ 15, 30, 45 ]
console.log(rigthDayLeft === daysLeft);
//output: false

//Use of methods incorporated with Arrays
let copiedDaysLeft = daysLeft.slice(0, 1);
console.log(copiedDaysLeft);
//output: [15]
console.log(copiedDaysLeft === daysLeft);
//output: false

//TODO: Finish Arrays Lesson
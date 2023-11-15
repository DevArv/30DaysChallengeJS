//Closures example 1

function secondsCounter() {
    let count = 0;
    return function increment() {
        count++;
        return count;
    }
}

const counter = secondsCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//Closures example 2
function multiplyBy(multiplier) {
    return function(number) {
        return number * multiplier;
    }
}

const double = multiplyBy(2);
console.log(double(5));
console.log(double(10));

const triple = multiplyBy(3);
console.log(triple(5));
console.log(triple(10));

//Higher order functions
//Example 1
const actualLevelTeam = [8, 12, 7, 10, 14];
const expectedLevelTeam = actualLevelTeam.map(function(level){
    return level * 2;
});

console.log(expectedLevelTeam);
console.log(actualLevelTeam); //Array is not modified

//Example 2
const championLevel = [8, 12, 7, 10, 14];
const halfLevel = championLevel.filter(function(experience){
    return experience % 2 === 0;
});

console.log(halfLevel); //> [8, 12, 10, 14]

//Challenge (2) example.
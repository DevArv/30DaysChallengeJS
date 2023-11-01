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

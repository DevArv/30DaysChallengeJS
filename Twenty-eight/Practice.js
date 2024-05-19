// Stack practice

let stack = [];

stack.push("Cat");
stack.push("Dog");
stack.push("Bird");

console.log("Stack status:", stack);

let element = stack.pop();
console.log("Popped element:", element);

console.log("Stack status:", stack);

function peek() {
    return stack[stack.length - 1];
}

console.log("Stack status after peek:", peek());

stack.push("Fish");
console.log("Stack status after push:", stack); 
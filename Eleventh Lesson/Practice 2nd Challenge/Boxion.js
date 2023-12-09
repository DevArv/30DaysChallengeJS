//Promise to do tasks in the app Boxion

// Importing three functions (toDoBoxion1, toDoBoxion2, toDoBoxion3) from a module located at './ToDo.js'
import { toDoBoxion1, toDoBoxion2, toDoBoxion3 } from './ToDo.js';

// Defining a function named runBoxion
function runBoxion() {
    // Creating an empty array to store results of asynchronous operations
    const TO_DO_ARRAY = [];

    // Initiating a sequence of asynchronous operations using promises
    return toDoBoxion1()
    .then(resultToDo => {
        // Pushing the result of the first operation into the array
        TO_DO_ARRAY.push(resultToDo);
        // Initiating the second asynchronous operation
        return toDoBoxion2();
    })
    .then(resultToDo2 => {
        // Pushing the result of the second operation into the array
        TO_DO_ARRAY.push(resultToDo2);
        // Initiating the third asynchronous operation
        return toDoBoxion3();
    })
    .then(resultToDo3 => {
        // Pushing the result of the third operation into the array
        TO_DO_ARRAY.push(resultToDo3);
        // Returning the array once all asynchronous operations are completed
        return TO_DO_ARRAY;
    })
}

// Calling the runBoxion function and handling the result
runBoxion()
.then(result => {
    // Logging the final result to the console
    console.log(result);
})
.catch(error => {
    // Handling errors and logging them to the console
    console.error(error);
})

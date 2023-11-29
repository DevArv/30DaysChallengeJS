//Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 31, nick: 'Alex'}); 
    }, 4000);
});

promise
    .then((result) => {
        const DOUBLED_AGE = result.age * 2;
        return DOUBLED_AGE.toString();
    })
    .then((result) => {
        console.log(`The result is: ${result}`);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('The promise is finished');
    });


//setTimeOut
let timer =setTimeout(() => {
    console.log('Has passed 5 seconds');
}, 5000);

clearTimeout(timer);

//setInterval
setInterval(() => {
    console.log('Has passed 2 seconds');
}, 2000);

function waitTimer (milliseconds) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const SECONDS = milliseconds / 1000;
            resolve(SECONDS);
        }, milliseconds);
    })
}

waitTimer(5000).then((result) => {
    console.log(`The result is: ${result} seconds.`);
})
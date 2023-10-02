//Arrays
const elements = ["water", "electric", "fire", "normal", "dark"];
elements.push("grass"); //> Add a new element to the list...
console.log(elements);

const elements1 = ["water", "electric", "fire", "normal", "dark"];
elements1.pop(); //> Remove the last element from the list...
console.log(elements1);

const age = [26, 28, 31];
const doubleAge = age.map(function(age) {
    return age * 2;
}, 0);
console.log(doubleAge); //> [ 52, 56, 62 ]

const price = [0.9, 5];
const localPrice = price.reduce(function(tax, price) {
    return tax + price;
}, 0);
console.log(localPrice); //> 5.9

//Example 1 of the first challenge in the fourth day.

const championLeague = [
    {name: "Shaco", Damage: [240, 309]},
    {name: "Maokai", Damage: [190, 285]},
    {name: "Morgana", Damage: [308, 201]},
];

function findMaxDamage(championLeague) {
    let maxDamageChampion = {
        name: [],
        maxDamage: 0,
    };

    for (let i = 0; i < championLeague.length; i++) {
        const champion = championLeague[i];

        const totalDamage = champion.Damage.reduce(
            (total, current) => total + current, 0);
        
        if (totalDamage === maxDamageChampion.maxDamage) {
        maxDamageChampion.name.push(champion.name);
        }

        if (totalDamage > maxDamageChampion.maxDamage) {
        maxDamageChampion.maxDamage = totalDamage;
        maxDamageChampion.name = [];
        maxDamageChampion.name.push(champion.name);
        }
    }
    return maxDamageChampion.name;
}

const maxDamageChampionName = findMaxDamage(championLeague);
console.log("The champion with the highest damage is:", maxDamageChampionName);

//Example 2 of the first challenge in the fourth day.

const stepsWeek = [
    {name: "Alex", steps: [1800, 2000, 3190]},
    {name: "Maria", steps: [1200, 4600, 1800]},
    {name: "Jose", steps: [900, 3200, 1200]},
];

function findMaxSteps(stepsWeek) {
    let maxStepsUser = {
        name: [],
        maxSteps: 0,
    }

    for (let i = 0; i < stepsWeek.length; i++) {
        const user = stepsWeek[i];

        const totalSteps = user.steps.reduce(
            (total, current) => total + current, 0);

    if (totalSteps === maxStepsUser.maxSteps) {
        maxStepsUser.name.push(user.name);
    }

    if (totalSteps > maxStepsUser.maxSteps) {
        maxStepsUser.maxSteps = totalSteps;
        maxStepsUser.name = [];
        maxStepsUser.name.push(user.name);
    }
        return maxStepsUser.name;
    }
}

const maxStepsUserName = findMaxSteps(stepsWeek);
console.log("The user with the highest steps is:", maxStepsUserName);
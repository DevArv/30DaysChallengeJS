//Conditionals
let championLevel = 1;
function championSkills() {
    if (championLevel >= 6) {
        console.log("This champion can cast his ultimate ability")
    } else if (championLevel >= 2) {
        console.log("This champion cant use his ultimate ability")
    } else if (championLevel == 1) {
        console.log("This champion only have one ability")
    }
}

championSkills();

//Switch
function needMana(champion) {
    switch (champion){
        case "Garen":
            return "This champion dont need mana to cast abilities.";
        case "Lux":
            return "This champion need mana to cast abilities.";
        case "Vladimir":
            return "This champion need blood to cast abilities.";
        break;
        default:
            return "This champion dont exist in the game.";
    }
}
console.log(needMana("Garen"));
console.log(needMana("Lux"));
console.log(needMana("Vladimir"));

//Example (2)
function grabWeapon (character) {
    switch (character) {
        case "valeria":
            return "Will has selected Valeria as a master sword.";
        case "boomerang":
            return "Will has selected a boomerang as a weapon, how boring you are dear player.";
        break;
        default:
            return "You need a weapon if you want to go to the next room.";
    }
}

console.log(grabWeapon("sword"));
console.log(grabWeapon("boomerang"));
console.log(grabWeapon());

//Cicles
for (i = 1; i <= 8 ; i++){
    console.log(i);
}
//> 1, 2, 3, 4, 5.

//For-in example
const mainCharacter = {
    name : "Will",
    equipment : true,
    inventory : true,
    standardHealth : 3,
}

for (const prop in mainCharacter) {
    console.log(mainCharacter[prop]);
}

//For-of example
const charactersFirstAct = ["Will", "Valeria - normal", "Valeria - sword", "slimes"];

for (const element of charactersFirstAct) {
    console.log(element);
}

//While example
let i = 2;
while (i <= 20) {
    
}
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
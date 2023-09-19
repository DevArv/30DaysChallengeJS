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
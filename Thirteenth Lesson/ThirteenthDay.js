// Methods of array: includes, join and concat

//Includes()
const MONSTER_LEVEL = [5, 10, 15, 20];
const FIND_THIS_LEVEL = MONSTER_LEVEL.includes(15);
console.log(FIND_THIS_LEVEL);

//Join()
const TO_MONSTER_ARRAY = MONSTER_LEVEL.join(", ");
console.log(TO_MONSTER_ARRAY);

//Concat()
const MONSTER_NAMES = ["Baron", "Drake", "Herald", "Grump"];
const CHAMPION_AND_LEVEL = MONSTER_NAMES.concat(MONSTER_LEVEL)
console.log(CHAMPION_AND_LEVEL);
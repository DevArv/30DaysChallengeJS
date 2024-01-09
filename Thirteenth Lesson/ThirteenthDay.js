// Methods of array: includes, join and concat

//includes()
const MONSTER_LEVEL = [5, 10, 15, 20];
const FIND_THIS_LEVEL = MONSTER_LEVEL.includes(15);
console.log(FIND_THIS_LEVEL);

//join()
const TO_MONSTER_ARRAY = MONSTER_LEVEL.join(", ");
console.log(TO_MONSTER_ARRAY);

//concat()
const MONSTER_NAMES = ["Baron", "Drake", "Herald", "Grump"];
const CHAMPION_AND_LEVEL = MONSTER_NAMES.concat(MONSTER_LEVEL)
console.log(CHAMPION_AND_LEVEL);

//flat()
const JUNGLER_MOBS = [[2, 3, 4], [8, 10, 12]];
const FLAT_MOBS = JUNGLER_MOBS.flat();
console.log(FLAT_MOBS); // [ 2, 3, 4, 8, 10, 12 ]

const JUNGLER_MOBS_2ND = [[2, 3, 4], [8, [10, 12]]];
const FLAT_MOBS_2ND = JUNGLER_MOBS_2ND.flat(1);
console.log(FLAT_MOBS_2ND); // [ 2, 3, 4, 8, [ 10, 12 ] ]

//flatmap()
const JUNGLER_MOBS_3RD = [3, 6, 10, 16];
const FLATMAP_MOBS = JUNGLER_MOBS_3RD.flatMap(x => [x, x * 3]);
console.log(FLATMAP_MOBS); // [ 3,  9,  6, 18, 10, 30, 16, 48 ]

const VALUES = [1, 2, null, 3, 4, undefined];
const RESULT = VALUES.flatMap(x => (x !== null && x !== undefined) ? [x] : []);
console.log(RESULT);

const BIDIMENSIONAL = [[2, 4, 6], [1, 5, 7]];
const BIDIMENSIONAL_RESULT = BIDIMENSIONAL.flatMap(x => x);
console.log(BIDIMENSIONAL_RESULT);
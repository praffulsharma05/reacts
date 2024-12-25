const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","flash", "batman"] 

//  marvel_heros.push(dc_heros); //this is push on existing arrays 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//[0,1,2,3][0,1]

// const all_heroes = marvel_heros.concat(dc_heros) // this is create new array and merge bot arrays
// console.log(all_heroes);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3,[4, 5, 6], 7,[6, 7,[4, 5]]]

 
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("prafful"));
// console.log(Array.from({name: "prafful"}));//interesting 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



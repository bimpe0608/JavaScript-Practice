const foodTimeTable = [
  { Weekday: "Monday", food: "white rice", price: 400 },
  { Weekday: "Tuesday", food: "Yam porridge", price: 300 },
  { Weekday: "Wednesday", food: "J.rice", price: 500 },
  { Weekday: "Thursday", food: "Swallow", price: 600 },
  { Weekday: "Friday", food: "Beans and plantain", price: 550 },
];

console.log(foodTimeTable);

// Filter
const cheapestFood = foodTimeTable.filter((food) => {
  return food.price < 500;
});

console.log(cheapestFood);

// Map
const kindOfFood = foodTimeTable.map((key) => {
  return key.food;
});

console.log(kindOfFood);

// Find
const foodAvailability = foodTimeTable.find((key) => {
  return key.food === "Swallow";
});

console.log(foodAvailability);

// ARRAY METHODS



const rainbowColours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

//To string
document.querySelector("#txt1").innerHTML = rainbowColours.toString();

// Join 
document.querySelector("#txt2").innerHTML = rainbowColours.join("/");

// pop
document.querySelector("#txt3").innerHTML = rainbowColours.pop();
document.querySelector("#txt4").innerHTML = `POP = ${rainbowColours}`


//push
document.querySelector("#txt5").innerHTML = rainbowColours.push("PINK");
document.querySelector("#txt6").innerHTML = `PUSH = ${rainbowColours} `


//shift
document.getElementById("txt7").innerHTML = rainbowColours.shift();
document.getElementById("txt8").innerHTML = `SHIFTED = ${rainbowColours}`;

//Unshift
document.getElementById("txt9").innerHTML = rainbowColours.unshift("Lavender");
document.getElementById("txt10").innerHTML = `UNSHIFTED = ${rainbowColours}`

// length property
document.getElementById("txt11").innerHTML = rainbowColours[rainbowColours.length] = "GRAY"
document.getElementById("txt12").innerHTML = ` APPENDING NEW ELEMENT = ${rainbowColours}`


//CONCATINATING ARRAYS

//Two arrays
const warmColors = ["orange", "red", "yellow"];
const coolColors = ["blue","green", "purple"];


const warmXcool = warmColors.concat(coolColors);
document.querySelector("#txt13").innerHTML = ` CONCATENATED COLORS = ${warmXcool}`

//Three arrays
const neutralColors = ["black", "white", "gray"];

const allColors = warmColors.concat(coolColors, neutralColors);
document.querySelector("#txt14").innerHTML = ` CONCATENATING ALL = ${allColors}`

//Array with value
const newColorArray = allColors.concat("BURGUNDY");
document.querySelector("#txt15").innerHTML = ` NEW COLOR ARRAY = ${newColorArray}`


//Splice

const splicedColors = allColors.splice(2, 0, "Burnt Orange");
document.querySelector("#txt16").innerHTML = splicedColors;
document.querySelector("#txt17").innerHTML = `SPLICED COLORS ${splicedColors}`;

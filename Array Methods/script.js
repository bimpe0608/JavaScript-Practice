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
allColors.splice(2, 0, "PURPLE");
document.querySelector("#txt16").innerHTML = ` SPLICED COLORS = ${allColors}`

//Slice
const slicedColor = allColors.slice(1);
document.querySelector("#txt17").innerHTML = ` SLICED COLORS = ${slicedColor}`;



//ARRAY SORT

//Sort
const sortedColors = rainbowColours.sort();
document.getElementById("txt18").innerHTML = ` SORTED COLORS = ${sortedColors}`;

//Reverse
const reversedArray = rainbowColours.reverse();
document.getElementById("txt19").innerHTML = ` REVERSE COLORS = ${reversedArray}`;

//Numeric Sort 
const denominations = [5, 10, 20, 50, 100, 200, 500, 1000];
document.querySelector("#txt20").innerHTML = denominations;

const sortCurrency = denominations.sort(function(a,b) {return b - a});  //default already sorted from a - b
document.querySelector("#txt21").innerHTML = ` SORTED CURRENCY = ${sortCurrency}`;

//Random

document.getElementById("clck").onclick = function () {

denominations.sort(function() {return 0.5 - Math.random()});

document.querySelector("#txt22").innerHTML = ` RANDOM DENOMINATIONS = ${denominations}`;
document.querySelector("#txt22").style.color = "hotpink";
}



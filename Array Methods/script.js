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

//To string

const rainbowColours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];


document.querySelector("#txt1").innerHTML = rainbowColours.toString();

// Join 
document.querySelector("#txt2").innerHTML = rainbowColours.join("/");

// pop
document.querySelector("#txt3").innerHTML = rainbowColours.pop();

//push
document.querySelector("#txt4").innerHTML = rainbowColours.push();


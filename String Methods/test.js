// Length

let x = "Apple"

let lengthOfX = x.length;
document.getElementById("txt1").innerHTML = `length of Apple is  ${lengthOfX} `;

// Slice

let fruits = "Cherry, Orange, Mango"

let fruitSlice = fruits.slice(2, 14);
document.getElementById("txt2").innerHTML = `fruit slice is  ${fruitSlice}`;

// Replace

let fruitSwitch = fruits.replace("Orange", "Pear");

document.getElementById("clk").onclick = function () {
    document.getElementById("txt3").innerHTML = ` Fruits = ${fruitSwitch} `;
}

// To Upper and Lower case

// let a = "Mangoes are the best"

// let caps = a.toUpperCase;
// document.write(caps);

// Trim

let apples = "  Red apple, Green apple  "
let fruitTrim= apples.trim();
document.getElementById("txt4").innerHTML = fruitTrim;

// Padding

let y = "5";
let padded = y.padEnd(5,"0");
document.getElementById("txt5").innerHTML = padded;

// Split

let splitApples = apples.split("a");
document.getElementById("txt6").innerHTML = splitApples[0];
document.getElementById("txt6").style.fontSize = "20px";
document.getElementById("txt6").style.color = "orangered";

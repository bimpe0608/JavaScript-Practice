// Length

let x = "Apple"

let lengthOfX = x.length;
document.getElementById("txt1").innerHTML = `length of Apple is  ${lengthOfX} `;

// Slice

let fruits = "Cherry, Orange, Mango"

let fruitSlice = fruits.slice(2, 14);
document.getElementById("txt2").innerHTML = `fruit slice is  ${fruitSlice}`;

// Replace

let fruitSwitch = fruits.replace("Orange", "Pear")

document.getElementById("clk").onclick = function () {
    document.getElementById("txt3").innerHTML = fruitSwitch;
}

// To Upper and Lower case

// let a = "Mangoes are the best"

// let caps = a.toUpperCase;
// document.write(caps);

// Trim

let 
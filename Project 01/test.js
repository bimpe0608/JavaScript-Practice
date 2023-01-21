let a;
let b;

a = 4;
b = 7;

const x = 30;

// console.log(a * b);

// document.write(a * b + " is the answer");

document.getElementById("btn").onclick = function () {
  document.write(a * b + " is the answer");
};

document.getElementById("btn2").onclick = function () {
  document.getElementById("txt2").style.display = "none";
};

let d = 16;
let e = "16";

d == e ? document.write("I'm equal") : document.write("I'm not equal");

d !== e ? document.write("        ,OOps, not equal") : document.write("equal");

let favoriteAnimeRating = {
  bleach: 1,
  fmab: 3,
  HxH: 2,
  Haikyu: 5,
  JujutsuKaisen: 4,
};

console.log(favoriteAnimeRating);

let myArray = new Array();
myArray = [3, 50, "item1", 100, "item2"];

document.write("     " + myArray[3]);

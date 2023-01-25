// To String

let x = "550";

let numToString = x.toString();
document.getElementById("txt1").innerHTML = numToString;

// To Exponential

let y = 5.6543;

let numToExp = y.toExponential();
document.getElementById("txt2").innerHTML = numToExp;


// To Fixed

let a = 85.547165;

let fixedNum = a.toFixed(2);
document.getElementById("txt3").innerHTML = fixedNum;

// To Precision

let  preciseNum = a.toPrecision(5);
document.getElementById("txt4").innerHTML = preciseNum;

// Value of

let b = 73;

let valNum = b.valueOf();
document.getElementById("txt5").innerHTML = valNum;
function profession(name, gender) {
    if(gender === "male") {
        console.log (`${name} is a doctor`);
    }
    else if(gender === "female") {
        console.log (`${name} is an engineer`);
    }
    
}

profession("Tobe", "male");

// document.getElementById("result").innerHTML = profession("Tobe", "male");


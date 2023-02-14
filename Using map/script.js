//Dates

const num = [1,2,3,4,5,6,7,8,9,10];

const multiples = num.map((data, i) => {

    if (i === 3) {
      return 100;
    }
  return data * 2;
});


console.log(multiples);


// const multiples = num.map((data) => {
//  return data * 2; 

// })

// if (multiples[3] === 8) {
//     multiples[3] = 100;
// }

// console.log(multiples)


//  const array = [1,3,5,7,9];

//  const mappedArray = array.map(function(element, i){
//     return i, element * 2; 

//  })

//  console.log(mappedArray)




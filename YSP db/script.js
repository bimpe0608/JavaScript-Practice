const yspStaff = [
    {name: "Adebimpe", age: "23", role: "Frontend/social media", gender: "Female" },
    {name: "Adeola", age: "22", role: "UI/UX/Customer Success", gender: "Female" },
    {name: "Oluchi", age: "21", role: "Finance", gender: "Female" },
    {name: "Ademilola", age: "20", role: "Content creator/Social media", gender: "Female" },
    {name: "Fayokunmi", age: "22", role: "frontend", gender: "Female" },
    {name: "Owujib", age: "25", role: "Senior dev", gender: "Male" },
    {name: "Hamzat", age: "19", role: "Backend", gender: "Male" },
    {name: "David", age: "24", role: "Media", gender: "Male" },
    {name: "Layi", age: "26", role: "Brand Designer/Graphics", gender: "Male" },
    {name: "Mojeed", age: "27", role: "Math tutor", gender: "Male" },
    {name: "Ore", age: "20", role: "Front desk", gender: "Female" },
    {name: "Bolaji", age: "23", role: "Editing/Media", gender: "Male" },
    {name: "Austin", age: "22", role: "Editong/Media", gender: "Male" },
    {name: "Daniel", age: "29", role: "CEO", gender: "Male" },
    {name: "Innocent", age: "29", role: "Co-founder/creative director", gender: "Male" },
    {name: "Ope", age: "21", role: "Office Assistant", gender: "Male" },
];

console.log(yspStaff);

//Male Staff

const maleStaffInfo = yspStaff.filter((data)=> {
return data.gender === "Male"
});

console.log(maleStaffInfo);

//Male staff above 25

const mOver25 = maleStaffInfo.filter((data)=> {
    return data.age < 25
});

console.log(mOver25);

//Female staff

const femaleStaffInfo = yspStaff.filter((data)=> {
return data.gender === "Female"
});

console.log(femaleStaffInfo);

//Number of Female Staff Above 25

const fOver25 = femaleStaffInfo.filter((data) => {
    return data.age > 25
}).length

console.log(fOver25);
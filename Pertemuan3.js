const listmahasiswa = ["ozy","arya","nabilah","mayda","mira","hafizh"];

//destructuring array untuk memudahkan mengambil index pada array 
const [ozy,arya,nabilah, ...rest]=listmahasiswa;

// console.log(rest);

//destructuring object untuk memudahkan mengambil object
const dataDiri = {
    Name: "Naim",
    TTL: "21 November 2004",
    umur: 20,
};

const {Name, TTL, umur}=dataDiri;

console.log(Name);
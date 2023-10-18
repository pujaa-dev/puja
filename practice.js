
// // variable

// let car = "Fiat";
// console.log(car)

// // obj create

// const phone = {type: "device", price:"50000", model:"samsung"};

// console.log("The phone price is " + phone.price)

// // to add data

// const cell = {
//     type: "device",
//     price:"50000",
//     model:"samsung"
// };

// phone.year=2015;
// console.log(cell)


// // to show particular data from obj

// const person ={
// firstName: "puja",
// lastName: "biswas",
// age: 23
// };
// console.log(person.firstName+" "+person.age)

const people ={
    firstName: "puja",
    lastName: "biswas",
    age: 23,
    fullName: function() {
        return this.firstName+" "+ this.lastName
    }
}
people.firstName="dhrubo"  
// to change data it has to be outside of all brackets

console.log(people)

// const puja = {
//     title: "biswas",
//     age: 23,
//     add: "jsr",
// }
// puja.nickname="jhumur"
// puja.title="roy"
// console.log(puja);


// // FUNCTION

// function one(a,b) {
//     return a * b;
// }
// let result = one(4,3);
// console.log(result)



var a=4
var b=6
console.log(a*b);


function temp(f) {
    return (6/9)*(f-32);
}
let result = temp(75);
console.log(result)



let taap=matra(75);
console.log("the temp is "+taap+" cels")

function matra(f) {
    return (5/9)*(f-32)
}


// ARRAY

// const student = ["dhrubo", "ayon", "puja", "tuli", "prodip", "kanika"];
// let size = student.length;
// console.log(size);

// normal text in array

// const students = ["dhrubo", "ayon", "puja", "tuli", "prodip", "kanika"];
// console.log(students.toString())



// push

// const studen = ["dhrubo", "ayon", "puja", "tuli", "prodip", "kanika"];
// studen.push("jhumur")
// console.log(studen)

// concat

// const girls= ["puja", "any" ,"naina"];
// const boys= ["dhrubo", "ayon", "raj"];
// console.log(girls.concat(boys))

// const naam= ["tina","rani","avni"];
// const nnaam=naam.concat("akira")
// console.log(nnaam)

// variables

// x=5;
// y=6
// z=x+y;
// console.log(z);

// const price1= 8;
// const price2= 6;
// const total= price1+price2;
// console.log(total);

// var x= 5+5;
// console.log(x)

// var x="hi "+"hlw";
// console.log(x);

// loop


// let text ="i love my bd"
// for ( let i=0; i<5; i++)
// {

// //     console.log(i, text)
// // }

// for (let i =0; i<10; i++){
//     if (i % 2 ==0)
//     console.log(i)
// }

// for (let i =0; i<10; i++){
//     if (i % 2 !=0)
//     console.log(i)
// }

// let mark = 60

// if (mark >= 80){
// console.log("A+")
// }
// else if (mark>= 70)
// {
//     console.log("A")
// }
// else{
//     console.log("F");
// }

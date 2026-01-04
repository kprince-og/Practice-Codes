// -----------------Practise set 1

// let num = prompt("Enter the Number");

// if (num % 5 === 0 ){
//     console.log(num ,"is Multiple of 5");
// }
// else {
//    console.log(num ,"is not Multiple of 5");
// }

// -----------------Practise set 2

// let score = prompt("Enter your Score (0-100)");
// let grade;

// if (score >= 90 && score <= 100){
//     grade = "A";
// }
// else if (score >= 70 && score <=89){
//     grade = "B";
// }
// else if (score >= 60 && score <= 69){
//     grade = "C";
// }
// else if (score >= 50 && score <= 59){
//     grade = "D";
// }
// else if (score > 0 && score <= 49){
//     grade = "F";
// }
// else {
//     grade = "Unidentified Score";
// }

// console.log("Your Grade is :",grade);

//----------looping statement practice Q1.(print even numbers from 0-100)

// for (i=0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log("even number :",i);
//     }
// }

//----------looping statement practice Q2.(guessing number game)

// let gameNum = 75;
// let userNum = prompt("Guess the game number :");

// while(userNum != gameNum){
//     userNum = prompt("You Guessed the Wrong number. Guess Again!");
// }

// console.log(userNum);
// console.log("Congrats! you Got the correct answer");

// ---------------------------------------------Practice for Strings in JS Q.no1

// let fullName = prompt("Enter your Full Name Here...! without any spacing");

// let username = "@" + fullName + fullName.length;

// console.log("Username :",username);
// console.log("Name :",fullName);

// ----------------------------Practice for Arrays Q.no 1 avg marks of entire class

// let marks = [34,92,56,68,95,76];

// let sum = 0;

// for (let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;

// console.log(`Total marks of Entire Class = ${sum}`);
// console.log(`Average Marks of Entire Class = ${avg}`);

// ----------------------------Practice for Arrays Q.no 2 price before offer

// let items = [250,645,300,900,50];

//----------------------by for-of loop

// let i = 0;
// for (let val of items){
//     console.log(`values : ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`final price : ${items[i]}`);
//     i++;
// }

//----------------------by for loop

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);

// ----------------------------practice for array method Q.no 1

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift();// remove first company from an array

// companies.splice(1 , 1 , "Ola");// remove uber and place ola in its place

// companies.push("Amazon");// add amazon to the end of an array

// console.log(companies);

//-------------------practice for functions in js (to find the sum of 2 numbers)

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(5, 9);

// with the use of return to solve same example

// function sum(x, y) {
//     // local variables -> scope
//     s = x + y;
//     return s;
// }

// let val = sum(9, 6);

// console.log(val);

// -------------------Arrow functions in js

// ------sum function (example)

// function sum(a, b) {
//     return a+b;
// }

// // Modern JS feature (arrowFunction)
// const arrowSum = (a, b) => {
//     console.log(a+b);
// }

// // --------multiplication function

// function multi(a,b) {
//     return a*b;
// }

// const arrowMulti = (a, b) => {
//     return a*b;
// }

//-----------------------------practice questions for functions in JS Q.NO.1

// function countVowels (str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
//             count++;
//         }
//     }

//     return count;
// }

// // same example with arrow function

// const vowelCount = (str) => {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
//             count++;
//         }
//     }

//     return count;
// }

//---------------------------- practice of for-each loop

// let nums = [1, 2, 3, 4, 5];

// let calculateSquare = (num) => {
//     console.log(num*num);
// }

// nums.forEach(calculateSquare);

// example for reduce method (to find out the largest number)

// let num = [4, 7, 2, 9, 1, 5];

// const result = num.reduce((preval, currval) => {
//     return preval > currval ? preval : currval;
// })

// console.log(result);

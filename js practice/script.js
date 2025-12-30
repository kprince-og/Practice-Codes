//--------------------------------------JS Variables and Data types


// -----------------------Data types in JS

// let Name = "Tony stark";
// let age = 34;
// let totalPrice = 599;

// let price = 109.87;
// let fullName = "Shaktiman";
// isFollow = true;
// let b;
// let a = null;
// let x = BigInt("123");
// let y = Symbol("Hello JS !");

// ---------------------------output prints used commands

// console.log (Name);
// console.log (age);
// console.log (totalPrice);

// ---------------------------object creation

// const student = {
//     name : "Salini",
//     age : 20,
//     cgpa : 7.8,
//     isPass : true
// };

// student ["name"] = "Sourav Verma";
// student ["age"] = student ["age"] + 1;

// console.log(student.name);

// ----------------------------------Practice For variables and Data types in JS 1

// const product = {
//     title : "Trimax Fountain Gel Pen",
//     ratings : 4.5,
//     isDeal : true,
//     price : 239,
//     offer : 11
// };

// console.log(product);

// // --------------------------------Practice For variables and Data types in JS 2

// const profile = {
//     username : "@Gamerbuddy",
//     isFollow : true,
//     name : "Gamer Buddy",
//     posts : 19,
//     followers : 278,
//     following : 18,
//     bio : "Content creator and a Youtuber"
// };

// console.log(profile);

//-------------------------------------- 2nd Chapter of JS Variables and Data types

// Arithmetic operators

// let a = 9;
// let b = 3;

// console.log("a =", a , "& b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);//Modulus
// console.log("a ** b =", a ** b);//Exponantiation


// -------------------------------------Unary operators

// let x = 10;
// let y = 2;

// console.log("x =", x , "& y =", y);
// x++;
// y--;

// console.log("x+1 =", x, "& y-1 =", y);

// ------------------------------------Assignment operators

// let x = 10;
// let y = 2;

// x *= 3;

// console.log("x =", x);

// ------------------------------------comparison opertors

// let x = 10;
// let y = 2;

// console.log("x =", x);
// console.log("y =", y);

// console.log("x != y", x != y);

// --------------------------------------logical operators (AND , OR )

// let x = 10;
// let y = 2;

// let cond1 = x > y ;
// let cond2 = x === y ;

// console.log("cond1 || cond2 =", cond1 || cond2);

// -----------------Logical NOT operator

// let x = 10;
// let y = 2;

// let cond1 = x > y ;
// let cond2 = x === y ;

// console.log("!(x < y)", !(x < y));

// ---------------------------------Conditional Statements (IF and IF-ELSE)--------------------

// let age = 24 ;

// if (age >= 18 )
// {
//     console.log("You are eligible for Voting");
// }

// if (age < 18 )
// {
//     console.log("You are not eligible for Voting");
// }

// ---------------IF-ELSE

// let mode = "dark" ;
// let color;

// if (mode === "dark")
// {
//     color = "black";
// }

// else 
// {
//     color = "white";
// }

// console.log(color);

// --------------------find the odd or even number practice for if-else
    
// let a = 18;

// if (a % 2 === 0){
//     console.log(a ,"is even number");
// } else {
//     console.log(a ,"is odd number");
// }

// --------------else if statements

// let age = 38;

// if (age < 18){
//     console.log("Teenagers");
// } else if (age > 60 ){
//     console.log("Seniors");
// } else {
//     console.log("Youngsters");
// }

// ----------ternary operator

// let age = 19;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

//--------------------------looping statements---------------------------

// ---------------print 1 to 5 values(FOR Loop)
// for ( i=1; i<=5; i++) {
//     console.log("Hello JS !");
// }

// calculate the sum of 1 to 5 numbers

// let sum = 0;

// for(i = 1; i<=5; i++){
//     sum = sum+i;
// }
// console.log("sum =", sum);

// ------------------------While Loop

// let i = 1;

// while (i<=6){
//     console.log("i =", i);
//     i++;
// }

// ------------------------Do-While Loop

// let i = 1;

// do {
//     console.log("Web Dev");
//     i++;
// } while (i<=10);

// ----------for-of loop

// let str = "Spiderman";
// let size = 0;

// for(let val of str) {
//     console.log("value =",val);
//     size++;
// }

// console.log("size of string =",size);

// ----------for-in loop

// let student = {
//     name: "Sourav",
//     branch: "cse",
//     rollno: 192,
//     cgpa: 6.8,
//     isPass: true
// };

// for (let key in student) {
//     console.log("key =",key , "value =", student[key]);
// }

// --------------------------------------strings in js

// let str = "Monday";

// console.log(str.length);
// console.log(str[3]);

// --------------------------------template literals

// let obj = {
//     item: "Book",
//     price: 250
// };

// let output =`The Cost of ${obj.item} is ${obj.price} rupees`;

// console.log(output);

// -----------------------------------string methods (uppercase and lowercase)

// let str = "WeekEnd";

// let str1= str.toUpperCase();
// let str2= str.toLowerCase();
// console.log(str);
// console.log(str1);
// console.log(str2);

// --------trim method

// let str = "       Weekend begins from Today            ";

// console.log(str.trim());

// --------slice method(spits string from start to end)

// let str = "Hello JS";

// console.log(str.slice(1,3));

// --------concat method(joins one string to another)

// let str = "Web Dev ";
// let str1 = "Code in JS"

// let res = str + str1;// simplified way

// console.log(str.concat(str1));// method for concatination
// console.log(res);

// --------replace method

// let str = "Hello";

// console.log(str.replace("lo","p"));

// --------char at find method

// let str = "Code of JS";

// console.log(str.charAt(0));

// ---------------------------------------Arrays in JS

// let Subject = ["English","Maths","Science","SST","Hindi","Punjabi"];

//----------------for loop
// for (i= 0 ; i< Subject.length ; i++){
//     console.log(Subject[i]);
// }

//-------for-of loop

// let cities = ["Amritsar","Gurdaspur","Pathankot","Tarn Taran"];

// for(let city of cities){
//     console.log(city);
// }

// -----------------------Array Methods in JS (push , pop & toString() Method)

// let foodItems = ["Paneer tikka","cigar roll","Mashroom duplex","burger"];

//----------------push method (used for adding something in end position)
// foodItems.push("Apple","Mango","Guava");

//----------------pop method (used to delete something in the end position)
// foodItems.pop();

// console.log(foodItems);
// console.log(foodItems.toString()); //------------converts array into string without changing the actual array.

// ----------------------------more array methods (concat(), unshift(), shift())

// let marvelHeroes = ["iron_man","hulk","captain_america","thor"];
// let dcHeroes = ["superman","batman","flash","deadpool"];

// marvelHeroes.unshift("Dr.Strange");// add something to starting position
// dcHeroes.shift();// delete something from starting position

// let heroes = marvelHeroes.concat(dcHeroes);// multiplies 2 array with other in an new array

// console.log(heroes);

// --------------------slice method

// let marvelHeroes = ["iron_man","hulk","captain_america","thor","spiderman"];

// console.log(marvelHeroes.slice(1));//------ returns a piece of an array

// --------------------------splice mathod

// let marks = [24,34,57,93,86,67,75];

// marks.splice(2, 4, 45, 47, 39 ,28);// used to add , delete and replace the number in an array.

// console.log(marks);

// ------------------------------------Functions and methods in JS

//------------functions

// function myfunction() { // (function defination)
//     console.log("Welcome Developers !");
//     console.log("We are Learning JS :)");
// }

// myfunction();// function call

// ----------------function by input value example

// function myfunction(msg){
//     // parameter -> input
//     console.log(msg);
// }

// myfunction("We are learning JS");// arguments

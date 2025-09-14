// exercise 1 how to run js
console.log("Hello world")
// node main.js

// exercise 2 variables
let name="Aleena";
console.log(name);

const age=21;
console.log(age);

// const age=0
// age=25 cant 
 let sum=0
 sum=5
 console.log(sum);//5

//  exercise 3 Data types
// primitive

let fullname="aleena";
let firstname='aleena';
let animal=`cat`;

const total=0;
const PI=3.14;

let isLoggedIn=true;

let result;
console.log(result)

result=null;

// non-primitive

const person={
    name:"Ali",
    age:30,
   walk:function(){
    console.log("he can walk")
   }
}

console.log(person.walk());

const fruits=["apple","mango"];
console.log(fruits[0])

// exercise 4 operators
// assignment 
let x=10;
let y=5;

console.log(--x);

console.log(++x);

// arithmetic

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x**y)
console.log(x/y)
console.log(x%y)
// comparison 
console.log(x===y)
console.log(x!==y)
console.log(x<y)
console.log(x>=y)

// logical

console.log(x>5&&y>7)
console.log(x>y||y>x)

const isValid=true;
console.log(!isValid)

// ternary

const isOdd=x%2!==0?"Number is odd":"Number is even";

// exercise 5 Type conversion
// implicit and explicit

console.log(2+'3')
console.log(5-null);
console.log("5"-undefined)

console.log(parseFloat('3.14'))
console.log(String('3.14'))
console.log(Boolean(10))
console.log(Boolean(null))//false
console.log(Boolean(0))//false
console.log(Boolean(undefined))//false

// exercise 6 Equality

// double equal just check the value is equal
console.log(2=="2")//true

// strict equal chcek it type as well as value
console.log(2==="2")//false


// exercise 7 conditional statements
let num=-2;
if(num>0){
    console.log("positive")
}else{
    console.log("negative")
}
if(num>0){
    console.log("positive")
}else if(num===0){
    console.log("zero")
}
 else{
         console.log("negative")
    }

let color='red';
switch (color) {
    case "blue":
        console.log("its is blue");
        break;
     case "red":
        console.log("its is red")
        break;

    default:
        break;
}

// exercise 8 Looping
for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}
let j = 1;
while (j <= 5) {
  console.log("While Loop:", j);
  j++;
}
let k = 1;
do {
  console.log("Do While Loop:", k);
  k++;
} while (k <= 5);

let fruits2 = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log("For Of:", fruit);
}

// exercise 9 functions

function greet(){
    console.log("Good morning")
}

function greetWithName(username){
    console.log("Good morning"+" ",username)
}

function subtract(a,b){
    return a-b;
}

greet();
greetWithName("Aleena");
let subtractValue=subtract(5,3);
console.log(subtractValue);

const arrowSum=(x,y)=>{
     return x+y;
}

let sumValue=arrowSum(5,3);
console.log(sumValue);

// exercise 9 scope

// global
let idea="innovation";
console.log(idea)//have global scope
// function
function name(){
    const lastname="jabeen";
    console.log(lastname);//will print lastname
    console.log(idea)//have global scope
}
console.log(lastname);//erorwill ot be available outso=ide function
name()//will print lastname
// block
if(true){
    const lastname="jabeen";
    console.log(lastname);//will print lastname
    console.log(idea)//have global scope
}
// console.log(lastname);give error const has block scope

















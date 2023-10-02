/* function addnumber(a: number, b: number): number {
    return a + b;
}

const num1: number = 200;
const num2: number = 10;

const sum: number = addnumber(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${sum}`); */

// Variables, Data Types, and Operators

let num1 = 10;
let num2 = 20;
let result = num1 + num2;
console.log(`${result}`)
//integer
let num = 152003;
//float
let float = 125.55;
//string
let Name = "Harsh";
//boolean
let isTrue = true;
//null
let emptyvalue = null;
//undefine
let undefine;
//object
let object = {
    name: "harsh",
    address: "kalyan",
    age: 20
};
console.log(`${result}`);
console.log(`${num}`);
console.log(`${float}`);
console.log(`${Name}`);
console.log(`${isTrue}`);
console.log(`${emptyvalue}`);
console.log(`${undefine}`);
console.log(`${object}`);

//arithmetic
let a = 200;
let b = 10;
let sum = a + b;
let difference = a - b;
let multiply = a * b;
let divide = a / b;
let remainder = a % b;
console.log(`${sum}`);
console.log(`${difference}`);
console.log(`${multiply}`);
console.log(`${divide}`);
console.log(`${remainder}`);

//comparison
var m = 300;
var n = 200;
var isEqual = m == n;
var isNotEqual = m != n;
var isGreaterThan = m > n;
var isLessThan = m < n;
console.log(`${isEqual}`);
console.log(`${isNotEqual}`);
console.log(`${isGreaterThan}`);
console.log(`${isLessThan}`);

//logical
let istrue = true;
let isFalse = false;
let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notResult = !isTrue;
console.log(`${andResult}`);
console.log(`${orResult}`);
console.log(`${notResult}`);

//concatenate 
let firstname = "Harsh";
let fullname = `${firstname} Dubey`
console.log(`${fullname}`);

//Use template literals to create a dynamic message using variables. in typescript

let FirstName: string = "Harsh";
let LastName: string = "Dubey";
let age: number = 20;
let message: string = `My self ${FirstName} ${LastName}! I am ${age} years old.`;
console.log(message);


//Write a function calculatePrice that takes the base price and applies a discount based on user type (regular, premium).

function calculateprice(basePrice: number, userType: string): number {
    let discountpercentage: number;
    switch (userType) {
        case "regular":
            discountpercentage = 10;
            break;
        case "premium":
            discountpercentage = 20;
            break;
        default:
            discountpercentage = 0;
    }
    const discountAmount = (basePrice * discountpercentage) / 100;
    const discountedPrice = basePrice - discountAmount;

    return discountedPrice;
}
const basePrice = 100;
const userType = "regular";
const finalPrice = calculateprice(basePrice, userType);
console.log(`Final price for a ${userType} user: $${finalPrice}`);

//Control Structures and Functions

// if statements

let x = 20;

if (x > 25) {
    console.log("x is greater than 5");
} else if (x === 5) {
    console.log("x is equal to 5");
} else {
    console.log("x is less than 5");
}

//for loops
for (let i = 0; i < 7; i++) {
    console.log(`${i}`);
}
// while loops
let i = 0;

while (i < 7) {
    console.log(`${i}`);
    i++;
}

//do while
let j = 0;
do {
    console.log(`${j}`);
    j++;
} while (j < 7);

//Functiion Declairatins
function harsh(name) {
    return `Hello, ${name}`;
}
console.log(harsh("Harsh"));

//Function Expressions
const dubey = function (name) {
    return `Hello, ${name}`;
};
console.log(dubey("Dubeyji"));

// Arrow Functions
const Dubeyji = (name) => `Hello, ${name}`;
console.log(Dubeyji("harsh"));

//Function Constructors
const add = new Function('a', 'b', 'return a + b');
console.log(add(10, 55));

//Write a function printMultiples that takes a number and prints its multiples from 1 to 10.

function printMultiples(number) {
    for (let i = 1; i <= 10; i++) {
        const multiple = number * i;
        console.log(`${number} * ${i} = ${multiple}`);
    }
}
printMultiples(5);

//Implement a recursive function calculateFactorial that calculates the factorial of a number.

function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}
const number = 5;
const factorial = calculateFactorial(number);
console.log(`Factorial of ${number} is ${factorial}`);

//Write a higher-order function that takes a function and a parameter, and applies the function multiple times to the parameter.
//copy from chatgpt ....

function applyFunctionMultipleTimes(func, parameter, times) {
    for (let i = 0; i < times; i++) {
        parameter = func(parameter);
    }
    return parameter;
}

// Example usage:
function double(x) {
    return x * 2;
}

const initialValue = 2;
const numberOfTimes = 3;
const solv = applyFunctionMultipleTimes(double, initialValue, numberOfTimes);

console.log(`Result after applying the function ${numberOfTimes} times: ${solv}`);


//Objects and Arrays in JavaScript
//Objects (creating, accessing properties): Learn about object creation and property access in JavaScript.

const person = {
    firstName: "HArsh",
    lastName: "Dubey",
    age: 20,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);


//Arrays (creating, accessing elements, array methods): Understand arrays and their various methods for data manipulation.

const colors = ["red", "green", "blue"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
colors.push("orange");
const removedFruit = colors.pop();
const subset = colors.slice(1, 2);
console.log(colors)

const color = ["red", "green", "blue"];
color.splice(1, 1);
color.splice(1, 0, "purple");
console.log(color);

const ages = [25, 30, 18, 15, 35];
const adults = ages.filter((age) => age >= 18);
console.log(adults)


//Create an object representing a book with properties like title , author , and pages .
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);

//implement a function that takes an array of books and returns a new array sorted by the number of pages
//copy from chatgpt

function sortByPages(books) {
    return books.slice().sort((a, b) => a.pages - b.pages);
}
const books = [
    { title: "Book A", author: "Author A", pages: 200 },
    { title: "Book B", author: "Author B", pages: 150 },
    { title: "Book C", author: "Author C", pages: 300 },
];
const sortedBooks = sortByPages(books);
console.log(sortedBooks);


//Create an array of numbers and use map and filter to transform and filter the array, respectively
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map((number) => number * 2);
console.log("Original Array:", numbers);
console.log("Doubled Numbers:", doubledNumbers);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

//Closures: Understand the concept of closures in JavaScript and their practical applications

function multFn() {
    var mult = 9;
    return function (val) {
        mult = mult * val;
        return mult;
    }
}
var mult = multFn();
console.log(mult(18));

//this Keyword: Learn about the context-binding behavior of the this keyword.

const Person = {
    name: "Harsh",
    Greet: function () {
        console.log(`Hello, ${this.name}!`);
    },
};
Person.Greet();

//TypeScript Advanced Concepts (union types, intersection types, generics): Explore advanced type system features in TypeScript.





//Write a function counter that returns a function. The inner function, when invoked, should increment a counter variable in the outer function's scope.
function counter() {
    let count = 0;
    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}
const myCounter = counter();
myCounter();
myCounter();
myCounter();

//Demonstrate closure behavior by creating multiple counters and invoking them independently.
function Counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter1 = Counter();
const counter2 = Counter();
counter1();
counter1();
counter2();
counter2();
counter2();
counter1();


//Implement a generic function that takes an array of any type and returns an array containing only unique elements.
//?????
function unique<T>(array: T[]): T[] {
    const uniqueSet = new Set<T>();

    for (const item of array) {
        uniqueSet.add(item);
    }
    return Array.from(uniqueSet);
}

const Numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = unique(Numbers);
console.log(uniqueNumbers);

const fruits = ["apple", "banana", "apple", "orange", "banana"];
const UniqueFruits = unique(fruits);
console.log(UniqueFruits);

//Test the function with different data types (numbers, strings, objects) to ensure type safety.????

function Unique<T>(array: T[]): T[] {
    const uniqueSet = new Set<T>();
    for (const item of array) {
        uniqueSet.add(item);
    }
    return Array.from(uniqueSet);
}
const Numbe = [1, 2, 2, 3, 4, 4, 5];
const UniqueNumbers = unique(Numbe);
console.log(UniqueNumbers);
const fruit = ["apple", "banana", "apple", "orange", "banana"];
const uniqueFruits = unique(fruit);
console.log(UniqueFruits);
interface Person {
    id: number;
    name: string;
}

const people: Person[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
];

const uniquePeople = unique(people);
console.log(uniquePeople);

const customObjects = [
    { key: "A", value: 1 },
    { key: "B", value: 2 },
    { key: "A", value: 1 },
];

const uniqueCustomObjects = unique(customObjects);
console.log(uniqueCustomObjects);
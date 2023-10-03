// const person = {
//     firstName: 'harsh',
//     lastName: 'Doe',
//     age: 30,
// };
// console.log(person)

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const person = new Person('John', 'Doe', 30);
// console.log(person)

// const personPrototype = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//     },
// };

//Object Creation: Literal notation, constructor functions, classes, and Object.create().
//Literal Notation:

const person1 = {
    firstName: "harsh",
    lastName: "dubey",
    age: 20,
};
console.log(person1)

//Constructor Functions

function Person2(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
const person2 = new Person2("harsh", "Dubey", 20);
console.log(person2)

// classes  ???

//Object.create

const personPrototype = {
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
};

const person4 = Object.create(personPrototype);
person4.firstName = "harsh";
person4.lastName = "dubey";
person4.greet();

//Array Creation and Manipulation: Push, pop, shift, unshift, map, filter, reduce methods, and Array.from().

//push
const numbers1 = [1, 2, 3];
numbers1.push(4, 5);
console.log(numbers1)

//pop
const fruits1 = ['apple', 'banana', 'cherry'];
const removedFruit1 = fruits1.pop();
console.log(removedFruit1)
//shift
const fruits = ['apple', 'banana', 'cherry'];
const removedFruit = fruits.shift();
console.log(removedFruit1);
//unshift
const numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers);

//map
const numbers5 = [1, 2, 3];
const squaredNumbers = numbers5.map((num) => num * num);
console.log(squaredNumbers);

//filter
const numbers6 = [1, 2, 3, 4, 5];
const evenNumbers = numbers6.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//reduce
const numbers7 = [1, 2, 3, 4, 5];
const sum = numbers7.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//arrey.form
const iterable = 'hello';
const charArray = Array.from(iterable);
console.log(charArray);

//Object Creation: Create an object representing a book with properties title, author, pages and a method read() that logs a message
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: function () {
        console.log(`I have read ${this.title} by ${this.author}. It has ${this.pages} pages.`);
    },
};
book.read();
console.log(book);

//Array Creation and Manipulation: Create an array of strings and use filter to get strings of length greater than 5, then use reduce to concatenate these strings.
const strings = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
];
const filteredStrings = strings.filter((str) => str.length > 5);
const concatenatedString = filteredStrings.reduce((accumulator, currentValue) => {
    if (accumulator === "") {
        return currentValue;
    } else {
        return accumulator + ", " + currentValue;
    }
}, "");

console.log(concatenatedString);

//Object Methods: Create an object representing a student with properties name and grades. Add a method calculateAverage() that returns the average grade.
const student = {
    name: "my",
    grades: [85, 90, 78, 92, 88],

    calculateAverage: function () {
        if (this.grades.length === 0) {
            return 0;
        }
        const total = this.grades.reduce((accumulator, currentGrade) => accumulator + currentGrade);
        const average = total / this.grades.length;
        return average;
    },
};
const averageGrade = student.calculateAverage();
console.log(`${student.name}'s average grade is ${averageGrade}`);


//Arrow Functions: Shorter syntax, lexical this, and immediate return.
const add = function (a, b) {
    return a + b;
};
const addArrow = (a, b) => a + b;


//lexical this
function Person(name) {
    this.name = name;
    this.sayHello = () => {
        console.log(`Hello, my name is ${this.name}`);
    };
}
const person = new Person("Harsh");
person.sayHello();

//immediate return
const double = function (x) {
    return x * 2;
};
const doubleArrow = (x) => x * 2;
console.log(doubleArrow);

//Destructuring: Object and array destructuring, and nested destructuring.
//Object Destructuring
const person8 = {
    firstName: "Harsh",
    lastName: "Dubey",
};
const { firstName, lastName } = person8;

console.log(firstName);
console.log(lastName);

//array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

//nested destructuring
const person9 = {
    Name: "Harsh",
    address: {
        city: "Kalyan",
        country: "Bharat",
    },
};
const { Name, address: { city, country } } = person9;
console.log(Name);
console.log(city);
console.log(country);

//Spread/Rest Operators: Spreading elements, gathering them, and cloning objects/arrays.
//Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

//Rest Operator
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

//Template Literals: String interpolation, multiline strings, and tagged templates.
//String interpolation
const name1 = "Dubeyji";
const greeting = `Hello, ${name1}!`;
console.log(greeting);

//multiline strings
const multiLineString = `
  This is a multiline string.
  It can span multiple lines
  without the need for line breaks or \\n.
`;
console.log(multiLineString);

//tagged templates
function customTag(strings, ...values) {
    let result = "";

    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result.toUpperCase();
}
const name3 = "harsh";
const age = 20;
const taggedResult = customTag`Hello, my name is ${name3} and I am ${age} years old.`;
console.log(taggedResult);

//Arrow Functions: Rewrite a function that calculates the volume of a sphere using arrow functions.
const calculateSphereVolume = (radius) => (4 / 3) * Math.PI * Math.pow(radius, 3);
const radius = 5;
const volume = calculateSphereVolume(radius);
console.log(`The volume of a sphere with radius ${radius} is ${volume.toFixed(2)}`);


//Destructuring: Destructure an object containing movie details and log them separately (title, director, year).
const movie = {
    title: "BhagvatGita",
    director: "Krishna",
    year: 10000,
};
const { title, director, year } = movie;
console.log(`Title: ${title}`);
console.log(`Director: ${director}`);
console.log(`Year: ${year}`);

//Spread/Rest Operators: Use the spread operator to merge two objects and then use Object.keys() on the merged object to get the keys.
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
const keys = Object.keys(mergedObject);
console.log(keys);


//Template Literals: Create a template literal for a blog post, including variables for author name, post title, and content.
const authorName = "TulsiDas";
const postTitle = "Ramcharitra Manas";
const postContent = `
Mangal bhavan amangal hari,dravahu sudashrath ajir vihari.
Mangal murati maruti nandan , sakal amngal mul nikandan.
Ram Ram kahi Ram kahi , Ram Ram kahi Ram,
Tanu pari har Raghuvar virah , Rau gye surdham.
Jehi vidhi nath hohi hith mora karhu so begi dash main tora.

  - ${authorName}
`;
console.log(postContent);

//Advanced Array Methods and Promises
//Promise Creation


//Advanced Array Methods: Create an array of objects representing students. Use find to get the first student with a grade above 90.
const students = [
    { name: 'Harsh', grade: 85 },
    { name: 'Shivam', grade: 92 },
    { name: 'Kiran', grade: 88 },
    { name: 'Prashant', grade: 95 },
];

const studentWithHighGrade = students.find((student) => student.grade > 90);

if (studentWithHighGrade) {
    console.log(`The first student with a grade above 90 is ${studentWithHighGrade.name}.`);
} else {
    console.log('No student found with a grade above 90.');
}


function delayPromise(milliseconds) {
    return new Promise((resolve, reject) => {
        if (milliseconds < 0) {
            reject(new Error('Invalid delay time'));
        } else {
            setTimeout(() => {
                resolve(`Promise resolved after ${milliseconds}ms`);
            }, milliseconds);
        }
    });
}

//  Promises: Write a function that returns a promise, resolving after a specific time. Use then, catch, and finally to handle the promise.

delayPromise(2000)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Promise operation complete.');
    });

delayPromise(-100)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Promise operation complete.');
    });

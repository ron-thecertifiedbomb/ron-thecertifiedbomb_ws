// custom script

// Variable Type -- Reference
// 1. Array
// 2. Objects
// 3. Functions

// Literals
// 1. '' / ""  ---> string literal
// 2. ``       ---> template literal
// 3. []       ---> array literal
// 4. {}       ---> object literal 

const colors = [];

// const colors = new Array();

//.push() -- add
colors.push("red");
colors.push('blue');
let newLast = colors.push();

console.log(colors);
console.log(newLast);

//.pop() -- get last element
let color = colors.pop();

console.log(colors);
console.log(color);

//.shift() -- get first elemet
let firstColor = colors.shift();
console.log(colors);
console.log(firstColor);

//.unshift() --- adds on start
let newFirst = colors.unshift('violet');
newFist = colors.unshift('green');
console.log(colors);
console.log(newFirst);

// // push() is to unshift()
// // pop() is to shift()

// // middle manipulation, [index]
colors[7] = "magenta";
console.log(colors);

delete colors[1];
console.log(colors);

colors.unshift('gold', 'platinum', 'bronze');
console.log(colors);


// .length = elements, delete will not reset the length
console.log(colors.length)

console.log('============================')

const primary = ['red', 'green', 'blue'];
const secondary = ['orange', 'yellow', 20, 'violet'];

const crayons = primary.concat(secondary);
console.log(crayons);

const metallic = ['gold', 'silver', 'bronze'];

const crayonBox = primary.concat(secondary, metallic, "white", "black");
const crazyBox = primary.push(secondary, metallic, "white", "black");
console.log(crayonBox);
console.log(primary);

console.log('============================')

// splice --> modifying an existing array, supports delete, add item in middle, edit item
const animals = ["dog", "cat", "goldfish"];
animals.splice(1, 1, "birds", "cockroach")
animals.splice(2, 1)
console.log(animals);

console.log('============================')
 // slice --> get a portion

 //              0        1      2        3        4
 const meat = ['head', 'neck', 'wings', 'legs', 'feet', 5, ['liver', 'innards']];
 const toSell = meat.slice(2);
 console.log(toSell);

 const picky = meat.slice(1, 4);
 console.log(picky);

 // toString()
 const commercial = meat.toString();
 console.log(commercial);

 console.log('============================')
 const parts = ['head', 'neck', 'wings', 'legs', 'feet'];

 // .sort(), .reverse();
parts.sort(); //ASC;
console.log(parts);

parts.reverse();
console.log(parts); //DESC;

const coll = ['apple', 'aster', 'ball', 'balls', 1.01, 1.011, 3, 5, true, false];
coll.sort();
console.log(coll);

const collection = [87, 88, 90, 93, 75, 83];
collection.sort(function(a, b) { return b - a});
console.log(collection);

// .min, .max, .apply
const grades = [95, 85, 75];
let minGrade = Math.min.apply(null, grades);
let maxGrade = Math.max.apply(null, grades);
console.log(minGrade);
console.log(maxGrade);

console.log('============================')

const myGrades = [75, 85, null, undefined, 95, 54, 67, 89, 90];
delete myGrades[2];
delete myGrades[3];
// arr.forEach(function(value, index, array) {<statements>});
let myGradeLabels = '';
myGrades.forEach(function(value, index, array) {
    myGradeLabels += `Your grade is ${value} at position ${index} on ${array}\n`;
});
console.log(myGradeLabels);
console.log(myGrades);

const gradesList = myGrades.map(function(value, index, array) {
    return `Your grade is ${value} at position ${index} on ${array}\n`;
});
console.log(gradesList);
console.log(myGrades);

console.log('============================')

// .filter() // take the elements that will pass the logic test
// const passingGrades = myGrades.filter(function(value, index, array) {
//     // code, body of function
//     // anonymous function, if your usecase is just one time use
// });

// passingGrades = myGrades.filter(my_function_name);
// const my_function_name = function (value, index, array) {
//     // code, body of function
//     // named function, if your usecase is repeating on several places
// }

const passingCutOff = function (value, index, array) {
    // 75 included, value == 75
    // >75 included, value > 75
    // value >= 75
    // // let result = value >= 75;
    // // return result;
    return value >= 75;
}

const passingMessage = function (value, index, array) {
    return `Congratulations! Your grade of ${value} is a passing mark.\n`;
}

const passingGrades = myGrades.filter(passingCutOff)
        .map(passingMessage);
console.log(passingGrades);


const passingGradesAlt = myGrades.filter(function(value, index, array) {
    return value >= 75;
}).filter(function(value, index, array) {
    return value <= 90;
}).map(function(value, index, array) {
    return `Congratulations! Your grade of ${value} is a passing mark.\n`;
}).map(function(value, index, array) {
    console.log(value);
    return value;
});

// function (...params) { statements; retun value|statement;}
// (...params?) => {}
// (...params?) => value;

// function form
const loggerFunc = function (msg, name) {
    console.log(`Hello ${name}. ${msg}`);
}

// arrow form
const loggerArrow = (msg, name) => console.log(`Hello ${name}. ${msg}`);

loggerFunc('Hello! From Arrow function', 'Lean')

// arrow func without parameters
const loggerEmpty = () => console.log('Hello! I am miss independent.');
loggerEmpty();

// arrow func with only one parameters
const loggerStickToOne = msg => console.log(`${msg}!`);
loggerStickToOne('Happy happy happy');

const loggerDoManySteps = (msg, name) => {
    console.log(`Hello ${name}! ${msg}`);
    return new Date();
};

const logs = loggerDoManySteps('Critical Error!', 'Webapp_001');
console.log(logs);

// Rewriting anonymous funtion as arrow functions
// Given:
const passingGradesAltSource = myGrades.filter(function(value, index, array) {
    return value >= 75;
}).filter(function(value, index, array) {
    return value <= 90;
}).map(function(value, index, array) {
    return `Congratulations! Your grade of ${value} is a passing mark.\n`;
}).map(function(value, index, array) {
    console.log(value);
    return value;
});

// Arrow Function Form:
// const passingGradesAltArrow = myGrades.filter((value, index, array) => value >= 75);
// const passingGradesAltArrow = myGrades.filter(grade => grade >= 75);
const passingGradesAltArrow = myGrades.filter(grade => grade >= 75)
    .filter(grade => grade <= 90)
    .map(grade => `Congratulations! Your grade of ${grade} is a passing mark.\n`)
    .map(grade => {
        console.log(grade);
        return grade;
    })
console.log(passingGradesAltArrow);

console.log('============================')

const quizResults = [85, null, undefined, 95, 75, 54, 67, 89, 90];
const scoreCutoff = score => score >= 75;
// anonymous
const quizTotal1 = quizResults.filter(scoreCutoff)
    .reduce(function(prevValue, curValue, index, array) {
        return prevValue + curValue;
    });
// function declaration using anonymous
const accummulator = function(prevValue, curValue, index, array) {
    return prevValue + curValue;
}
const quizTotal2 = quizResults.filter(scoreCutoff)
    .reduce(accummulator);
// using arrow function
const quizTotal3 = quizResults.filter(scoreCutoff)
    .reduce((total, value) => total + value)
    // .map(x => console.log(x));

const quizTotal4 = [quizResults.filter(scoreCutoff)
    .reduce((total, value) => total + value)]
    .map(x => console.log(`<h1>${x}</h1>`));

console.log('============================')
// .some(), .every()
const removeEmptyScores = score => score !== null && score !== undefined;

const areAllPassing = quizResults.filter(removeEmptyScores)
    .every(score => score >= 60);
console.log('Are all Passing: ', areAllPassing);

const didSomeonePass = quizResults.filter(removeEmptyScores)
    .some(score => score >= 98);
console.log('Did someone passed: ', didSomeonePass);

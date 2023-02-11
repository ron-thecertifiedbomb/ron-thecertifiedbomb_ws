// custom script
// alert('Welcome to JS')

// Output Stream

// 1. Console
console.log("Welcome to JS - CONSOLE");
console.log("Welcome to JS - CONSOLE", "2nd value");
console.error("ERROR - Welcome to JS");
console.log({'lean':'jerios', 'realjoy': 'dulla'});

// 2. Alert
// alert('Welcome to JS - ALERT 1');
// window.alert("Welcome to JS - ALERT 2");

// 3. Document
document.write('Welcome to JS DOCUMENT');
document.write('<h1>Welcome to JS DOCUMENT</h1>');

// 4. Replace a targets innerHtml
document.getElementById('holder').innerHTML = 'Welcome to JS - INNER HTML';
document.getElementById('holder').innerHTML = '<h1 class="text-primary">Welcome to JS - INNER HTML</h1>';

// document.getelementbyid('holder').innerHTML = '<h1 class="text-primary">Welcome to JS - INNER HTML - ALL Lowercase</h1>';

// document.getElementById('holders').innerHTML = '<h1 class="text-primary">Welcome to JS - INNER HTML</h1>';


// if(3 > 4) {
//     console.log("A is larger");
// } else {
//     console.log("B is larger");
// }

// if(3>4){console.log("A is larger")}else{console.log("B is larger")}


// single quote ('')
// double quote ("")
// back tick (``)

console.log("Lean Jerios");console.log('Lean Jerios');console.log("Lean 'Ian' Jerios");


console.log('Lean "Ian" Jerios');
console.log("Lean \"Ian\" Jerios");
console.log('Lean \'Ian\' Jerios');
console.log(`Lean "Ian" Jerios`);

var nickname = 'Ian';
console.log(`Lean "${nickname || 'Joey'}" Jerios Lean "${nickname}" Jerios`);
console.log('Lean "' + nickname + '" Jerios' + 'Lean "' + nickname + '" Jerios');

// variable
// how to declare a variable

// var
// let 
// const

// syntax

// {reserve_word} {name_of_var} [; | = {value}]
// {var|let|const} {name_of_var} [; | = {value}[;]]

// naming var
// name_of_var = [a-zA-Z0-9_$]; a, _

var name;
console.log('name is defined');
// var 86tyyy;
var _tyyy;
var $tyyy;

// var names are case sensitive

let a = 7; 
let A = 8;

console.log(a == A);

// variable with initial value
var name2 = 10;

const gender = 'male';

// Operators
// + , unary +, binary + addition, binary + string concatenation
// Unary - one operand
// Binary - two operand
// Tertiary - three operand

let c = console.log;

//1. 
let age = +37;
console.log(age);
console.log(typeof age);

let age2 = +'37';
console.log(age2);
console.log(typeof age2);

//2.
let sums = 3 + 5;
console.log(sums);

//3.
let fullName = 'Lean ' + 'Jerios';
c(fullName);

// -, unary, binary subtraction
let deviation = -3.7;
c(deviation);
c(typeof deviation);

let dev2 = -'5.5';
c(dev2);
c(typeof dev2);
c(dev2, typeof dev2);

// *, multiplication
let product = 5 * 4;
c(product, typeof product)

// /, division
let quotient = 20/4;
c(quotient);
let quo2 = 10/3;
c(quo2);

// **, raised by, exponent
let dividend = 1000**3;
c(dividend);

// ++, increment
let count = 5;
let counter = count++;
c('count', count);
c('counter', counter);

let digit = 5;
let digiter = ++digit;
c('digit', digit);
c('digiter', digiter);

// --, decrement
let revcount = 5;
let revcounter = revcount--;
c('revcount', revcount);
c({revcounter});

let revdigit = 5;
let revdigiter = --revdigit;
c({revdigit});
c({revdigiter});

// %, remainder, modulo
c(21 % 5)
c(22 % 7)
c(37 % 12)

// PEMDAS
c(3 + (7 - 2));
c((7 - 2) + 3);
c((7 - 2) + 3**7);
c(3**7);
c(3 * 5 + 3 - 4 / 2);

// Assignment
// {name_of_var} {op}= {value}
// var = receiver
// value = value to be assignment
var aa = 5;
//var bb {op}= 6;

// var bb += 6;
var bb = 1;
bb += 6;
c('bb = bb + 6');
c('bb += 6');
c(bb)
c((bb += 1) === (bb = bb + 1))

let cc = 2;
cc -= 1;
c(cc);

// = ; assignment operator
// == ; value comparison; loose comparison
// === ; value and type comparison; strict comparison

c(3 == 3);
c(typeof 3);
c('3' == Number(3));
c('3' === Number(3));

// +=
// b = b + 2
// b += 2

// -=
// b = b - 2
// b -= 2

// *=
// b = b * 5
// b *= 5

// /=
// b = b / 5
// b /= 5

// %=
// b = b % 2
// b %= 2

// **=
// b = b ** 3
// b **= 3

//++
//--

// b = b + 1
// b += 1
// b++ or ++b


// b = b - 1
// b -= 1
// b-- or --b

// COMPARSION OPERATOR
// == equal to 
// 3 == '3'

// === equal value & equal type
// 3 === 2

// != not equal
// 3 != 2

// !== not equal value & not equal type
// 3 !== 2

// > greater than
// < less than

// 7 > 3
// 8 < 7

// >= greater than or equal
// <= less than or equal

// 7 >= 3
// * <= 3

// ? ternary operator

// {condition} ? true_output : flase_output

let bal = 3 > 2 ? 'true_output' : 'false_output';
c({bal})
bal = false ? 'true_output' : 'false_output';
c({bal})

// LOGICAL OPERATORS

// && logical and
// || logical or
// !  logical not

c(true && (5 > 2));
c(false && (5 > 2));

// 1 && 1 = 1
// 1 && 0 = 0
// 0 && 1 = 0
// 0 && 0 = 0

// 1 || 1 = 1
// 1 || 0 = 1
// 0 || 1 = 1
// 0 || 0 = 0

// !1 = 0
// !0 = 1

// logical OR - default value
let ee = 7;
let ff = ee || 10;
c({ee, ff})

ee = undefined;
ff = ee || 10;
c({ee, ff})

// logical AND - short circuit evaluation
if (true && (false)) {
    c('true branch')
} else {
    c('false branch')
}


// BITWISE OPERATORS
// & and
// | or

// DATA TYPES
// 8 Data Types
// 1. String - prim
// 2. Number - prim
// 3. Bigint 
// 4. Boolean True/False - prim
// 5. Undefined - prim
// 6. Null - prim
// 7. Symbol - prim

// 8. Objects - reference
// 9. Array - reference
// 10. Function - reference

// String
// '', "", ``
var ss = 'string';
c(typeof ss)

// Number
// 12, 12.5, 2e2, 2e-2
c(12);
c(12.5);
c(2e2); // 2 x 10**2
c(2e-2); // 2 x 10**-2

// BigInt
// BigInt(9007199254740991); 
let bi = BigInt(9007199254740991);
let ci = bi / BigInt(7);
c({bi, 'bi_type': typeof bi, ci});
let bi2 = 9007199254740991;
let ci2 = bi2 / 7.6;
c({bi2, 'bi2_type': typeof bi2, ci2});

// Boolean
// true or false
c(1 == 2);
c('lean' == 'lean');


// Undefined, Null, Empty String
let x ; 
c(x);

let y;
y = 1;
y = undefined;
c(y, typeof y);

let z;
z = null;
c(z, typeof z);

let za;
za = '';
c(za, typeof za);

// Symbol
let sym = Symbol('first_symbol');
c(sym, typeof sym);

// Object
let obj = {};
c(obj, typeof obj);
// json

let customer = {
    'fist_name' : 'Lean',
    'age' : 30,
    'role' : ['role1', 'role2']
};

c(customer);
c(typeof customer);

let stu1 = 'Arthur';
let stu2 = 1004.57;
let stu3 = true;

let pupils = {
    'stu1' : stu1,  // stu1
    'stu2' : stu2,
    'stu3' : stu3
}

c(pupils);

pupils = {stu1, stu2, stu3};
c(pupils);

// Array
let arr = [];
c(arr);
c(typeof arr);

arr = ["apple", "pineapple", 88.88];
c(arr);
c('length', arr.length);
c(arr[0], typeof arr[0]);
c(arr[2], typeof arr[2]);
c(arr[-1]);

c(arr[arr.length-1]);

// math, english, physics
// first, second
// ass, quizes
let arrx = [[88, 90], [75, [77, 79]], [87, 92]];
c(arrx[0]);
c(arrx[0][0]);
c(arrx[1][1][1]);
c(arrx);

let webtech = {
    'FE' : {
        'style' : 'css',
        'tags' : 'html',
        'inteaction' : 'js'
    },
    'Technology' : 'web'
}
c(webtech);
c(webtech.FE.tags);
c(webtech['FE']);
c(webtech['FE']['tags']);
c(webtech.FE['tags']);

let arrObj = {
    1 : 'Lean',
    2 : 'Jerios'
};

let arrSym = {
    fistName : 'Lean',
    lastName : 'Jerios'
}

c(arrObj);

// function <name_of_func> ([params*]) { <statements>; [return <value>;]}
// * - zero or more
// + - 1 or more
// I P O
// Input ===> params
// Process ===> statements
// Output ===> return

function logDate () {
    console.log(new Date());
};

logDate();


(function selfLoggingDate () {
    console.log(new Date());
})();

// invocation ===> <func>() or <func>(5)
// self invocation ==> (<func>)() or (<func>)(5);

function add (op1, op2 = 0) {
    let sum;
    sum = op1 + op2;
    return sum;
}

c(add(1));
c(add(3,4));

let sum = add(5,6);
c(sum);

function add_v2 (op1, op2 = 0) {
    return op1 + op2;
}

let sum_v2 = add_v2(5,6);
c(sum_v2);


// <let|var|const> <name_of_func> = function ([params*]) { <statements> [return value;]}
let multiply = function (op1, op2 = 1) {
    return op1 * op2;
}

c(multiply(5, 2));

let generic = multiply;
c(generic(5, 2));



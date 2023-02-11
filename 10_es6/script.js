// custom script
// alert('Welcome to JS')

/* custom style */

// ES5
const car = {
    status: 'success',
    code: '200',
    data: [{
        make: 'Toyota',
        model: 'Camry',
        year: 2020
    }]
}

var carMake = car.data[0].make;
var carModel = car.data[0].model;
var carYear = car.data[0]['year'];


// ES6 
let {make, model, year} = car.data[0];

const user = {
    name: 'Lean Jerios',
    type: 'admin',
    region: 'southeast-ap-1',
    id: '7fadjf9s8df7sad987fasf9sfa',
    token: 'fasdf7f90asjfw09eruewhr0ewre',
    lastLogin: '20220208T203820+0080',
    model: 'GTX-9080'
}

let {name, token, id} = user;
let {region:zone, lastLogin} = user;
let {model:userModel} = user;

// destructuring on array
const fruits = ['apple', 'mango', 'banana'];
let [red, yellow, green] = fruits;


// ... ==> spread operator

const colors = ['red', 'purple', 'violet'];
const crayonBox = {...colors};
const crayonLoop = [...colors];
const logger = function(...msg) {
    console.log(msg);
}
// custom script
// alert('Welcome to JS')

// console.log()
// console.dir()

const mockAPI = () => {
    return {
        success: true,
        code: 200,
        data: [
            {item: 'book', price: 2.99},
            {item: 'pen', price: 0.25}
        ]
    };
}


// console.assert()
console.assert(3 == 4, {msg: 'Condition is false'});

const data = mockAPI();
//expectation mo ay book < 2;
console.assert(data.data[0].price <= 2, {msg: 'Book is above pricing threshold'});

// console.clear()

for (let i = 0; i < 5; i++) {
    console.count('lean');
}
console.count('jerios');
const colors = ['red', 'blue', 'green', 'blue', 'green', 'blue', 'green', 'white'];
colors.forEach(color => {
    // .....
    console.count(color);
});

console.clear();

// console.debug()
console.debug('This is only a debugging line. . .')
console.log('This is an info level log');
console.warn('This is a warning msg');
console.error('This is an error msg');

console.log('This is another info level log')

console.time(); // timer
let sum = 0;
for (let i = 0; i < 500; i++) {
    console.log('This is a telemetry msg, from my script.');
    sum++;
}
console.timeEnd(); // timerEnd, duration (ms)

function doWorker (logging = true) {
    for (let i = 0; i < 50; i++) {
        logging ? console.debug('This is a telemetry msg, from my script.') : null;
        sum++;
    }
    console.trace();
}

function triger() {
    doWorker(false);
}

function outerTriger() {
    triger();
}

function manager() {
    outerTriger();
}

manager();

// let logging_is_on = 'logging_is_on';
// console.time(logging_is_on);
// for (let i = 0; i < 100; i++) {
//     doWorker();
// }
// console.timeEnd(logging_is_on);

// let logging_is_off = 'logging_is_off';
// console.time(logging_is_off);
// for (let i = 0; i < 100; i++) {
//     doWorker(false);
// }
// console.timeEnd(logging_is_off);

// Higher Order Component/Function

// g(f(x))

const testRunner = (testName, testArtifact, iteration = 1) => {
    console.time(testName);
    for (let i = 0; i < iteration; i++) {
        (testArtifact)();
    }
    console.timeEnd(testName);
}

// testRunner doWorker with logging
// testRunner('with_logging', doWorker, 100);

let hand = 'rock';
let opponent = 'scissors';

console.group();
if(hand == 'rock') {
    console.log(`Player picked rock.`);
    console.group();
    if(opponent == 'rock') {
        // draw
        console.log(`Opponent also chooses rock, it is a draw!`);
    } else {
        console.log(`Opponent does not choose rock, evaluating more!`);
        console.group();
        if (opponent == 'scissors') {
            // win
            console.log(`Opponent chooses scissors, opponent wins!`);
        } else {
            console.log(`Opponent does not choose scissors, evaluating more!`);
            console.group();
            if (opponent == 'paper') {
                // loose
                console.log(`Opponent chooses paper, you win!`);
            }
            console.groupEnd();
        }
        console.groupEnd();
    }
    console.groupEnd();
} else {
    console.log(`Doesn't support hand other than rock!`)
}
console.groupEnd();

// array ~~~ object
const crayons = ['red', 'orange', 'blue'];
const box = {0: 'red', 1: 'orange', 2: 'blue'};
console.table(crayons);
console.table(box);

console.assert(crayons[0] == box[0], 'not alike');


const student = {
    firstName: 'lean',
    lastName: 'jerios',
    studentId: '12dlu7'
}
console.table(student);

const students = [{
    firstName: 'lean',
    lastName: 'jerios',
    studentId: '12dlu7'
},
{
    firstName: 'elias',
    lastName: 'jeron',
    studentId: '87fal7'
}
]
console.table(students);

console.clear();

// error handling, try catch
// try catch
// try finally
// try catch finally
// throw
// new Error()
// typeof vs instanceof


function earlyReturn() {
    let item = new Error('Item error');
    return true;
    let item2 = item.message; // unreachable
    console.log(item2);
}

function brokenAPI() {
    throw new Error('This is a generic msg.');
}

function brokenCustomAPI() {
    throw new CustomError('This is a custom error, waaahhh....')
}

class CustomError {
    constructor(msg) {
        this.msg = msg;
        this.name = 'CustomError';
        this.stack = [];
    }
}

class UnknownError {
    constructor(msg) {
        this.msg = msg;
        this.name = 'UnknownError';
        this.stack = [];
    }
}


function testTryCatch() {
    // muted errors
    try {
        brokenAPI();
    } catch (e) {}

    // handled and logged
    try {
        brokenAPI();
    } catch (e) {
        console.log(e);
    }

    // handled by instance, and logged
    try {
        brokenCustomAPI();
    } catch (e) {
        if(e instanceof Error) {
            // do some stuff
            console.log(`Type Error handled correctly`)
        } else if(e instanceof CustomError) {
            // do some stuff
            console.log(`Type CustomError handled correctly`)
        } else {
            console.log(`Unrecognized Error, please seek admin help`);
        }
        console.log(e);
    }

    // finally try, is not handling, pero you always do finally
    try {
        try {
            brokenAPI();
        } finally {
            // sendAdminEmail();
            console.log(`I have already informed the sysadmin, no worries`);
        }
    } catch (e) {}
    

    try {
        brokenAPI();
    } catch (error) {
        // do handling here
    } finally {
        // sendAdminEmail();
        console.log(`I have already informed the sysadmin, no worries`);
    }


}

testTryCatch();

console.log('This should not be displayed. If it does, error is handled!');


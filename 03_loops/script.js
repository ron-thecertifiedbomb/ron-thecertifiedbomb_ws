// custom script

// FOR LOOP
// for (initialization; terminal condition; delta) { <statements>; }

for(let i = 0; i < 12; i++) {
    console.log(`Current value of index/counter is ${i}`);
}

// for(let i = 0; i < 12; i--) {
//     console.log(`Current value of index/counter is ${i}`);
// }

let willContinue = true

async function execInfiniteLoop () {
    for(1;1;) {
        await sleep(2000);
        if(willContinue) {
            console.log('I am still alive. ' + new Date() );
        } else {
            break;
        }
    }
}

// break; exit loop
// continue; skip current iteration

function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}
console.log('=================================')

for(let i = 0; i < 12; i++) {
    if(i == 5) break;
    console.log(`Current value of index/counter ${i}`)
}
console.log('=================================')

for(let i = 0; i < 12; i++) {
    if(i == 5) continue;
    console.log(`Current value of index/counter ${i}`)
}
console.log('=================================')


// FOR IN LOOP
// for (<key> in <Object>) { <statements|break|continue>}

let human = {
    hands: 2,
    legs: 2,
    eyeColor: 'blue',
    alive: true,
    height: 175,
    weight: 68
}

// key: hands
// value: human.hands ===> 2
// value: human['hands'] ===> 2

for (let key in human) {
    console.log('key:', key);
    console.log('value:', human[key]);
}

console.log('=================================')

// FOR OF LOOP
// for (<key> of <Iterables>) { <statements|break|continue>}

let crayons = ['Red', 'Blue', 'Orange', 'Black', 'Green'];

for(let color of crayons) {
    console.log(`Current crayon is color ${color}`);
}

console.log('=================================')

let dictionary = 'fdgreytrtbfgytry4536567987;o[oljh,hjryta5675ytry56455t65';
for (let char of dictionary) {
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') continue;
    console.log(`Current character is '${char}'`)
}

console.log('=================================')
let surname = 'Jerios';
for(let letter of surname) {
    console.log(`Current letter is '${letter}'`)
}
console.log('=================================')

// WHILE LOOP
// while (<condition>) { <statements|break|continue>}

// while(1) {}
// while(true) {}

let counter = 10;
while (counter > 0) {
    console.log(`Current counter value is ${counter}`);
    counter -= 3;
}

console.log('=================================')

for(let i = 10; i > 0; i -= 3) {
    console.log(`Current counter value is ${i}`);
}

console.log('=================================')

// DO WHILE LOOP
// do {<statements|break|contine>} while (<condition>)

let tally = -1;
do {
    console.log(`Current tally value is ${tally}`);
    tally--;
} while (tally > 0);

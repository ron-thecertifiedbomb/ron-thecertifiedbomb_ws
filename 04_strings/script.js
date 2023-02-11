// custom script


// Escape sequence is introduced by \ (backslash)
let fragment = 'Happy Valentine\'s Day';
console.log(fragment);

fragment = 'Happy \tValentine\'s \r\nDay';
console.log(fragment);

fragment = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
Obcaecati totam at fugit reprehenderit ipsum? Molestiae accusantium, \
quia eaque, id in, sed temporibus deserunt cum natus dicta quod modi \
aliquid facere.'
console.log(fragment);

console.log(typeof fragment);

console.log('===================================');

// new Type(...args)

let word = new String('Valentine');
console.log(word);
console.log(typeof word);
console.log(word.valueOf());

// STRING properties
// .length

// STRING methods
// .toUpperCase()

let stringX = {
    value: 'Love',
    length: 4,
    allCaps: function() { return this.value.toUpperCase() },
    clear: function() {this.value = undefined; this.length = 0;}
}

let instance = stringX;
console.log(instance.value);
console.log(instance.allCaps());
instance.clear();
console.log(instance.value);

console.log(5/0)
console.log(-5/0)
console.log(typeof (5/0))
console.log('R' + 7)
console.log(undefined + 7)
console.log(null + 7)

let gauge = new Number(7);
console.log(gauge, typeof gauge);
console.log(gauge.valueOf())
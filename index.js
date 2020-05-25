console.log('Hello my name is Cornelia');

var fruits = ['apple', 'banana', 'kiwi'];

fruits.push('orange');
console.log(fruits);
fruits.pop();
console.log(fruits);

var animals = ['monkey', 'horse', 'dog'];

console.log(animals.sort());
animals.unshift('cat');
console.log(animals);


var myString = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
console.log(myString.split('/').join('\n'));

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var result1 = a + b + Number(c) + Number(d) + e;
console.log(result1);

var f = '1';

var g = 15;

var h = 8;

var i = "1";
var result2 = Number(f) * g * h * Number(i);
console.log(result2)

console.log(result1 / result2);
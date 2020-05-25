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
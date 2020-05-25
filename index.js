
 // Basic Exercise 2
console.log('Hello my name is Cornelia');

// INTERMEDIATE EXERCISE 2
var fruits = ['apple', 'banana', 'kiwi'];

fruits.push('orange');
console.log(fruits);
fruits.pop();
console.log(fruits);

var animals = ['monkey', 'horse', 'dog'];

console.log(animals.sort());
animals.unshift('cat');
console.log(animals);

//INTERMEDIATE EXERCISE 3
var myString = 'mango/cherries/kiwi/grapes/pear/peach/orange/lemon';
console.log(myString.split('/').join('\n'));

// ADVANCED EXERCISE 1
var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var result1 = a + b+ Number(c) + Number(d) + e;
console.log(result1);



// ADVANCED EXERCISE 2

var multidimensionalArray = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
// 11, 25, 17, 27, 0

console.log(   multidimensionalArray[1][1],
                multidimensionalArray[4][2],
                multidimensionalArray[5][3],
                multidimensionalArray[2][3],
                multidimensionalArray[2][1]
            );

// CHALLENGE EXERCISE 1
 var multidimensionalArray2 =   [["Vienna", "is", "a", "nice", "city"],
                                ["Vienna", "is", "a", "nice", "city"],
                                ["Vienna", "is", "a", "nice", "city"],
                                ["Vienna", "is", "a", "nice", "city"],
                                ["Vienna", "is", "a", "nice", "city"]];

 console.log(multidimensionalArray2[0][0],
            multidimensionalArray2[1][1],
            multidimensionalArray2[2][2],
            multidimensionalArray2[3][3],
            multidimensionalArray2[4][4],

             );




 // CHALLENGE EXERCISE 2

var myString2 = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its " +
     "$HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$" +
     "that$do$modify$values.$This$mechanism's$promise$is$expressed$as$\"properties $flow$down;$actions$flow$up\".";

console.log(myString2.split('$').join(' '));

// EXTRA EXERCISE 1

 var myString3 = 'Hey there, i am a javascript developer, and i live in vienna';
 myString3[11].toUpperCase();
 console.log(myString3[11]);
 console.log((myString3.substr(11, 26)) + '.');


 var fruits2 =['apple', 'banana', 'kiwi'];
 fruits2.splice(2,0,"orange","strawberry");
 console.log(fruits2);





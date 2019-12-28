// *****Object, Functions and 'this'
// *'this' references the Object that is executing the current function.
// **very simple rule of thumb.
// --IF that function is the part of an Object we call that function a method, right? So if that function is a method in an Object *'this' references that Object itself.
// --IF that function is regular function which means its not part of an Object *'this' reference in the global Object which is the window Object in the browsers.

// method --> Object
// function --> global ( window(in browsers), global(in node) )

// function a() {
//   console.log(this);
//   this.newVariable = 'Hello Lovers';
// }

// var b = function () {
//   console.log(this);
// };

// a();

// console.log(newVariable);

// b();

// var c = {
//   name: 'The c Object',
//   log: function () {
//     var self = this;

//     self.name = 'Updated c Object';
//     console.log(self);

//     var setname = function (newname) {
//       self.name = newname;
//     };
//     setname('Updated again! the c Object');
//     console.log(self);
//   }
// };

// c.log();





// *****Arrays Collections of Everything.
// so basicly array can hold everything 'number, booleans, Object, function and string'
// var Arr = [
//   1,
//   false,
//   {
//     name: 'chery',
//     address: '123 main st'
//   },
//   function(name) {
//     var greeting = 'Hello ';
//     console.log(greeting + name);
//   },
//   'The Cold'
// ];

// console.log(Arr);
// Arr[3](Arr[2].name);




// *****'argument' and spread
// *the concept of arguments is just in general, is just another name for the  parameters you can pass to a function. *so you could say your parameters/ so can also say your arguments. thats really in the case of any programming language that has functions.
// *However, javascript gives you a keyword of that same name which contains them all.


// function greet(firstname, lastname, language) {

//   language = language || 'en';

//   if(arguments.length === 0) {
//     console.log('missing parameters');
//     console.log('-----------------');
//     return;
//   }

//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log('arg 0: ' + arguments[0]);
//   console.log('------------------');

// }

// greet();
// greet('Machaela');
// greet('Machaela', 'Larsen');
// greet('Machaela', 'Larsen', 'en');





// ******function overloading

// function greet(firstname, lastname, language) {

//     language = language || 'en';

//     if(language === 'en') {
//       console.log('Hello ' + firstname + ' ' + lastname);
//     }

//     if(language === 'es') {
//       console.log('Hola!' + firstname + ' ' + lastname);
//     }
// }

// function greetEnglish(firstname, lastname) {
//   greet(firstname, lastname, 'en');
// }

// function greetSpanish(firstname, lastname) {
//   greet(firstname, lastname, 'es');
// }

// greetEnglish('panda', 'nawari');
// greetSpanish('panda', 'nawari');





// *****Syntax parsers

// javascript engine reading your code character by character, using a set of rules for whats valid syntax and deciding what it is that you intend. And thats all happening before your code even executed, so it can make changes if it wants to the code that youve actually written.

// return; // read from left to right.





// ***** Automatic Semicolon Insertion
// you should allways put curry brackets in the same line as 'return' so javascript engine doesnt put ';' it in automatic and get undefined

// function getPerson() {
//   return {
//     firstName: 'Hana'
//   };
// }

// console.log(getPerson());




// *****Whitespace
// you can use whitespace very liberally to clearify your code.
// To Explain - To Understand What it is For.

// var 

//   // the first name of the person
//   firstName, 

//   // the last name of the person
//   lastName, 

//   // the language
//   // can be 'en' or 'es'
//   Language;


// var person = {
//   firstName: 'Hana',
//   lastName: 'utanika'
// }

// console.log(person);





// *****Immediately Invoked Functions Expressions
// function Statement

// function greet(name) {
//   console.log('Hello ' + name);
// }

// greet('Hana');

// // Using a Function Expression
// var greetFunc = function (name) {
//   console.log('Hello ' + name);
// };

// greetFunc('John');

// // Using An Immediately Invokes function Expression (IIFE)
// var greeting = function (name) {
//   return 'Whatsup ' + name;
// }('Hana2');
// console.log(greeting);


// // Invokes With Parentheses
// // Which one you choose is up to you but in parentheses is easier to understand what it is
// var firstName = 'Lim';

// (function(name) {

//   var greeting = 'Inside IIFE: Hello';
//   console.log(greeting + ' ' + name);

// }(firstName)); // IIFE





// ******Understanding Closures
// Closure are simply a future of the Javascript 

// function greet(whattosay) {

//   return function(name) {
//     console.log(whattosay + ' ' + name);
//   };
// }

// var sayHi = greet('Hi');
// sayHi('Hanabi');



// ***** Closures 2 
// Should rewatch function expression also to have beeter understand
// i is 3 so fs[0], fs[1], fs[2] = 3 // bcuz it has the same outer environment reference because it was created the same place as the first function (it the same spot in memory as the first one)
// learn first class functions too and practise more
// this isnt working as u wanted it to be

// function buildFunctions() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       function() {
//         console.log(i);
//       }
//     );
//   }
//   return arr;
// }

// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

// // functions2 new javascript way (pref)
// function buildFunctions2() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     let j = i;
//     arr.push(
//       function() {
//         console.log(j);
//       }
//     );
//   }
//   return arr;
// }

// var fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();


// // ES5 Old Way - this is a way to use closures(practise)
// function buildFunctions3() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j);
//         }
//       }(i))
//     );
//   }
//   return arr;
// }

// var fs3 = buildFunctions3();
// fs3[0]();
// fs3[1]();
// fs3[2]();


// ***** Function Factories
// *** means a function that return or makes other thing for us.
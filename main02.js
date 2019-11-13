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

function greet(name) {
  console.log('hello' + name);
}

greet();

var greetFunc = function(name) {
  console.log('hello' + name);
};
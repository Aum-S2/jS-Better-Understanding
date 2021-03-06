// function b() {
//   console.log('called b');
// }

// b();

// console.log(a);

// var a = 'hello world!';

// console.log(a);



// *****functions, context, variable Environments

// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);



// *****The Scope Chian

// function a() {

//   function b() {
//     console.log(myVar);
//   }

//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();
// b();



// *****Block scoping

// if (a < b) {
//   let c = true;
// }



// *****Asynchronous 
// *Any events that outside of the engine get place into the queue and if execution stacks is empty and if javascript isnt working on anything else currently, it will process those events*
// Asynchronous callbacks are possible in javascript. *but asynchronous part is really about What is happening outside the javascript engine *and javascript via this events loop, via this list of events that are happening, when its ready, will look at events and process them, but it does so synchronously

// **Short - First all it does it just running its normal code, and when its all done, it will then go and look at the event queue, *AND if its already done, then its will continue to watch that event queue in the loop, the event loop. *Thats what thats called, the continuous check. *And the when it sees something, if there supposed to be a function, if theres a handle, if theres a listener thats supposed to run then that event appears in the event queue, IT WILL RUN

// function waitThreeSeconds() {
//   var ms = 5000 + new Date().getTime();
//   while (new Date() < ms){}
//   console.log('finished function');
// }

// function clickHandler() {
//   console.log('click Event!');
// }

// // *listen for the click event*
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');



// *****Operators *Operator a special function that is syntactically (written)

// var a = 4 + 7;
// var b = 5 < 2;
// var c = 6 - 3;
// var d = 9 > 8;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Operator presedence just means which operator function gets called first *Functions are called in order of precedence (HIGHER Precedence wins)
// *take a look at operator precedence table*
// The following table is ordered from highest (20) to lowest (1) precedence.
// higher number first.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// var a = 4 + 5 * 6;
// console.log(a);
// var b = (4 + 5) * 6;
// console.log(b);

// var a = 2, b = 3, c = 4, d = 5;

// a = b = c = d;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



// ***conceptual aside: Coercion

// var a = 1 + ' 2';
// console.log(a);


// ***Comparison Operators
// Look At Operator precedence Table
// 3 < 2 = false / false = 0 (true = 1) / so 0 < 1 = true

// console.log(3 < 2 < 1); 

//*YOU SHOULD USE === Instead of == / and !== Instead of != / 99% f the time.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// var a = 0;
// var b = false;

// if (a === b) {
//   console.log('It Equal My Friend!');
// } else {
//   console.log('NOPE!, YOU ARE WRONG');
// }



// *****Existence And Booleans
// 0 = false
// var a;

// // goes to internet and look for value

// a = 0;

// if (a || a === 0) {
//   console.log('something is there');
// }




// *****Default Values

// function greet(name) {
//   name = name || '<Set Your Name!>';
//   console.log('hello ' + name);
// }

// greet('Robinn');
// greet();




// Framework Aside: Default values

// console.log(libraryName);




// ********************************************************

// ***** Objects and The Dot
// *Objects are values pairs sitting in memory. they can contain other name values pairs, that is, other Object.
// *They can contain other properties, string, Booleans, Numbers. **They can also contain functions, Which are called Methods

// *** (This is not the preferred way to created a new Object).
// you can should using the dot . instead of bracket[] operator (*Its very clean, clear and also easier to debug and find problems)
// *(the preferred appoach is to using the dot operator)

// var person = new Object();

// person["firstname"] = "Nami";
// person["lastname"] = "Waluine";

// var firstnameProperty = "firstname";

// console.log(person);
// console.log(person[firstnameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "11 main st.";
// person.address.city = "Ohaio";
// person.address.state = "OH";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);




// *****Objects and Object Literals
//  {} is the same as you type *new Object()* -- a short hand^ * Its called an Object Literal

// var Rins = { 
//   firstname: "Rins", 
//   lastname: "xiuoso",
//   address: {
//     street: '67 kleang st.',
//     city: 'baiart',
//     world: 'shabfu'
//   }
// };

// function greet(person) {
//   console.log('hi ' + person.firstname);
// }

// greet(Rins);

// // we can create an Object on the fly
// greet({
//   firstname: 'Sara',
//   lastname: 'Jensen'
// });

// Rins.address2 = {
//   street: "123 main st."
// };




// *****Faking namespace

// var greet = "hello";
// var greet = "hola!";

// console.log(greet);

// var english = {
//   greetings: {
//     basic: "Hello!"
//   }
// };

// var spanish = {};

// spanish.greet = "hola";

// console.log(english);




// *****JSON And Object Literals.
// JSON stand for "Javascript Object Notation"
// Object Literals And JSON string theres two diffent thing.
// Javascript does have ultilities to allow you to tranfer between the two.

// var objectLiterals = {
//   firstname: "natsu",
//   isAProgrammer: true
// };

// console.log(JSON.stringify(objectLiterals));


// *In previous years, data was sent over the internet in various formats and the format that was landed upon for a while was XML.

// *this is just exemple (this is not the valid javascript -- across the wire the internet)
// **but the problem is when you dealing with the download times, how fast something is and how much data, how much bandwidth are you using. This is alot of extra unnecessary characters that make the amount of data that you are sending larger.

// <Object>
//   <firstname>natsu</firstname>
//   <isAProgrammer>true</isAProgrammer>
// </Object>

// **So what people did was looked at the Javascript Object Notation and found out, that would make a really great way to send the data.
// nowdays we sending data via the JSON format. its just string of data but it looks like Object Literal syntax expect for some differences.
// for exemple, properties have to be wrap in the quotes.
// This is valid Object Literal Syntax

// JSON is technically a subset of the Object Literal Syntax. 
// Meaning that anything that is JSON valid is also valid Javascript Object Literal syntax. BUT not all Object Literals syntax is valid JSON. so JSON has stricter rules of what it can be.
// SO JSON, Javascript Object Notation, isnt really a part of Javascript. but because of its so popular and its so easy for Javascript to understand what this is, Javascript does come with some built in functionality to transfer between the two 

// var jsonValue = JSON.parse('{ "firstname": "natsu", "isAProgrammer": true }');

// console.log(jsonValue);




// ***** Functions are Object
// this greet function, and when it was created, this function Object was put in the memory, in this case, onto the global Object, and it had a name(greet), so the name property is greet, because that whats i named my function.
// and its has a code property that contains the code that i wrote, the body of my function.
// and so if i was to call greet using the parentheses(), that invokes that code, causes it run, causes that execution context to be created, etc, etc.

// ** YOU have to think of a function as more than just this container of code. its a Object, and as such, you can pass it around, it sits in the memory in specific location its has properties, its has methods. WHY? because in Javascript functions are Objects.


// function greet() {
//   console.log('Hello World');
// }

// greet.language = 'english';
// console.log(greet.language);




// *****Function Statements And Function Expressions

// Function Statement, Hoisted into memory, during the creation phase of the execution context

// greet();

// function greet() {
//   console.log('Hello');
// }

// Function Expression, thats used as part of equals operator, to set it to a variable. then we can use that variable to invoke it.

// var annoymousGreet = function() {
//   console.log('Hi!');
// };

// annoymousGreet();

// Function Expression, that im passing a function, as a parameter to another function. and then i can use it.
// This concect of first class functions then, where you can pass functions around, gives functions to another functions, **use them like you do variables.

// function log(a) {
//   a();
// }

// log(function() {
//   console.log('im Object');
// });




// *****By Value vs By Reference

// By Value (primitives)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// By Reference (All Object (Including Functions))
// we have Object in memory, with a property called greetings,  whose value is 'Hello My Friend!' and i change that properties value to 'WhatsUP'. **I MUTATE.
// var c = { Greetings: 'Hello My Friend!'};
// var d;

// d = c;
// c.Greetings = 'WhatsUP'; // Mutate - means to change something.

// console.log(c);
// console.log(d);

// By reference (Even as Parameters)
// We understand that just like equals, passing an Object to a function means theyre being passed by reference, NOT by value.

// **so i have this *d* variable. its pointing at the same memory space as *c* (as now its set equal to WhatsUP).
// **so i will call *changeGreeting* and i will pass d to this function *changeGreeting* so d will be passed to here(), that will be what (obj) is. 
// **so, (obj) will simply point to the same memory location as *d* and *d* is already points to the same memory location as *c*
// **so when this is mutated, meaning go update that object that siting in there in that memory location, and i go output these (c and d).

// function changeGreeting(obj) {
//   obj.Greetings = 'Hola!';
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // Equals operator sets up new memory space (new address)
// c = { Greetings: 'Howdy!'};

// console.log(c);
// console.log(d);
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



// Operators *Operators are functions

var a = 4 + 7;
var b = 5 < 2;
var c = 6 - 3;
var d = 9 > 8;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
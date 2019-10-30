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



// ******The Scope Chian

function a() {

  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();
b();
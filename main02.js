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
var Arr = [
  1,
  false,
  {
    name: 'chery',
    address: '123 main st'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  'The Cold'
];

console.log(Arr);
Arr[3](Arr[2].name);
console.log('resource main.js loaded');

// function doAddition(x) {
//     return function(y) {
//         return x+y;
//     }
// }

// (function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged?
//     })(1);
//   })(0);

// (function test(a){
//     console.log(a);
// })(10);
 
// console.log(doAddition(5)(10));


// var count = 0;
// function immediate() {
//   if (count === 0) {
//     var count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// };

// immediate();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//     console.log(i);
// }


function createIncrement() {
    let count = 0;

    function increment() { 
      count++;
      console.log(count);
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
}
  
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); // What is logged?
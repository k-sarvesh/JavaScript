// Immediately Invoked Function Expression (IIFE)

// single IIFE
 (function myfun(){
    console.log("IIFE")
 })()

 // multiple IIFE
 (function myfun1(){
    console.log("IIFE 1")
 })();
 (function myfun2(){
    console.log("IIFE 2")
 })();
 (function myfun3(){
    console.log("IIFE 3")
 })();

 // IIFE with arrow function
 ((name) => {
    console.log(`IIFE with arrow function ${name}` )
 })("Sarvesh");
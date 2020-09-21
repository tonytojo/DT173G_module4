function sum(numbers) {
   var total = 0;
   numbers.forEach(function(number, index) 
   {
   total +=number; 
   console.log("index=" + index); 
   });
   return total;
  }

let name = 'World';
let greeting = `Hello ${name}!`
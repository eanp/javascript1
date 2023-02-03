const myDisplayer = (data) => console.log(`output is ${data} and this is callback from myDisplayer`)

const myOutputer = (data) => console.log(`output is ${data} and this is callback from myOutputer`)

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback ? myCallback(sum) : console.log("function not return a callback")
}

myCalculator(5, 5);
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, myOutputer);
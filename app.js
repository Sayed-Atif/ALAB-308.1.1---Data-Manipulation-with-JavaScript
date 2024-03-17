/*ALAB 308.1.1 - Data Manipulation with JavaScript*/

//The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
//const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// The results of the checks.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


//Part 1: Math Problems:
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.


//a- Check if all numbers are divisible by 5
let divisibleBy5 = (n1 % 5)+(n2 % 5)+(n3 % 5)+(n4 % 5) === 0;
console.log("All numbers are divisible by 5? " + divisibleBy5);

//b- Check if the first number is larger than the last.
let firstLarger = n1 > n4;
console.log("The first number is larger than the last? " + firstLarger);

//c-Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
let subTwo = n2 - n1;
console.log("The result of subtraction is " + subTwo);
//Multiply the result by the third number.
let multTwo = subTwo * n3;
console.log("The result of multiplication is " + multTwo);
//Find the remainder of dividing the result by the fourth number.
let remTwo = multTwo % n4;
console.log("The result of remainder is " + remTwo);

//Arithmetic chain using reassignments and template literals:
let arithmaticChain = n2-n1;
arithmaticChain = arithmaticChain*n3;
arithmaticChain = arithmaticChain%n4;
console.log(`The result of arithmetic chain is ${arithmaticChain}`); // 


//d- Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
const isNotover25 = ((n1 <= 25) && (n2 <= 25) && (n3 <= 25) && (n4 <= 25));
console.log(`Is any number less than or equal to 25? ${isNotover25}`); // `     ${isNotover25}` template literals

//----------------------------------------------------------------------------------------------------------


//Part 2: Practical Math
/*You are planning a cross-country road trip:
-The distance of the trip, in total, is 1,500 miles.
-Your car’s fuel efficiency is as follows:
-At 55 miles per hour, you get 30 miles per gallon.
-At 60 miles per hour, you get 28 miles per gallon.
-At 75 miles per hour, you get 23 miles per gallon.
-You have a fuel budget of $175.
-The average cost of fuel is $3 per gallon.
-Set up a program to answer the following questions:
-How many gallons of fuel will you need for the entire trip?
-Will your budget be enough to cover the fuel expense?
-How long will the trip take, in hours? */

//- The total distance of the trip.
let totalDistance = 1500;
console.log(`The total distance of the trip is ${totalDistance} miles`);

//a- The total gallon of fuel needed for the entire trip are calculated as follows.
// @ 55 mph = 30 mpg: 
let at55Mph = 30;
let totalGallon;
totalGallon =  totalDistance/ at55Mph;
console.log(`The total gallon of fuel at 55 mph needed is ${totalGallon} gallons`);

// @ 60 mph = 28 mpg:
let at60Mph = 28;
totalGallon =  totalDistance/ at60Mph;
console.log(`The total gallon of fuel at 60 mph needed is ${totalGallon} gallons`);

// @ 75 mph = 23 mpg:
let at75Mph = 23;
totalGallon =  totalDistance/ at75Mph;
console.log(`The total gallon of fuel at 75 mph needed is ${totalGallon} gallons`);

//b- To know whether our budget is enough to cover the fuel cost, first we need to calculate the total fuel cost of the trip. 
let fuelCost = 175;
let fuelEfficiency = 3;
let totalFuelCost = fuelCost * fuelEfficiency;
console.log(`The total fuel cost of the trip is ${totalFuelCost} $`);
//Note: As the total fuel cost calculated is 525$, so our budget is not enough to cover the fuel cost and we need 350$ to cover .

//c- Calculate the total time of the trip.
let totalTime = totalDistance / totalFuelCost;
console.log(`The total time of the trip is ${totalTime} hours`);
//Note: As the total time calculated is 2.8 hours, so the trip will take 2.8 hours.





 






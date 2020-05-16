// Taking each number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

// Examples
// findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// // digits found:  517-  4-38  29-6  -0

// findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// // digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

// findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// // digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// // 0 and 1 are missing
// Notes
// The digits can be discovered in any order.
function findAllDigits(numbersArray){
  var baseArray=Array.from({length: 10}, (_, i) => i);
  
  for(let i=0;i<numbersArray.length;i++){
    baseArray=processNumber(numbersArray[i],baseArray);
    if(baseArray.length===0){
      return numbersArray[i];
    }
  }
  return "Missing digits!"
}
function processNumber(number,baseArray){
var numbersToRemove = number.toString().split('').map(Number);
baseArray = baseArray.filter(item => !numbersToRemove.includes(item));
return baseArray;
}
console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083])===5057);
console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])===3370);
console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868])=="Missing digits!");
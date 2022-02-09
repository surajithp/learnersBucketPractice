// Given an array of integers arr, and a function cb as input, return a new array from the element which passes test specified in the function.

// MDN -
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Example 1:

// Input: arr = [1, 2, 3, 4, 5], cb = function(elm){return elm % 2 === 0};
// Output: [2, 4]

const input = [1, 2, 3, 4, 5]
const callback = function(elm){return elm % 2 === 0}

const filter = (arr,cb)=>{
  let resultArray = []
  for(let i=0; i < arr.length; i++){
    if(cb(arr[i])){
      resultArray.push(arr[i])
    }
  }
  resultArray
}

filter(input,callback)
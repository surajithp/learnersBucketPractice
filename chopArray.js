// Given an array and size k, chop the array into chunks of k-length and return them as an array.

// Example 1:

// Input:
// arr - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// k - 3

// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const k = 3

const chopArray = (arr, k)=>{
  let resultArray = []
  let slice1= 0
  let slice2 = k
  for (let i in arr) {
    const slice = arr.slice(slice1,slice2)
    if(slice.length > 0){
      resultArray.push(slice)
      slice1 = slice1 + k
      slice2 = slice2 + k
    }
  }
  console.log(resultArray)
}

chopArray(input,k)
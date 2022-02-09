// Given a N dimensional array of integers arr, flatten this array to form a single dimensional array and return it.

// Input: arr = [[[1, [1.1]], 2, 3], [4, 5]]
// Output: [1, 1.1, 2, 3, 4, 5]

const input = [[[1, [1.1]], 2, 3], [4, 5]]

const resultArray = []


const flattenArray = (arr)=>{
  if(typeof arr === 'object'){
    arr.forEach(item=>{
      flattenArray(item)
    })
  }
  else{
    resultArray.push(arr)
  }
  return resultArray
}

console.log(flattenArray(input))
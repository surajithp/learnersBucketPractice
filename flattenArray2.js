//Given a N dimensional array of integers arr and depth, flatten this array till the specified depth and return the flattened array.

// Input: arr = [1, 2, 3, [4, 5, [6, 7]]] , depth = 1
// Output: [1, 2, 2, 3, 4, 5, [6, 7]]

// Input: arr = [1, 2, [3, 4], [[5]]] , depth = 2
// Output: [1, 2, 2, 3, 4, 5]

// Input: arr = [1, 2, [3, 4], [[5, [6, [7]]]]] , depth = Infinity
// Output: [1, 2, 2, 3, 4, 5, 6, 7]

const input = [[[1,[1.1]],2,3],[4,5]]
const depth = 2

const resultArray = []
let count = 0


const flattenArray = (arr, depth)=>{
  let currnetDepth = depth
  if(currnetDepth >= 0){
    if(typeof arr === 'object'){
      currnetDepth = currnetDepth - 1
      arr.forEach(item=>{
        flattenArray(item, currnetDepth)
      })
    }
    else{
      resultArray.push(arr)
    }
  }else{
    resultArray.push(arr)
  }
  return resultArray
}

console.log(flattenArray(input, depth))
// Given an array arr with different counts of number we have to find the number with least frequency and return it.

// If there are two or more numbers with same least frequency the return the biggest number.

// Example 1:

// Input: arr = [1, 2, 2, 3, 3, 3]
// Output: 1



const input = [6, 2, 2, 3, 3, 3]


const leastFrequent = (arr)=>{
  const obj = {}
  arr.map(it=>{
    if(obj.hasOwnProperty(it)){
      obj[it] = obj[it] + 1
    }else{
      obj[it] = 1 
    }
  })
  let minCount = Number.MAX_SAFE_INTEGER;
  let leastFrequent = 0
  for (const [key, value] of Object.entries(obj)) {
    if(value <= minCount){
      minCount = value
      leastFrequent = key
    }
  }
  return leastFrequent
}

leastFrequent(input)
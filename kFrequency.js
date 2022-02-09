// Given an array of elements arr and a number k find an element which has occurred K times.

// If there are no such element then return -1.

// Note: If there are two or more elements with same frequency, return the smallest.

// Example 1:

// Input: arr = [2, 4, 4, 3, 3, 7, 7, 7, 8] k = 3
// Output: 7

// Example 2:

// Input: arr = [1, 2, 3, 4, 4] k = 3
// Output: -1


const kFrequency = (arr, k)=>{
  const obj = {}
  let matchFound = ''
  arr.map(item=>{
    if(obj.hasOwnProperty(`${item}`)){
      obj[item] = obj[item] + 1
    }else{
      obj[item] = 1
    }
  })
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    if(value === k){
      if(matchFound){
        matchFound = matchFound > key ? key : matchFound
      }else{
        matchFound = key
      }
    }
  }
  if(matchFound){
    return matchFound
  }
  return -1
}

const input = [2,4,4,3,3,7,7,7,8]

const k = 2

console.log(kFrequency(input, k))
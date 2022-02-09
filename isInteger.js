//Given a number, return true if given value of number is an integer without using any inbuilt functions

// Input:
// 4.0
// 12.2
// 0.3

// Output: 
// true
// false
// false


const isInteger = (num)=>{
  const numToString = `${num}` 
  const numPoints = numToString.split('.')
  if(numPoints.length > 0 && Number(numPoints[1]) > 0){
    return false
  }
  return true
}

console.log(isInteger(4.0))
console.log(isInteger(12.2))
console.log(isInteger(0.3))








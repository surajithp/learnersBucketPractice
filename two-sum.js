// Given an array of integers nums and an integer target, check if there are two numbers in the array such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You should return true or false.

// Example 1:

// Input: nums = [2,7,11,15], target = 9 
// Output: true 
// Output: Because nums[0] + nums[1] == 9, we return true.
// Example 2:

// Input: nums = [2,7,11,15], target = 18 
// Output: true 
// Output: Because nums[1] + nums[2] == 18, we return true.


const generateTwoSum = (nums, target)=>{
  let matchFound = false
  nums.forEach((item, index)=>{
    const otherItems = nums.filter((it,indx)=>indx!==index)
    otherItems.forEach(otherItem=>{
      if(otherItem+item === target){
        // const otherItemIndex = nums.findIndex(num=>num === otherItem)
        // indexArray.push(index)
        // indexArray.push(otherItemIndex)
        matchFound = true
      }
    })
  })
  return matchFound
}

const nums = [3,3]
const target = 6


const result = generateTwoSum(nums,target)
console.log("==result",result)
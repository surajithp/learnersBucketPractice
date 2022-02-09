// Given an array of integers nums and an integer target, check if there are three numbers in the array such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You should return true or false.

// Input: nums = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18], target = 20 
// Output: true 
// Output: Because nums[1] + nums[2] + nums[6] == 20, we return true.


const nums = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18]
const target = 20



const generateThreeSum = (nums, target)=>{
  let matchFound = false
  nums.forEach((item, index)=>{
    const secondLevelItems = nums.filter((it,indx)=>indx!==index)
    secondLevelItems.forEach(secondLevelItem=>{
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
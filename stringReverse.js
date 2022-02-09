// 


// Example 1:

// Input: "JavaScript is awesome"

// Output: "tpircSavaJ si emosewa"


const reverse = (str)=>{
  const words = str.split(' ')
  let reverseString = ''
  words.forEach(item=>{
    for (let i=1; i <= item.length; i++){
      console.log(item.length,i)
      reverseString = reverseString +  item[item.length - i]
    }
    reverseString = reverseString + " "
  })
}

reverse("JavaScript is awesome")
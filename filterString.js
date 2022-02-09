// 

// Example 1:

// Input: ['1a', 'a', '2b', 'b']
// Output: ['1a', '2b']


const input = ['1a', 'a', '2b', 'b']

const filter = (arr)=>{
  let resultArray = []
  for(let i=0; i < arr.length; i++){
    let matches = arr[i].match(/\d+/g);
    if (matches != null) {
      resultArray.push(arr[i])
    }
  }
  return resultArray
}

filter(input)

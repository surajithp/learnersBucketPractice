// Given a string and size k, chop the string into chunks of k-length and return them as an array

// Example 1:

// Input:
// str - 'JavaScript'
// k - 2

// Output: ["Ja", "va", "Sc", "ri", "pt"]



const chopStr = (str, k)=>{
  let resultArray = []
  let slice1= 0
  let slice2 = k
  for (const c of str) {
    const slice = str.slice(slice1,slice2)
    if(slice){
      resultArray.push(slice)
      slice1 = slice1 + k
      slice2 = slice2 + k
    }
  }
  console.log(resultArray)
}

chopStr('JavaScript',3)
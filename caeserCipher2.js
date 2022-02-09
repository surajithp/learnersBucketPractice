// Caesar Cipher: An earlier encryption technique which used to substitute the current alphabets with alphabet after a number of count.

// You will have to implement a function which will decipher the given string by using the provided key and return the deciphered string.

// Input: text = ABCD, key = 13

// Output: NOPQ

// Explanation:

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// 13 shift to A is N
// 13 shift to B is O
// 13 shift to C is P
// 13 shift to D is Q

const caeserCipher = (str, key)=>{
  let caeserString = ''
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const upperCaseAlphabets = alpha.map((x) => String.fromCharCode(x));
  const lowerCaseAlphabets = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const strSplitArray = str.split('')
  strSplitArray.forEach(item=>{
    const upperCaseAlphabetIndex = upperCaseAlphabets.indexOf(item)
    const lowerCaseAlphabetIndex = lowerCaseAlphabets.indexOf(item)
    if(upperCaseAlphabetIndex >= 0){
      let caeserItemStringIndex = upperCaseAlphabetIndex + key
      if(upperCaseAlphabetIndex+ key >= 26){
        caeserItemStringIndex =  upperCaseAlphabetIndex+key-26
      }
      caeserString = caeserString + upperCaseAlphabets[caeserItemStringIndex]
    }
    if(lowerCaseAlphabetIndex >= 0){
      let caeserItemStringIndex = lowerCaseAlphabetIndex + key
      if(lowerCaseAlphabetIndex+key >= 26){
        caeserItemStringIndex =  lowerCaseAlphabetIndex+key-26
      }
      caeserString = caeserString + lowerCaseAlphabets[caeserItemStringIndex]
    }
  })
  return caeserString
}

caeserCipher("ymdadmt")
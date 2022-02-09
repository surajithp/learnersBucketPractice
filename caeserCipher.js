// Caesar Cipher: An earlier encryption technique which used to substitute the current alphabets with alphabet after a number of count.

// You will have to implement a function which will decipher the given string and return it.

// Note:- Caeser Cipher uses 13 shift as a key for ciphering and deciphering.

// Input: text = ABCD

// Output: NOPQ

// Explanation:

// Caeser Cipher uses 13 shift to cipher & dechipher

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// 13 shift to A is N
// 13 shift to B is O
// 13 shift to C is P
// 13 shift to D is Q


const caeserCipher = (str)=>{
  let caeserString = ''
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const upperCaseAlphabets = alpha.map((x) => String.fromCharCode(x));
  const lowerCaseAlphabets = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  const strSplitArray = str.split('')
  strSplitArray.forEach(item=>{
    const upperCaseAlphabetIndex = upperCaseAlphabets.indexOf(item)
    const lowerCaseAlphabetIndex = lowerCaseAlphabets.indexOf(item)
    if(upperCaseAlphabetIndex >= 0){
      let caeserItemStringIndex = upperCaseAlphabetIndex + 13
      if(upperCaseAlphabetIndex+13 >= 26){
        caeserItemStringIndex =  upperCaseAlphabetIndex+13-26
      }
      caeserString = caeserString + upperCaseAlphabets[caeserItemStringIndex]
    }
    if(lowerCaseAlphabetIndex >= 0){
      let caeserItemStringIndex = lowerCaseAlphabetIndex + 13
      if(lowerCaseAlphabetIndex+13 >= 26){
        caeserItemStringIndex =  lowerCaseAlphabetIndex+13-26
      }
      caeserString = caeserString + lowerCaseAlphabets[caeserItemStringIndex]
    }
  })
  return caeserString
}

caeserCipher("ymdadmt")
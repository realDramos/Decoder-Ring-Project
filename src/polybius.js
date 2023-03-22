// Please refrain from tampering with the setup code provided here,
// as the i.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const decodeKey = {
      "11":"a", "21":"b", "31":"c", "41":"d", "51":"e",
      "12":"f", "22":"g", "32":"h", "42":"i/j", "52":"k",
      "13":"l", "23":"m", "33":"n", "43":"o", "53":"p",
      "14":"q", "24":"r", "34":"s", "44":"t", "54":"u",        
      "15":"v", "25":"w", "35":"x", "45":"y", "55":"z"
    }
    const encodeKey = {
      "a":11, "b":21, "c":21, "d":41, "e":51,
      "f":12, "g":22, "h":32, "i":42, "k":52,
      "l":13, "m":23, "n":33, "j":42, "p":53,
      "q":14, "r":24, "s":34, "o":43, "u":54,
      "v":15, "w":25, "x":35, "t":44, "z":55,
                              "y":45, 
    }
    //the variable being set
    let newStr = ""
    //makes sure that the input is set in lower case
    input = input.toLowerCase()
    //makes sure that if the input is numbers that the code is even not including spaces
    if (!encode && input.replace( /\s/g, '').length%2 !=0) return false
    //if encode is true
    if (encode){
      //loops through string
        for (let i= 0; i < input.length; i++) {
          //sets char to input
          const char = input[i];
          //if char includes a space it adds it and then moves on
          if (char.includes(" ")){
            newStr += (" ")
         }
         //checks to see if the char is equal to any key if it is it adds it 
          for (const key in encodeKey) {
             if (char === key){
                newStr += encodeKey[key]
             }
          } 
    }
    return newStr
    //if encode is false
  }else if (!encode){
    //loops through string and skips by 2
    for (let i= 0; i < input.length; i+=2) {
      //makes sure that char includes 2 indexs to test
        let char = input[i]+input[i+1];
        //if there is a space it has to add it and then set to skip 1 to make sure the loop keeps its place
        if (char.includes(" ")){
          newStr += (" ")
          i = 1+i
          //resets char to ensure it gets very number
          char = input[i]+input[i+1]
       }
       //then after it checks for space it checks the char on to keys and matches to then add the value
        for (const key in decodeKey) {
           if (char === key){
              newStr += decodeKey[key]
           }
        } 
  }
  return newStr
  }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

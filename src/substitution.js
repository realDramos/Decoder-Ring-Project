// Please refrain from tampering with the setup code provided here,
// as the i.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //makes sure that the alphabet is vaild for the function to propertly run the unique check
    if (alphabet === undefined || alphabet.length != 26) return false
    //these are all the variables being used for the function
    input = input.toLowerCase()
    let unique = true
    let newStr = "";
    const cypher = []
    
    //this for loop turns the given alphabet into an array and at the same times checks that all characters are unique
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      const check = cypher.some(cypherChar => char === cypherChar)
      if (check === true){
        return unique = false
      }
        cypher.push(char)
      }
    //if the charcters are not all unique it will cancel that function
    if (!unique) return false

    if (encode){
      //loops through the input string
      for (let i = 0; i < input.length; i++) {
        //each char of the string
        const char = input[i]
        //gets the unicode of each character of the string
        const charAt = input.charCodeAt(i)
        //turns it into a number that is vaild for the cypher array to use and find the corresponding character.
        const indexForCypher = charAt-97
        //adds a space if there is a space in the string
        if (char === " "){
          newStr+= " "
        }else {
          //finds the correct character in the cypher using indexForCypher
          const matchingChar = (cypher.find(cypherI =>  cypher[indexForCypher] === cypherI ))
          newStr += matchingChar
        }
      }
    }else if (!encode){
      //loops through input string
      for (let i = 0; i < input.length; i++) {
        //contains the character at that moment in the for loop
        const char = input[i]
        //gets the index of the char in the cypher
        const index = cypher.indexOf(char)
        //adds a space if there is a space
        if (char === " "){
          newStr+= " "
        }else {
          //then turns the index into the corresponding unicode and then stringifies it to then add it to the variable
          newStr += String.fromCharCode(index+97)
        }
      }
    }
      //final return
      return newStr
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

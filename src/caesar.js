// Please refrain from tampering with the setup code provided here,
// as the i.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let newStr = ""
    //makes sure that shift is usable
    if(shift === undefined || shift === 0 || shift > 25 || shift < -25) return false

    input = input.toLowerCase()

    if (encode){
        for (let i = 0; i < input.length; i++) {

            const char = input.charCodeAt(i)
            //if it is a space, number or special character it will directly add it to the string
            if (char<97 || char>122){
                newStr += input[i]
    
            }else{
                let newChar = char + shift
                //if newChar is below 97 then then add it to the end of the count
                if(newChar<97){
                    let shiftedChar = newChar-97

                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(123 + shiftedChar)

                //if newChar is above 122 then add it to the start of the count
                }else if(newChar>122){
                    let shiftedChar = newChar-122
                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(shiftedChar+96)
                //other wise 
                }else{
                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(newChar)
                }
            }
        }

    }else if(!encode){
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i)
            //if it is a space, number or special character it will directly add it to the string
            if (char<97 || char>122){
                newStr += input[i]
    
            }else{
                //does the the decoding
                let newChar = char - shift
                //if newChar is below 97 then then add it to the end of the count
                if(newChar<97){
                    let shiftedChar = newChar-97
                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(123 + shiftedChar)

                //if newChar is above 122 then add it to the start of the count
                }else if(newChar>122){
                    let shiftedChar = newChar-122
                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(shiftedChar+96)
        
                }else{
                    //turn char into a string and add it to new Str
                    newStr += String.fromCharCode(newChar)
                }
            }
        }
    }
    //return that final str
    return newStr
  }

  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

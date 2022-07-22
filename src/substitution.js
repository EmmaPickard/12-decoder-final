// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // empty arr to hold final message 
    const coded = [];
    
    // if no alph param return false
    if (!alphabet || alphabet.length != 26) return false;
    // iterate through string
    for (let j = 0; j < alphabet.length; j++) {
      //conditional
      if (alphabet.indexOf(alphabet[j]) !== alphabet.lastIndexOf(alphabet[j])) {
        // if condition is not met
        return false;
      }
    }
    //new variable that contains original alphabet
    const ogAlphabet = "abcdefghijklmnopqrstuvwxyz ";

    // add spece to aplhabet
    alphabet += " ";
    // male lcase
    input = input.toLowerCase().split("");
    

    if (encode) {
      // for loop to push coded char into final arr
      for (char of input) {
        coded.push(alphabet[ogAlphabet.indexOf(char)]);
      }
    } else {
      //creating for/of loop to loop thru input data in this case to decode
      for (char of input) {
        // reverse action to encoding action
        coded.push(ogAlphabet[alphabet.indexOf(char)]);
      }
    }
    // return codded arr holding final message
    return coded.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // data that will be used to encode message
    const encoder = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      "i/j": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };
    //  data that will be used to decode the message 
    const decoder = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i/j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
// conditionals for encoding
    if (encode) {
      //
      let inputArr = input.toLowerCase().split("");
  
      return inputArr
        .map((string) => {
          let char = encoder[string] || string;
// if char is even to 'i' or 'j' and return number 42 

          if (char === "i" || char === "j") {
            return "42";
          }
         
          // if input includes space, we return that space the way it is 
          if (char === " ") {
            return " ";
          }
       
          return char;
        })
        // using .join() method to combine array into a string
        .join("");
    
    } else {
      //  no space / take space away
      let oddLength = input.replace(" ", "");
    
      // return false
      if (!encode && oddLength.length % 2 === 1) return false;
// push output inside 
      let finalMessage = [];
      
      let decoding = input.split("");
       
      for (let i = 0; i < decoding.length; i++) {
        // variable char is each iterable character /(number) because we decoding/ from input 
        let char = input[i];
        // if statement to check spaces
       
        if (char === " ") {
          // .push() method
          finalMessage.push(char);
          // else statement
        } else {
          
          let charKey = `${char}${input[i + 1]}`;
          
          i++;
          // pushing out charKey 
          finalMessage.push(decoder[charKey]);
        }
      }
      // 
      return finalMessage.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
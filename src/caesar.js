// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  //split alpahbet into an iterable array
// const alphabet = "abcdefghijklmnopqrstuv".split('')

  function caesar(input, shift, encode = true) {
    // 0, >25 or <-26 === false
      if (shift === 0 ) {return false}
      if (shift > 25 ) {return false}
      if (shift < -25) {return false}
    // decodeable
    if (!encode) {shift *= -1}
    //.toLowerCase
    const message  = input.toLowerCase()

    //Empty Arr to hold ciphered message
    const cipheredArr = []
    let cipheredStr;
    //loop
    for(let i=0; i < message.length; i++){
      let regMess = message.charCodeAt([i])
      let codedMess = regMess + shift
       if (97 > regMess || regMess > 122)
        {
          cipheredArr.push(regMess)
        }
      else if ( codedMess > 122){
        cipheredArr.push(codedMess -= 26)
      }
      else if (codedMess < 97){
        cipheredArr.push(codedMess += 26)
      }

        else {
          cipheredArr.push(codedMess)
        }
     
      }
    cipheredStr = String.fromCharCode(...cipheredArr)
    //  console.log('this is the log: ',cipheredStr)
     return cipheredStr
    }
    
  

  return {
    caesar, }
  })();





module.exports = { caesar: caesarModule.caesar };

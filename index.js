//solution for who likes it? in Javscript 6 kyu

function likes(names) {
    if (names.length === 0) {
      return 'no one likes this'
    } else if (names.length === 1){
      return names[0] + ' likes this'
    } else if (names.length === 2){
      return names[0] + ' and ' + names[1] + ' like this'
    } else if (names.length === 3){
      return names[0] + ', ' + names[1]  + ' and ' + names[2] + ' like this'
    }
    else {
     return names[0] + ', ' + names[1]  + ' and ' + (names.length -2) + ' others like this'
    }
  }

  const isSquare = function(n){
    const digits = (""+n).split("");
    const lastDigit = digits[digits.length-1]
    const lastTwoDigits = digits[digits.length-1] + digits[digits.length-2]
    
      if (n < 0){
        return false
      } 
      else if (n === 0 || n === 1 || n === 4 || n === 9 || n === 16 || n === 25 || n === 36 || n === 49 || n === 64 || n == 81){
        return true //could refator here
      } 
      else if (n > 99)
      if (lastDigit === '1' || lastDigit === '4' || lastDigit === '5' || lastDigit === '6' || lastDigit === '9' || lastTwoDigits === '00'){
        return true
      } else {
        return false
      }
      else {
        return false 
      }
    }

    // var isSquare = function(n){
    //   for (var x = 0; x <= n; x++) {
    //     if (n === 0) {
    //       return true;
    //     } else if (n / x === x) {
    //       return true;
    //     }
    //   }
      
    //   return false;
    // }

    // Ones and zeors Binary array to numbers
    const binaryArrayToNumber = arr => {
      const binary = arr.join('')
      const value = parseInt(binary, 2)// 2 tells parseInt to return Binary Value
      return value
    };
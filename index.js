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

    //list filtering
    function filter_list(l) {
      const noStrings = []
      for (let i = 0; i < l.length; i++){
        if (Number.isInteger(l[i])){
          noStrings.push(l[i])
        }
      }
      return noStrings
    }

    //Find the odd Int
    function findOdd(A){
      return A.find((item, index) => A.filter(el => el == item).length % 2)
    } //finds an item in the array based on wether the element remains in an array that is filtered of all items whos count is divisible by 2


//returns a sorted uniq string made from the combination of two strings
    function longest(s1, s2) {
      const combinedString = s1 + s2;
      const arrayFromString = combinedString.split("");
      const sortedArray = arrayFromString.sort()
      const sortedUniqArray = sortedArray.filter((element, index, array) =>{
          return element != array[index+1]
      })
      const result = sortedUniqArray.join("")
      return result
    }


// return integer sorted to be highest num possible
  function descendingOrder(n){
    let array = n.toString().split("")
    let sortedArray = array.sort().reverse()
    let sortedString = sortedArray.join("")
    let sortedInt = parseInt(sortedString)
    
    return sortedInt
}

//count the vowels in a string
function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const stringArray = str.split("")
  for (let i=0; i<stringArray.length; i++){
    if(vowels.includes(stringArray[i])){
      vowelsCount++
    }
  }
}
//square each number in a string
  function squareDigits(num){
    const array = num.toString().split("")
    const squaredArray = []
    
    array.forEach(number => {
      squaredArray.push(parseInt(number) * parseInt(number))
    })
    return parseInt(squaredArray.join(""))
  }
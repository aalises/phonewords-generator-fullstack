
const letters_numbers = {
    '2': 'ABC',
    '3': 'DEF',
    '4': 'GHI',
    '5': 'JKL',
    '6': 'MNO',
    '7': 'PQRS',
    '8': 'TUV',
    '9': 'WXYZ'
}

const compute_phonewords = number => {
  let result = []
  for(let i = 0; i <= number.length; i++){
    const currentNumber = number[i]
    const added_phonewords = []

    if (letters_numbers[currentNumber]) {
      const letters = letters_numbers[currentNumber]

      for(let j = 0; j < letters.length; j++) {
        if (result.length){
          for (let k = result.length - 1; k >= 0; k--) {
            added_phonewords.push(result[k] + letters[j])
          }
        } else {
          added_phonewords.push( letters[j] )
        }
      }
    } else {
      added_phonewords.push(...result)
    }
    result = added_phonewords
  }
  return result;
}

module.exports = {
    compute_phonewords
}
function encryptUkrainianAlphabet(inputString) {
    const ukrAlphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';

    const encryptedString = inputString
      .split('')
      .map((char) => {
        const lowerChar = char.toUpperCase();
        const index = ukrAlphabet.indexOf(lowerChar);
        return index !== -1 ? index + 1 : char;
      })
      .join('.');
  
    return encryptedString.replace(/ /g, ',');
  }
  
  const input = '';
  const encryptedResult = encryptUkrainianAlphabet(input);
  console.log(encryptedResult);
  
function decryptUkrainianAlphabet(inputString) {
    const ukrAlphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
  
    // Перетворення рядка на масив символів та дешифрування
    const decryptedString = inputString
      .split('.')
      .map((item) => {
        if (!isNaN(item)) {
          const index = parseInt(item, 10) - 1;
          return ukrAlphabet[index] || '';
        } else {
          return item;
        }
      })
      .join('');
  
    return decryptedString.replace(/,/g, ' ');
  }

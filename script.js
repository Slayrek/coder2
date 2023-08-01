function encryptUkrainianAlphabet(inputString) {
    // Український алфавіт
    const ukrAlphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
  
    // Перетворення рядка на масив символів та шифрування
    const encryptedString = inputString
      .split('')
      .map((char) => {
        const lowerChar = char.toUpperCase(); // Враховуємо, що регістр може бути різним
        const index = ukrAlphabet.indexOf(lowerChar);
        return index !== -1 ? index + 1 : char; // Якщо символ не знайдено, залишаємо його без змін
      })
      .join('.');
  
    return encryptedString.replace(/ /g, ','); // Заміна пробілів на коми
  }
  
  // Приклад використання:
  const input = 'Привіт, Сvіт!'; // Введений рядок
  const encryptedResult = encryptUkrainianAlphabet(input);
  console.log(encryptedResult); // Результат: 16.18.10.14.1.20,15.19.21.14.10,1,19.4.8.20
  
// script.js
function decryptUkrainianAlphabet(inputString) {
    // Український алфавіт
    const ukrAlphabet = 'АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
  
    // Перетворення рядка на масив символів та дешифрування
    const decryptedString = inputString
      .split('.')
      .map((item) => {
        if (!isNaN(item)) {
          const index = parseInt(item, 10) - 1;
          return ukrAlphabet[index] || ''; // Перевіряємо, чи індекс знаходиться в межах алфавіту
        } else {
          return item;
        }
      })
      .join('');
  
    return decryptedString.replace(/,/g, ' '); // Заміна ком на пробіл
  }

var validUsername = 'QAZX-SWER-DFVG-BH-POIU';
var validPassword = 'ZXCV-BNM-LKJH-HG-POIU';

function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        window.location.href = 'coder.html';
    } else {
        alert('Неправильний логін або пароль!');
    }
}

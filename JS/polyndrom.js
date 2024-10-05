function checkPalindrome() {
    const textInput = document.getElementById('text-input').value;
    const cleanedText = textInput.replace(/\s/g, '').toLowerCase();
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
  
    const resultElement = document.getElementById('result');
    if (isPalindrome) {
      resultElement.textContent = `Текст "${textInput}" является палиндромом.`;
    } else {
      resultElement.textContent = `Текст "${textInput}" не является палиндромом.`;
    }
  }
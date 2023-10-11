//Demo Palindromes

function palindromeDetector(palindromes) {
    let maxLetterPalindrome = '';

    for (const palindrome of palindromes) {
        const lowerPalindrome = palindrome.toLowerCase().replace(/\s/g, '');
        const reversePalindrome = lowerPalindrome.split('').reverse().join('');

        if (lowerPalindrome === reversePalindrome && lowerPalindrome.length > maxLetterPalindrome.length) {
            maxLetterPalindrome = lowerPalindrome;
        }
    }

    if (maxLetterPalindrome === '') {
        return null;
    } else {
        return maxLetterPalindrome;
    }
}

const palindromes = ['civic', 'radar', 'level', 'rotor', 'kayak', 'madam', 'refer', 'child', 'deified'];
console.log(palindromeDetector(palindromes));
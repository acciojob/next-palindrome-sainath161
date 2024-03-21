function nextPalindrome(num) {
 function isPalindrome(n) {
        return n.toString() === n.toString().split('').reverse().join('');
    }

    // Helper function to find the next palindrome
    function findNextPalindrome(n) {
        while (true) {
            n++;
            if (isPalindrome(n)) {
                return n;
            }
        }
    }

    // Convert input to a number
    num = parseInt(num);

    // Find the next palindrome
    const nextPal = findNextPalindrome(num);

    return nextPal;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));

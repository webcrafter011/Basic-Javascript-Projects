let input = document.getElementById('inputText');

function reverse(str) {
    return str.split('').reverse().join('');
}

function checkPalindrome(){
    if (input.value === reverse(input.value)) {
        alert(`${input.value} is a palindrome`);
    } else {
        alert(`${input.value} is not a palindrome`);
    }

    input.value = ""
};
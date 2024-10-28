// title: Is it a palindrome?
// link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

const isPalindrome = (string) => {
    const array = 
  string.split("").join('').toLowerCase();
    const inverterArr =
  string.split("").reverse().join('').toLowerCase();        
    return array === inverterArr;
}  
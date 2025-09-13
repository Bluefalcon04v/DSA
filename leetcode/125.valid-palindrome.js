/*
125 Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
*/


// using build in functions
// T = O(n), S = O(n)
function isPalindrome(s) {
  s = s.toLowerCase();
  let filterString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filterString += s[i];
      rev = s[i] + rev;
    }
  }

  //   let rev = filterString.split("").reverse().join("");   -> Instead for this for calculating reverse string we can use this

  return filterString === rev;
}

// T = O(n), S = O(1)
function isPalindrome2(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i].match(/[a-z0-9]/i) && s[j].match(/[a-z0-9]/i)) {
      if (s[i] === s[j]) {
        i++;
        j--;
      } else {
        return false;
      }
    } else {
      if (!s[i].match(/[a-z0-9]/i)) {
        i++;
      } else {
        j--;
      }
    }
  }
  return true;
}

// console.log(isPalindrome2("race a car"));

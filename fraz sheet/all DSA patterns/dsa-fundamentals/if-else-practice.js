/*
Problem 1    Write a program to find maximum between three numbers.
Input
    Input num1 : 10
    Input num2 : 20
    Input num3 : 15

*/

function maxThreeNumber(num1, num2, num3) {
  if (num1 > num2 && num3 < num1) {
    return num1;
  } else if (num2 > num1 && num3 < num2) {
    return num2;
  } else return num3;
}

// console.log(maxThreeNumber(2, 1, 5));

/*
Problem 2 Write a program user input a character from user and check whether given character is alphabet, digit or special character.
  Input any character: 3   Character is Digit
  Input any character: "hello world"  Character is String
*/

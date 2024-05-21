/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

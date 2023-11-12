// Summation

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation(num) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through numbers from 1 to num and add them to the sum
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    // Return the final sum
    return sum;
}

// Example usage:
const result1 = summation(2);
console.log(result1); // Output: 3 (1 + 2)

const result2 = summation(8);
console.log(result2); // Output: 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
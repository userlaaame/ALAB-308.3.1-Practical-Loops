console.log("==============Part 1: Fizz Buzz===============");

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// let result = ""
// let x = 0


// do {
//     x++;
//     console.log(x);
// } while (x < 100);

// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Fizz Buzz",[i]);
    } else if (i % 5 == 0) {
        console.log("Buzz",[i]);
    } else if (i % 3 == 0) {
        console.log("Fizz",[i]);
    } else {
        console.log(i);
    }
}

console.log("==============Part 2: Prime Time===============");

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting 
// at n and incrementing from there.
// As soon as you find the prime number, log that number and exit 
// the loop.
// Continuing with the example above, if n is equal to 4, your loop
//  should log 5. Similarly, if n is 5, it should log 7, and if n 
// is //  9, it should log 11. Test your loop with higher numbers
// and reference an online prime number table to determine the 
// accuracy of your code.
// Be careful! If you set n to a number too large, your loop could
//  take a long time to process.
    
// Declare an arbitrary number n
let n = 9;

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Loop to find the next prime number starting from n + 1
let num = n + 1;
while (true) {
    if (isPrime(num)) {
        console.log(num);
        break;
    }
    num++;
}
    





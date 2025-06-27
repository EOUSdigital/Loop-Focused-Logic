//TODO 📗 Module 5. Logic and Control Flow - Lesson 07.02: Loops and Iteration - Loop-Focused Logic


//TODO 📝 Step 4: Exercises

//* 🔁 Exercise 1: Counting Forward (using for)

//? 📝 Task: Print numbers from 1 to 10 using a for loop.

//  ✅ Pseudocode:
//  let i = 1                         → Start counting from 1
//  i <= 10                           → Keep looping as long as i is less than or equal to 10
//  i++                               → Increase i by 1 every time

//! Solution

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//* 🔁 Exercise 2: Reverse Countdown (using while)

//? 📝 Task: Use a while loop to print numbers from 5 down to 0.

//  ✅ Pseudocode:
//  SET variable j = 5
//  WHILE j is greater than or equal to 0
//      OUTPUT j
//      DECREASE j by 1

//! Solution

let j = 5;
while (j >= 0) {
    console.log(j);
    j--;
}

//  🧠 Breakdown:
//  LET j = 5;                        → Start from 5
//  while (j >= 0)                    → Keep running the loop as long as j is 0 or higher
//      PRINT console.log(j);               → Show current value
//      j--;                                → Decrease by 1


//* 🍎 Exercise 3: Print Fruits (using for...of)

//? 📝 Task: Loop through the following array and print each fruit.

const fruits = ["🍎 apple", "🍌 banana", "🍇 grapes"];

//  ✅ Pseudocode:
//  SET variable fruits to an array
//  FOR each fruit in fruits:
//      PRINT "Today's snack:" followed by the fruit

//! Solution

for (let fruit of fruits) {
    console.log("Today's snack:", fruit);
}

//  🧠 Explanation:
//  • const fruits = [...]              → An array of fruit items
//  • for (let fruit of fruits)         → Loop through each value in the array
//      - fruit will be "🍎 apple", then "🍌 banana", and so on
//  • console.log(...)                  → Outputs a message that includes each item


//* 👤 Exercise 4: Print Object Info (using for...in)

//? 📝 Task: Print the key and value from the object below.

//  ✅ Pseudocode:
//  DEFINE a person object with properties (name, age, job)
//  FOR each key in the person object:
//      PRINT the key
//      PRINT the value at that key (person[key])

//  🟨 Possible Output:
// name: Nina
// age: 27
// job: Designer

//! Solution

const person = {
    name: "Nina",
    age: 27,
    job: "Designer"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

//  🧠 Explanation:
//  • for (let key in person)           → Loops over the keys: "name", "age", "job"
//  • person[key]                       → Looks up the value for each key
//  • console.log(...)                  → Prints them in a readable format like:
//      - name: Nina
//      - age: 27
//      - job: Designer


//* 🔁 Exercise 5: Ask Until "yes" (using do...while)

//? 📝 Task: Simulate asking the user to type "yes" until they do (pretend prompt or use a looped value).

//  ✅ Pseudocode:
//  DECLARE a variable to store the user input
//  DO this:
//      SET the variable to some value (simulate user input)
//      PRINT the response
//  WHILE the response is not equal to the expected answer ("yes")

//! Solution

/*
let response;
do {
    response = "no";                        //  Simulate user input - can be replaced with prompt
    console.log("Typed:", response);
} while (response !== "yes");
*/

//  🧠 Explanation:
//  • let response;                         → Declares the variable
//  • do { ... } while (...)                → Ensures the block runs at least once
//  • response = "no";                      → Simulates a user typing "no" repeatedly
//  • while (response !== "yes")            → Loop continues until "yes" is typed

//  🔄 Output:
//  Typed: no
//  Typed: no
//  Typed: no
//  ... (until you set it to "yes")

//  👉 In a real browser, we'd use:
//  response = prompt("Say 'yes' to continue:");


//* 🔁 Exercise 6: Sum Numbers from 1 to N (using for)

//? 📝 Task: Write a function that takes a number n and returns the sum of all numbers from 1 to n.

//  ✅ Pseudocode:
//  FUNCTION sumToN(n)
//      SET total = 0
//      FOR i from 1 to n (inclusive)
//          ADD i to total
//      RETURN total
//  END FUNCTION

//! Solution

function sumToN(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(sumToN(5)); // 15 → (1 + 2 + 3 + 4 + 5)

//  🔍 How It Works:
//  • function sumToN(n)                    → Defines a function named sumToN that takes one parameter, n.
//  • let total = 0                         → Initializes a variable total to store the sum.
//  • for (let i = 1; i <= n; i++)          → Loops from i = 1 up to and including n.
//  • total += i                            → Adds the current value of i to the total on each loop
//  • return total                          → Returns the final sum after the loop finishes.


//* 🔁 Exercise 7: Filter Long Words (using for...of)

//? 📝 Task: Loop through an array of words and print only those longer than 5 characters.

//  ✅ Pseudocode:
//  SET words to an array of strings
//  FOR each word of words          
//      IF the word's length is greater than 5
//          PRINT the word

//  🔍 Key Concepts:
//  • for...of is perfect when we care about values (not indexes)
//  • word.length gives us the number of characters in a string
//  • Use a conditional (if) inside the loop to filter

//! Solution

const words = ["apple", "banana", "fig", "pineapple"];

for (let word of words) {
    if (word.length > 5)
    console.log(word);                      // Output: banana, pineapple
}

//  ✅ Why This Works:
//  • for (let word of words)               → Loops through the values in the array
//  • word.length > 5                       → Checks the number of characters in each word
//  • console.log(word)                     → Prints only if the condition is true
//  📌 We even included a comment showing 
//      expected output — very professional
//           habit.


//* 🔁 Exercise 8: Capitalize Properties (using for...in)

//? 📝 Task: Loop through an object and convert all values to uppercase strings.

//  ✅ Pseudocode:
//  SET user to an object with properties    → Declares the variable
//  FOR each key in user
//      PRINT key in uppercase
//      PRINT user[key] in uppercase

//! Solution

const user = { name: "linda", job: "developer" };

for (let key in user) {
    console.log(key.toUpperCase() + ": " + user[key].toUpperCase());
}

// Output: NAME: LINDA, JOB: DEVELOPER

//  🧠 Review:
//  • for (let key in user) → Loops over the keys: "name" and "job"
//  • user[key] → Accesses values: "linda" and "developer"
//  • .toUpperCase() → Makes the value uppercase


//* 🔂 Exercise 9: Loop Until Even (using while)

//? 📝 Task: Starting from 1, loop until you find the first even number greater than 10, then print it.

//  ✅ Pseudocode:
//  SET num to 1
//  WHILE num is less than or equal to 100 (or some large number)
//      IF num is even AND num > 10
//          PRINT num
//          BREAK the loop
//      ELSE
//          INCREMENT num by 1

//! Solution

let num = 1;
while (num <= 100) {
    if (num % 2 === 0 && num > 10){
        console.log(num);                       // Output: 12 (loop through 11, 12...)
        break;
    } else {
        num++;
    }
}

//  🧠 Explanation:
//  • num % 2 === 0                             → checks if the number is divisible by 2 (even)
//  • num > 10                                  → makes sure we only consider numbers after 10
//  • break;                                    → stops the loop as soon as the condition is met
//  • num++;                                    → increments the number if the condition isn't met yet


//* 🔁 Exercise 10: User Retry Prompt (using do...while)

//? 📝 Task: Simulate a user trying to enter a password. Keep looping until the user "enters" the correct password.

//  ✅ Pseudocode:
//  SET password to an incorrect starting value
//  DO
//      PRINT "Wrong password..."
//      SET password to a new value (simulate user input)
//  WHILE password is not equal to the correct password

//  PRINT "Access granted!"


//! Solution

let password = "123";                           // start with a wrong one
const correctPassword = "correct123";

do {
    if (password !== correctPassword) {
        console.log("Wrong password...");
        password = "correct123";                // simulate correct attempt on next try
    }
} while (password !== correctPassword);

console.log("Access granted!");

// Simulate the input: wrong, wrong, correct
// Output: Wrong password..., Wrong password..., Access granted!

//  🧠 Line-by-Line Breakdown
//? 🔹 let password = "123";
//  • Creates a changeable variable named password
//  • Sets it to an incorrect value on purpose (simulating a user mistake)
//  • We use let instead of const because we want to change it later

//? 🔹 const correctPassword = "correct123";
//  • Defines the correct password string
//  • Will be used to check whether the input matches

//? 🔹 do { ... } while (...)
//  This structure runs at least once, even if the condition is already false.

//* Inside the do block:

if (password !== correctPassword) {
    console.log("Wrong password");
    password = "correct123";                        // simulate a correct attempt next time
}

//  ➤ if (password !== correctPassword)
//      • Checks whether the typed password is incorrect
//      • Since "123" !== "correct123"              → it's true the first time
//  ➤ console.log("Wrong password...");
//      • Shows the error message because the password is wrong
//  ➤ password = "correct123";
//      • We simulate the user typing in the correct password after the first failed try

//? 🔹 while (password !== correctPassword);
//  • This is the loop condition
//  • After the first try, password becomes "correct123"
//  • So the condition is now false, and the loop ends

//? 🔹 console.log("Access granted!");
//  • This runs after the loop ends
//  • It confirms that the user got the password right

//? ✅ Final Output
//  1. Wrong password...
//  2. Access granted!


//* 🔁 Exercise 11: Multiplication Table

//? 📝 Task: Use a for loop to print the multiplication table of 3 (from 3×1 to 3×10).

//  ✅ Pseudocode:
//  SET multiplier to 3
//  FOR i from 1 to 10
//      PRINT multiplier x i = result

//! Solution

let multiplier = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${multiplier} x ${i} = ${multiplier * i}`);
}


//* 🔁 Exercise 12: Reverse Array Print (using for...of and .reverse())

//? 📝 Task: Reverse an array of colors and print each one using a for...of loop.

//  ✅ Pseudocode:
//  SET colors array
//  REVERSE the array
//  FOR each color of colors
//      PRINT the color

//! Solution

let colors = ["white", "black", "red", "yellow", "orange", "gray", "green", "blue", "brown", "purple"];
colors.reverse();

for (let color of colors) {
    console.log(color);
}


//* 🔁 Exercise 13: Object Property Count (using for...in)

//? 📝 Task: Count and print how many properties an object has.

//  ✅ Pseudocode:
//  SET count = 0
//  FOR each key in the object
//      INCREMENT count
//  PRINT count


//! Solution

const user2 = { name: "Jin", city: "Seoul", job: "Engineer" };
let count = 0;

for (let key in user2) {
    count++;
}

console.log("Number of properties:", count);


//* 🔁 Exercise 14: Sum of Even Numbers (using while)

//? 📝 Task: Add all even numbers between 1 and 20 using a while loop.

//  ✅ Pseudocode:
//  SET even to 1
//  WHILE even is less than or equal to 20
//      IF even modulo 2 is equal to zero
//          PRINT even
//      INCREMENT

//! Solution

let even = 1;

while (even <= 20) {
    if (even % 2 === 0) {
        console.log(even);
    }
    even++;
}


//* 🔁 Exercise 15: Guess Until Correct (using do...while)

//  📝 Task:
//? Simulate guesses from an array of values until the correct guess is made.

//  ✅ Pseudocode:
//  SET guesses to array
//  SET correct number
//  SET index to 0
//  DECLARE guess

//  DO
//      SET guess to guesses[index]
//      INCREMENT index
//      IF guess is not equal to correct      
//          PRINT "Wrong guess..."
//      WHILE guess is not equal to the correct

//  PRINT "You guessed the correct number."


//! Solution

const guesses = [5, 7, 9, 3];
const correct = 9;
let index = 0;
let guess;

do {
    guess = guesses[index];
    index++;

    if (guess !== correct) {
        console.log("Wrong guess...");
    }
} while (guess !== correct);

console.log("You guessed the correct number");

//? 🔍 Breakdown of What’s Working:
//  1. let index = 0;
//  • Tracks which guess to check next

//  2. do { ... } while (guess !== correct);
//  • Ensures the loop runs at least once
//  • Stops as soon as the correct guess is found

//  3. guess = guesses[index];
//  • Grabs the current guess from the array
//  • ✅ Clean separation of guess vs. guesses

//  4. Conditional Logging
//  • "Wrong guess..." only prints if the guess is wrong

//  5. Exit Message
//  • "You guessed the correct number" prints once after success


//* 🔁 Exercise 16: Nested Loop Grid Print

//  📝 Task: Use nested for loops to print a 3x3 grid of # symbols.

//  ✅ Pseudocode Strategy (Nested Loop)
//  FOR each row from 1 to 3
//    SET rowOutput = ""
//    FOR each column from 1 to 3
//        ADD "# " to rowOutput
//    PRINT rowOutput

//! Solution

for (let row = 1; row <= 3; row++) {
    let rowOutput = "";

    for (let col = 1; col <= 3; col++) {
        rowOutput += "# ";
    }
    console.log(rowOutput);
}


//* 🔁 Exercise 17: Filter Numbers from Mixed Array (using for...of)

//? 📝 Task: Loop through a mixed array and print only the numbers.

//  ✅ Pseudocode:
//  SET mixedArray to array
//  FOR let mixed of mixedArray
//      IF typeof mixed equal number
//          PRINT mixed

//! Solution

let mixedArray = ["one", 1, "two", 2, "three", 3];

for (let mixed of mixedArray) {
    if (typeof mixed === "number") {
        console.log(mixed);
    }
}


//* 🔁 Exercise 18: Total Characters in an Array of Words

//? 📝 Task: Use a loop to count the total number of characters in an array of words.

//  ✅ Pseudocode:
//  SET words array
//  SET totalCharacters = 0

//  FOR each word in words
//      ADD length of word to totalCharacters

//  PRINT totalCharacters

//! Solution

let wordsArray = ["grass", "trees", "flowers", "bees", "birds"];
let totalCharacters = 0;

for (let word of wordsArray) {
    totalCharacters += word.length;
}

console.log(totalCharacters);

//? 🔍 Breakdown:
//  • "grass"           → 5
//  • "trees"           → 5
//  • "flowers"         → 7
//  • "bees"            → 4
//  • "birds"           → 6
//  Total:              5 + 5 + 7 + 4 + 6 = 27


//* 🔁 Exercise 19: Print Property Keys in UPPERCASE

//  📝 Task: Loop through object keys and print them in uppercase.

//  ✅ Pseudocode:
//  SET car to an object with properties
//  FOR each key in user
//      PRINT key in uppercase : car[key]

//! Solution

const car = { make: "Volkswagen", model: "Golf", color: "Grey" };

for (let key in car) {
    console.log( `${key.toUpperCase()}: ${car[key]} `);
}

//* 🔁 Exercise 20: Loop Until String Includes Letter "e"

//? 📝 Task: Use a while loop to check strings from a list until one contains the letter "e".

//  ✅ Pseudocode:
//  SET words to an array of strings
//  SET index = 0

//  WHILE index is less than the length of the array
//      SET currentWord = words[index]
//      IF currentWord includes "e"
//          PRINT currentWord
//        BREAK the loop
//    INCREMENT index

//! Solution

const list = ["cat", "dog", "frog", "deer"];
let index3 = 0;

while (index3 < list.length) {
    let currentWord = list[index3];
    if (currentWord.includes("e")){
        console.log(currentWord);
        break;
    }
    index3++;
}


//* 🔁 Exercise 21: Countdown Timer

//? 📝 Task: Use a while loop to count down from 10 to 1 and print each number. At the end, print "Lift off!"

//  ✅ Pseudocode:
//  SET variable t = 10
//  WHILE t is greater than or equal to 0
//      PRINT output t
//      DECREASE t by 1
//  END

//  PRINT output "Lift off!"

//! Solution

let t = 10;
while (t >= 1) {
    console.log(t);
    t--;
}

console.log("Lift off!");


//* 🔁 Exercise 22: Double All Numbers (using for)

//? 📝 Task: Given an array of numbers, double each one and print the new values.

//  ✅ Pseudocode:
//  SET an array of numbers
//  FOR each index i from 0 to length - 1
//      PRINT number at index i times 2

//! Solution

let numbers = [1, 2, 3];                        // Input: [1, 2, 3]

for (let i = 0; i < numbers.length; i++) {
    console.log("Output:", numbers[i] * 2);    // Output: 2, 4, 6
}


//* 🔁 Exercise 23: List Hobbies (using for...in)

//? 📝 Task: Given an object with a user's hobbies, print each hobby's name and value.

//  ✅ Pseudocode:
//  SET hobbies to an object with properties
//  FOR each key in hobbies
//      PRINT key in uppercase + hobbies[key]

//! Solution

const hobbies = { sport: "tennis", music: "guitar", art: "drawing" };

for (let key in hobbies) {
    console.log(`${key.toUpperCase()}: ${hobbies[key]}`);                   // Output: SPORT: tennis, MUSIC: guitar, etc.
}


//* 🔁 Exercise 24: Filter Names with Letter "a"

//  📝 Task: Use a for...of loop to print only the names that contain the letter "a".

//  ✅ Pseudocode:
//  SET names array

//  FOR each name in names
//      IF name includes "a"
//          PRINT the name

//! Solution

const names = ["Alexander", "William", "Ruby", "Amelia", "Oliver", "Jack", "Harper", "Willow", "Ava", "Wren", "Sutton"]

for (let name of names) {
    if (name.toLowerCase().includes("a")) {
        console.log(name);
    }
}


//* 🔁 Exercise 25: Multiply Until Threshold (using do...while)

//? 📝 Task: Start with 1 and multiply by 2 until the number reaches or exceeds 100.

//  ✅ Pseudocode:
//  SET z to 1

//  DO
//      PRINT z
//      z = z * 2
//  WHILE z is less than or equal to 100


//! Solution

let z = 1;

do {
    console.log(z);
    z = z * 2;
} while (z <= 100);


//* 🔁 Exercise 26: Sum of Digits

//? 📝 Task: Use a while loop to compute the sum of all digits of a number.

//  ✅ Pseudocode:
//  SET sum
//  SET number to a number

//  WHILE number is greater than 0
//      sum plus equal to number modulo 10
//      number equal to Math floor where number divide by 10

//  PRINT sum

//! Solution            

let sum = 0;
let number = 123;                               // Input: 123

while (number > 0) {
    sum += number % 10
    number = Math.floor(number/10);
}

console.log(sum);                               // Output: 1 + 2 + 3 = 6


//* 🔁 Exercise 27: Print 5x5 Square

//? 📝 Task: Use nested for loops to print a 5x5 square made of "*".

//  ✅ Pseudocode:
//  FOR each row  from 1 to 5
//      SET rowOutput = "";
//      FOR each column from 1 to 5
//          ADD "#" to rowOutput
//      PRINT rowOutput

//! Solution

for (let row = 1; row <= 5; row++) {
    let rowOutput = "";

    for (let col = 1; col <= 5; col++){
        rowOutput += "# ";
    }
    console.log(rowOutput);
}


//* 🔁 Exercise 28: Remove Short Words

//? 📝 Task: Use a for...of loop to filter out words shorter than 4 letters from an array.

//  ✅ Pseudocode:
//  SET array of words
//  FOR each word in array
//      IF word length is greater than or equal to 4
//          PRINT the word

//! Solution

const wording = ["Spinach", "Lettuce", "Kale", "Cabbage", "Carrots", "Potatoes", "Turnips", "Beets", "Radishes"];

for (let word of wording) {
    if (word.length <= 4)
    console.log(word);
}


//* 🔁 Exercise 29: Count Booleans in Mixed Array

//? 📝 Task: Count how many true or false values exist in an array of mixed types.

//  ✅ Pseudocode:
//  SET mixed array
//  SET trueCount
//  SET falseCount

//  FOR each i less than array length
//      IF array is true
//          INCREMENT true
//      IF array is false
//          INCREMENT false

//  PRINT true
//  PRINT false  


//! Solution
const mixedArr = [true, false, "hello", 42, true, null, false, true];
let trueCount = 0;
let falseCount = 0;

for (let i = 0; i < mixedArr.length; i++) {
    if (mixedArr[i] === true) trueCount++;
    if (mixedArr[i] === false) falseCount++;
}

console.log("Number of true values:", trueCount);
console.log("Number of false values:", falseCount);


//* 🔁 Exercise 30: Search Object for Match

//  📝 Task: Use for...in to search for a value in an object. If the value is found, print the key.

//  ✅ Pseudocode:
//  SET object to several values
//  SET search value

//  FOR each key in the object
//      IF object key is equal to search value
//          PRINT key
//          BREAK

//! Solution

const obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 20,
    e: "hello"
};

const searchValue = 20;

for (const key in obj) {
    if (obj[key] === searchValue) {
        console.log(key);
        break;
    }
}


//* 🔁 Exercise 31: Skip Odd Numbers

//  📝 Task: Use a for loop to print numbers 1–20, but skip all odd numbers.

//  ✅ Pseudocode:
//  SET even numbers array

//  FOR i from 1 to 20
//      IF i modulo 2 is strictly equal to 0
//          PRINT i

//! Solution

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} 


//* 🔁 Exercise 32: Capitalize First Letters

//  📝 Task: Given an array of lowercase names, use for...of to print them with the first letter capitalized.

//  ✅ Pseudocode:
//  SET array of lowercase names

//  FOR name of array
//      PRINT name toUpperCase plus name slice

//! Solution

const lowercaseNames = ["abigail", "adela", "brian", "colleen", "duff", "esther", "frank", "gail", "harlan", "ivy", "jack", "katherine", "logan", "mary", "norton", "odell", "percival", "rowena", "stephen", "tara", "upton", "velma", "william"];

for (let name of lowercaseNames) {
    console.log(name[0].toUpperCase() + name.slice(1));
}

//? 📈 Code Breakdown

//  • name[0].toUpperCase() → capitalizes the first letter
//  • name.slice(1) → gets the rest of the string starting from index 1
//  • Concatenating them gives the capitalized version
//  ✔️ This approach works for any name with at least one character.


//* 🔁 Exercise 33: Count Object Values Over 100

//  📝 Task: Use for...in to count how many values in an object are greater than 100.

//  ✅ Pseudocode:
//  SET object to several values
//  SET count object

//  FOR each key in the object
//      IF object key is greater than 100
//      INCREMENT count object

//  PRINT count object

//! Solution

const values = {
    a: 10,
    b: 50,
    c: 100,
    d: 120,
    e: "smile",
    f: 150
};

let countObj = 0;

for (const key in values) {
    if (typeof values[key] === "number" && values[key] > 100) {
        console.log(`${key.toUpperCase()}: ${values[key]}`);
        countObj++;
    }
}

console.log(countObj);


//* 🔁 Exercise 34: Find First Palindrome

//  📝 Task: Given an array of words, use a while loop to find and print the first word that’s a palindrome (same forward and backward).

//  ✅ Pseudocode:
//  SET array of words
//  SET i equal to 0
//  SET found to false

//  WHILE i is less than palindrome length and is not found
//      SET word equal to palindrome i
//      SET reversed equal to word split reverse join
//      IF word is strictly equal to reversed
//          PRINT palindrome
//          found = true
//      INCREMENT

//! Solution

const palindrome = ["not a palindrome", "nope", "almost", "A man, a plan, a canal. Panama", "race car", "unu"];
let i = 0;
let found = false;

while (i < palindrome.length && !found) {
    let word = palindrome[i];
    let cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
    let reversed = cleaned.split("").reverse().join('');

    if (cleaned === reversed) {
        console.log("The first word that’s a palindrome is:", word);
        found = true;
    }
    i++;
}


//* 🔁 Exercise 35: Repeat Prompt Until Number (simulate with array)

//? 📝 Task: Use do...while to simulate asking for input until the user types a number. Use an array like ["hello", "world", 42] to simulate input values.

//  ✅ Pseudocode:

//  SET simulatedInputs
//  SET index
//  DECLARE inputValue

//  DO
//      SET inputValue = simulatedInputs[index]
//      INCREMENT index
//  WHILE typeof inputValue is not "number"

//  PRINT inputValue

//! Solution

let simulatedInputs = ["hello", false, "world", 42, true,];
let index2 = 0;
let inputValue;

do {
    inputValue = simulatedInputs[index2];
    index2++;
} while (typeof inputValue !== "number");

console.log("First number entered:", inputValue);


//* 🔁 Exercise 36: Reverse Digits of a Number

//? 📝 Task: Use a while loop to reverse the digits of a number (e.g., 123 → 321).

//  ✅ Pseudocode:
//  SET reverseNum equal to 123
//  SET reverseArr equal to 0
//  SET reminder2

//  WHILE reverseNum is greater than 0
//      reminder2 equal to reverseNum modulo 10
//      reverseArr equal to reverseArr times 10 plus reminder2
//      reverseNum equal to Math.floor reverseNum divide 10

//  PRINT reverseArr

//! Solution

let reverseNum = 123;
let reverseArr = 0;
let remainder2;

while (reverseNum > 0) {
    remainder2 = reverseNum % 10;
    reverseArr = reverseArr * 10 + remainder2;
    reverseNum = Math.floor(reverseNum / 10);
}

console.log(reverseArr);


//* 🔁 Exercise 37: Count Vowels in a Sentence

//? 📝 Task: Loop through a string and count the number of vowels (a, e, i, o, u).

//  ✅ Pseudocode:
//  SET vowels equal to a string
//  SET countVowels equal to 0
//  SET char equal to an empty string

//  FOR i less than vowels length
//      char equal to vowels toLowerCase
//      IF aeiou includes char
//          INCREMENT countVowels

//  PRINT countVowels

//! Solution

let vowels = "In JavaScript, a string is a data type used to represent textual data as a sequence of characters. A string can contain a single word, a sentence, multiple sentences, or even just a single character.";
let countVowels = 0;
let char = "";

for (let i = 0; i < vowels.length; i++) {
    char = vowels[i].toLowerCase();
    if ("aeiou".includes(char)) {
        countVowels++;
    }
}

console.log("The total number of vowels is:", countVowels);


//* 🔁 Exercise 38: Build Triangle Pattern

//? 📝 Task: Use nested loops to print a right-aligned triangle pattern of *, like:
//  *
//  **
//  ***
//  ****

//  ✅ Pseudocode:
//  FOR i from 1 to rows
//    SET line to ""

//    FOR j from 1 to (rows - i)
//        ADD " " to line

//    FOR k from 1 to i
//        ADD "*" to line

//    PRINT line


//! Solution

let rows = 4;

for (let i = 1; i <= rows; i++) {
    let line = '';

    // Add spaces
    for (let j = 1; j <= rows - i; j++) {
        line += ' ';
    }

    // Add stars
    for (let k = 1; k <= i; k++) {
        line += '*';
    }
    console.log(line);
}


//* 🔁 Exercise 39: Find Key by Value (Case Insensitive)

//? 📝 Task: Search an object for a value (string) and print its key, ignoring case sensitivity.

//  ✅ Pseudocode:
//  SET object with key-value pairs
//  SET search value (e.g. "three")

//  FOR each key in object
//      IF lowercase of object[key] equals lowercase of search value
//          PRINT the key

//! Solution

const objectValue = {
    a: "one",
    b: "Two",
    c: "thRee",
    d: "fOUr",
    e: "fivE"
}

const searchValues = "three";

for (const key in objectValue) {
    if (objectValue[key].toLowerCase() === searchValues.toLowerCase()) {
        console.log(`Found match at key: ${key}`);
        break;
    }
}


//* 🔁 Exercise 40: Categorize Array by Type

//?  📝 Task: Use a for...of loop to iterate through a mixed array and group items into separate arrays by type (string, number, boolean).

//  ✅ Pseudocode:
//  SET mixedArray
//  SET string
//  SET number
//  SET boolean

//  FOR let item of mixedArray
//      IF typeof item strictly equal to "string"
//          string push item
//      IF typeof item strictly equal to "number"
//          number push item
//      IF typeof item strictly equal to "boolean"
//          boolean push item

//  PRINT string
//  PRINT number
//  PRINT boolean

//! Solution

let mixedArrays = ["hello", 42, true, "world", false, 3.14, 100, "JavaScript", 77, "React"];

let strings = [];
let numbers2 = [];
let booleans = [];

for (let item of mixedArrays) {
    if (typeof item === "string") {
        strings.push(item);
    } else if (typeof item === "number") {
        numbers2.push(item);
    } else if (typeof item === "boolean") {
        booleans.push(item);
    }
}

console.log("Strings:", strings);
console.log("Numbers:", numbers2);
console.log("Booleans:", booleans);


//* 🔁 Exercise 41: Factorial Calculator

//? 📝 Task: Use a while loop to compute the factorial of a number (e.g., 5! = 5 × 4 × 3 × 2 × 1).

//  ✅ Pseudocode:

//  FUNCTION factorialOf
//      SET result to 1
//      SET w to 1
//      SET factorial to 1

//      WHILE w is less than or equal to factorial
//          result times equal to w
//          INCREMENT w
//      RETURN result

//  PRINT factorialOf  

//! Solution

function factorialOf(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

console.log(factorialOf(5));                    // Output: 120


//* 🔁 Exercise 42: Filter Object Properties by Type

//? 📝 Task: Use for...in to loop through an object and print only the keys whose values are strings.

//  ✅ Pseudocode:
//  SET object with mixed types
//  CREATE an empty array for string values

//  FOR each key in the object
//      IF typeof value is string
//          PUSH the key or value to the string array

//  PRINT the array of string values or keys

//! Solution

const filterObj = {
    a: 1,
    b: "one",
    c: true,
    d: 4,
    e: "object",
    f: false
};

let string = [];

for (const key in filterObj) {
    if (typeof filterObj[key] === "string"){
        string.push(key);
    }
}

console.log("Keys with string values:", string);


//* 🔁 Exercise 43: Loop Until Odd Found

//? 📝 Task: Use a do...while loop and a simulated array of inputs. Print and stop once an odd number is found.

//  ✅ Pseudocode:
//  SET array of numbers
//  SET index to 0
//  SET value

//  DO
//      SET value to array[index]
//      INCREMENT index
//  WHILE value is even (value % 2 === 0)

//  PRINT value

//! Solution

let inputs = [2, 4, 6, 8, 9];
let index4 = 0;
let odd;

do {
    odd = inputs[index4];
    index4++;
} while (odd % 2 === 0 && index4 < inputs.length);

//  To avoid accessing undefined, where no odd number exists, we will use an if...else statement.

if (odd % 2 !== 0) {
    console.log("The first odd number is:", odd);
} else {
    console.log("No odd numbers found.");
}


//* 🔁 Exercise 44: Print Words Until One Has More Than 6 Letters

//? 📝 Task: Use a for...of loop to print each word until you reach one longer than 6 characters.

//  ✅ Pseudocode:
//  SET a string of text
//  SPLIT the string into words

//  FOR each word in the list of words
//      PRINT the word
//      IF the word’s length is greater than 6
//          BREAK the loop

//! Solution

const text = "The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.";
const splitWords = text.split(" ");

for (const word of splitWords) {
    console.log(word);
    if (word.length > 6) {
        break;
    }
}


//* 🔁 Exercise 45: Print Square Root Table (1 to 10)

//? 📝 Task: Use a for loop to print numbers from 1–10 and their square roots (rounded to 2 decimals).

//  ✅ Pseudocode:
//  FOR i from 1 to 10
//    CALCULATE the square root of i
//    ROUND the square root to 2 decimal places
//    PRINT i and its square root


//! Solution

for (let i = 1; i <= 10; i++) {
    let sqrt = Math.sqrt(i).toFixed(2);
    console.log(`√${i} = ${sqrt}`);
    console.log(`${i} → ${sqrt}`);
}


//* 🔁 Exercise 46: Count Uppercase Letters

//? 📝 Task: Use a loop to count how many uppercase letters are in a given string.

//  ✅ Pseudocode:
//  SET uppercaseLetters string
//  SET upperCount

//  FOR word of uppercaseLetters
//      FOR  char of word
//          IF char is strictly equal to char toUpperCase and char is NOT strictly equal to char toLowerCase 
//              INCREMENT upperCount

//  PRINT upperCount

//! Solution

const uppercaseLetters = ["ability", "able", "bake", "balance", "category", "Catholic", "CEO", "democracy", "Democrat", "DNA", "efficient", "effort", "feeling", "fellow", "guest", "guide", "hope", "horizon", "ideal", "identification", "Japanese", "jet", "kind", "king", "least", "leather", "map", "margin", "Mexican", "native", "natural", "okay", "old", "Olympic", "passion", "past", "PC", "qualify", "quality", "recommendation", "record", "Republican", "sacred", "scenario", "Senate", "technique", "technology", "TV", "uniform", "union", "unique", "video", "view", "wisdom", "wise", "wish", "yellow", "yes", "yesterday", "zone"];

let upperCount = 0;

for (const word of uppercaseLetters) {
    for (const char of word) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            upperCount++;
        }
    }
}

console.log("The total of uppercase letter is:", upperCount);


//* 🔁 Exercise 47: Find Longest Word in Array

//? 📝 Task: Use a for...of loop to find and print the longest word in an array of strings.

//  ✅ Pseudocode:
//  SET longestWords array
//  SET lengthy

//  FOR word of longestWord
//      IF word length is greater than the lengthy length
//          lengthy is equal to word

//  PRINT   lengthy

//! Solution

const longestWord = ["ability", "able", "bake", "balance", "category", "Catholic", "CEO", "democracy", "Democrat", "DNA", "efficient", "effort", "feeling", "fellow", "guest", "guide", "hope", "horizon", "ideal", "identification", "Japanese", "jet", "kind", "king", "least", "leather", "map", "margin", "Mexican", "native", "natural", "okay", "old", "Olympic", "passion", "past", "PC", "qualify", "quality", "recommendation", "record", "Republican", "sacred", "scenario", "Senate", "technique", "technology", "TV", "uniform", "union", "unique", "video", "view", "wisdom", "wise", "wish", "yellow", "yes", "yesterday", "zone"];

let lengthy = ""; 

for (const word of longestWord) {
    if (word.length > lengthy.length) {
        lengthy = word;
    }
}

console.log("The longest word is:", lengthy);


//* 🔁 Exercise 48: Tally Types in Mixed Object

//? 📝 Task: Use for...in to tally how many properties are string, number, or boolean.

//  ✅ Pseudocode:
//  SET object
//  SET stringCount
//  SET numberCount
//  SET booleanCount

//  FOR properties in exampleObj
//      SET value equal to exampleObj
//      SET type equal to typeof value
//      IF type strictly equal to string
//          Increment stringCount
//      IF type strictly equal to 
//          Increment numberCount
//      IF type strictly equal to 
//          Increment booleanCount

//  PRINT stringCount
//  PRINT numberCount
//  PRINT booleanCount

//! Solution

const exampleObj = {
    name: "Emily",
    age: 30,
    isStudent: true,
    score: 95.5,
    isEmployed: true,
    city: "Paris",
    hasPet: false
};

let stringCount = 0;
let numberCount = 0;
let booleanCount = 0;

for (const properties in exampleObj) {
    const value = exampleObj[properties];
    const type = typeof value;
    
    if (type === 'string') {
        stringCount++;
    } else if (type === 'number') {
        numberCount++;
    } else if (type === 'boolean') {
        booleanCount++;
    }
}

console.log("String properties:", stringCount);
console.log("Number properties:", numberCount);
console.log("Boolean properties:", booleanCount);


//* 🔁 Exercise 49: Sum All Even Digits of a Number

//? 📝 Task: Use a while loop to extract digits from a number and sum only the even ones.

//  ✅ Pseudocode:
//  SET digits
//  SET sumOfEvens
//  SET currentNum equal to Match.abs digits

//  WHILE currentNum is greater than 0
//      LET digit equal to current modulo 10
//      IF digit modulo 2 strictly equal to 0
//          sumOfEvens plus equal to digit
//      currentNum equal to Math.floor currentNum divide by 10

//  PRINT sumOfEvens

//! Solution

let digits = 1234567;
let sumOfEvens = 0;
let currentNum = Math.abs(digits);

while (currentNum > 0) {
    let digit = currentNum % 10;
    if (digit % 2 === 0) {
        sumOfEvens += digit;
    }
    currentNum = Math.floor(currentNum / 10);
}

console.log("Sum of even digits:", sumOfEvens);


//* 🔁 Exercise 50: Draw Number Triangle

//?  📝 Task: Use nested for loops to print this pattern:
//  1
//  1 2
//  1 2 3
//  1 2 3 4

//  ✅ Pseudocode:

//  SET max equal to 4

//  FOR initializes a loop where i starts at 1 and increments by 1 until it reaches the given array number
//      SET line
//      FOR initializes a loop where j begins at 1 and increments by 1 until it reaches i
//          line plus equal to j plus " "

//  PRINT line to output the pattern value to the console

//! Solution

let max = 4;

for (let i = 1; i <= max; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}


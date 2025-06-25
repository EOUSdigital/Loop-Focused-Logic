//TODO 📗 Module 5. Logic and Control Flow - Lesson 07.02: Loops and Iteration - Loop-Focused Logic


//TODO 📝 Step 4: Exercises

//* 🔁 Exercise 1: Counting Forward (using for)

//  📝 Task:
//?  Print numbers from 1 to 10 using a for loop.

//  ✅ Pseudocode:
//  • let i = 1                         → Start counting from 1
//  • i <= 10                           → Keep looping as long as i is less than or equal to 10
//  • i++                               → Increase i by 1 every time

//! Solution

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


//* 🔁 Exercise 2: Reverse Countdown (using while)

//  📝 Task:
//? Use a while loop to print numbers from 5 down to 0.

//  ✅ Pseudocode:
//  Set variable j = 5
//  WHILE j is greater than or equal to 0
//     - Output j
//     - Decrease j by 1

//! Solution

let j = 5;
while (j >= 0) {
    console.log(j);
    j--;
}

//  🧠 Breakdown:
//  • let j = 5;                        → Start from 5
//  • while (j >= 0)                    → Keep running the loop as long as j is 0 or higher
//  • console.log(j);                   → Show current value
//  • j--;                              → Decrease by 1


//* 🍎 Exercise 3: Print Fruits (using for...of)

//  📝 Task:
//? Loop through the following array and print each fruit.

const fruits = ["🍎 apple", "🍌 banana", "🍇 grapes"];

//  ✅ Pseudocode:
//  Set variable fruits to an array
//  For each fruit in fruits:
//     - Print "Today's snack:" followed by the fruit

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

//  📝 Task:
//? Print the key and value from the object below.

const person = {
    name: "Nina",
    age: 27,
    job: "Designer"
};

//  🟨 Possible Output:
// name: Nina
// age: 27
// job: Designer

//  ✅ Pseudocode:
// Define a person object with properties (name, age, job)
// For each key in the person object:
//    - Print the key
//    - Print the value at that key (person[key])

//! Solution

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


//* 💬 Exercise 5: Ask Until "yes" (using do...while)

//  📝 Task:
//? Simulate asking the user to type "yes" until they do (pretend prompt or use a looped value).

//  ✅ Pseudocode:
//  Declare a variable to store the user input
//  Do this:
//      - Set the variable to some value (simulate user input)
//      - Print the response
//  While the response is not equal to the expected answer ("yes")

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


//* 🧮 Exercise 6: Sum Numbers from 1 to N (using for)

//  📝 Task:
//? Write a function that takes a number n and returns the sum of all numbers from 1 to n.

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


//* 📦 Exercise 7: Filter Long Words (using for...of)

//  📝 Task:
//? Loop through an array of words and print only those longer than 5 characters.

//  ✅ Pseudocode:
//  SET words to an array of strings        → Declares the variable
//  FOR each word of words                  → loop through the values in the array
//  IF the word's length is greater than 5
//      PRINT the word

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


//* 🧍 Exercise 8: Capitalize Properties (using for...in)

//  📝 Task:
//? Loop through an object and convert all values to uppercase strings.

//  ✅ Pseudocode:
//  SET user to an object with properties    → Declares the variable
//  FOR each key in user
//  PRINT key in uppercase
//  PRINT user[key] in uppercase

//! Solution

const user = { name: "linda", job: "developer" };

for (let key in user) {
    console.log(key.toUpperCase() + ": " + user[key].toUpperCase());
    // Output: NAME: LINDA, JOB: DEVELOPER
}

//  🧠 Review:
//  • for (let key in user) → Loops over the keys: "name" and "job"
//  • user[key] → Accesses values: "linda" and "developer"
//  • .toUpperCase() → Makes the value uppercase


//* 🔂 Exercise 9: Loop Until Even (using while)

//  📝 Task:
//? Starting from 1, loop until you find the first even number greater than 10, then print it.

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


//* 📥 Exercise 10: User Retry Prompt (using do...while)

//  📝 Task:
//? Simulate a user trying to enter a password. Keep looping until the user "enters" the correct password.

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

//  📝 Task:
//? Use a for loop to print the multiplication table of 3 (from 3×1 to 3×10).

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

//  📝 Task:
//? Reverse an array of colors and print each one using a for...of loop.

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

//  📝 Task:
//? Count and print how many properties an object has.

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

//  📝 Task:
//? Add all even numbers between 1 and 20 using a while loop.

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

//  WHILE guess is not equal to the correct

//  PRINT "You guessed the correct number"


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

//  📝 Task:
//? Use nested for loops to print a 3x3 grid of # symbols.

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

//  📝 Task:
//? Loop through a mixed array and print only the numbers.

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

//  📝 Task:
//? Use a loop to count the total number of characters in an array of words.

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

//  📝 Task:
//? Loop through object keys and print them in uppercase.

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

//  📝 Task:
//? Use a while loop to check strings from a list until one contains the letter "e".

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

//  📝 Task: 
//? Use a while loop to count down from 10 to 1 and print each number.
//  At the end, print "Lift off!"

//  ✅ Pseudocode:
//  SET variable t = 10
//  WHILE t is greater than or equal to 0
//     - LOG output t
//     - DECREASE t by 1
//  - LOG  output "Lift off!"

//! Solution

let t = 10;
while (t >= 1) {
    console.log(t);
    t--;
}

console.log("Lift off!");


//* 🔁 Exercise 22: Double All Numbers (using for)
//  📝 Task:
//? Given an array of numbers, double each one and print the new values.

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
//  📝 Task:
//? Given an object with a user's hobbies, print each hobby's name and value.

//  ✅ Pseudocode:
//  SET hobbies to an object with properties
//  FOR each key in hobbies
//      PRINT key in uppercase + hobbies[key]

//! Solution

const hobbies = { sport: "tennis", music: "guitar", art: "drawing" };
// Output: SPORT: tennis, MUSIC: guitar, etc.

for (let key in hobbies) {
    console.log(`${key.toUpperCase()}: ${hobbies[key]}`);
}


//* 🔁 Exercise 24: Filter Names with Letter "a"

//  📝 Task:
//? Use a for...of loop to print only the names that contain the letter "a".

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

//  📝 Task:
//? Start with 1 and multiply by 2 until the number reaches or exceeds 100.

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

//  📝 Task:
//? Use a while loop to compute the sum of all digits of a number.

//  ✅ Pseudocode:
//  SET sum
//  SET number to a number

//  WHILE number is greater than 0
//      sum plus equal to number modulo 10
//      number equal to Math floor where number divide by 10

//  PRINT sum

//! Solution            

// Input: 123 → Output: 1 + 2 + 3 = 6

let sum = 0;
let number = 123;

while (number > 0) {
    sum += number % 10
    number = Math.floor(number/10);
}

console.log(sum);



//* 🔁 Exercise 27: Print 5x5 Square

//  📝 Task:
//? Use nested for loops to print a 5x5 square made of "*".

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

//  📝 Task:
//? Use a for...of loop to filter out words shorter than 4 letters from an array.

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

//  📝 Task:
//? Count how many true or false values exist in an array of mixed types.

//  ✅ Pseudocode:
//  SET mixed array
//  SET trueCount
//  SET falseCount

//  FOR each i less than array length
//      IF array is true
//          INCREMENT true
//      IF array is false
//          INCREMENT false
//  END

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

//  📝 Task: 
//? Use for...in to search for a value in an object. If the value is found, print the key.

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

//  📝 Task:
//? Use a for loop to print numbers 1–20, but skip all odd numbers.

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

//  📝 Task:
//? Given an array of lowercase names, use for...of to print them with the first letter capitalized.

//  ✅ Pseudocode:

//  SET array of lowercase names

//  FOR name of array
//      PRINT name toUpperCase plus name slice
//  END

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

//  📝 Task:
//? Use for...in to count how many values in an object are greater than 100.

//  ✅ Pseudocode:

//  SET object to several values
//  SET count object

//  FOR each key in the object
//      IF object key is greater than 100
//      INCREMENT count object
//  END

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

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */
JS data types includes the following;
"Null": can be used to set a js property as empty.
"Undefined" describes a data that has not been assigned to a variable and vise versa.
"Number" is used to store floating point numbers or integer in a variable.
"Boolean" describes when a statement or code is either "True" or "False".
"String" is capable of storing text in JS. it is usually enclosed by a quote ("").




/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
"A JS object is a collection of data that have some relationship or functionality." 
"They are often made up of variables and functions called properties and methods when used inside the object for example, an object can consist of details of a person such as Age, height, nationality etc" 
"A simple object could be decleared as such;"
const Victor = {
    height: 5.6;
    nationality: "Nigerian";
    school: "Epicode";
};

"In specific cases, they could also contain a function as property."

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/



/* WRITE YOUR ANSWER HERE */
let a = 12;
let b = 20;

let c = a + b;


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */
let x = 12;
/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

/* WRITE YOUR ANSWER HERE */
let name = "Victor";

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */
let d = x - 4;
/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

/* WRITE YOUR ANSWER HERE */
let name1 = "john";
let name2 = "John";

console.log(name1 ===name2);

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/

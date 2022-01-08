# JS-Array-Methods-Practise

Task-1: Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


Task-2: Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)


Task-3: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]


Task-4: Sort in decreasing order
let arr = [5, 2, 1, -10, 8];
... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10


Task-5: Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


Task-6: Map to names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];
let names = /* ... your code */
alert( names ); // John, Pete, Mary


Task-7: Sort users by age
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let arr = [ pete, john, mary ];
sortByAge(arr);
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


Task-8: Get average age
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


Task-9: Filter unique array members
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:
function unique(arr) {
  /* your code */
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); // Hare, Krishna, :-O


Task-10: Create keyed object from array
Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
For example:
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
let usersById = groupById(users);
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
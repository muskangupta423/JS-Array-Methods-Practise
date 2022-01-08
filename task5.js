// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

//
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	return(arr.slice().sort());
}

let sorted = copySorted(arr);

console.log( sorted ); 
console.log( arr );

// Method 2
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	let copyArr = arr;
	return(copyArr.sort())
}

let sorted = copySorted(arr);

console.log( sorted ); 
console.log( arr );
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
	arr.forEach((val,index) => val <=a && val >=b ? val : arr.splice(index,1))
  return arr;
}

filterRangeInPlace(arr, 1, 4); 

console.log(arr);
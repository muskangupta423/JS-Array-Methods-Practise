//Sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
// alert( arr ); // 8, 5, 2, 1, -10


// Method 1
let arr = [5, 2, 1, -10, 8];

function sortDescending(arr) {
	arr.sort((a,b) => b-a);
  return arr;
}

console.log(sortDescending(arr));


// Method 2
function bubbleSort(arr){     
 for(var i = 0; i < arr.length; i++){
   for(var j = 0; j < ( arr.length - i -1 ); j++){
     if(arr[j] < arr[j+1]){         
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 return arr;
}

console.log(bubbleSort(arr));
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
	str = str.split("-").map((word,index) => 
  	index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("")
  return str;
}

console.log(camelize("background-color"));

console.log(camelize("to-the-world"));
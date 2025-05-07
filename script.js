function firstChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  return '';
}

// Example usage:
console.log(firstChar(' Rosa Parks '));   // Output: 'R'
console.log(firstChar(' Hello World '));  // Output: 'H'
console.log(firstChar(' '));              // Output: ''
console.log(firstChar(''));               // Output: ''



// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));

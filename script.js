// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
    return a.slice(0, 3);
 }


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type 

 function myFunction (a, b) {
        return a === b
}

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
    if (a < b) {
     return a / b; 
    } else {
    return a * b
    };
 }

 // yra visiskai tas pats kaip:

 function myFunction(a, b) {
    return a < b ? a / b : a * b
  };

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a) {
    return a.slice(3);
 }

 // Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
    return b / 100 * a
}

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function myFunction(a) {
    return a.slice(0, -3);
 }

 // Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }

 // Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

function myFunction(a) {
       return a.slice(0, a.length / 2);
 }

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFun(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) count++;
    }
    return count;
}

//yra tas pats kaip: 
function myFunction(a, b) {
    return b.split(a).length - 1
  }


// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
    return str.slice(-3);
 }

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

 function myFunction(a) {
       return a % 2 === 0 ? true : false;
 }
 //yra tas pats: 
 function myFunction(a) {
    return a - Math.floor(a) === 0
  }

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
    if (a.includes(b)) {
    return b.concat(a) 
    } else {
    return a.concat(b)
    };
 }

// yra tas pats:
function myFunction(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a
  }

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
    return (Math.round(a * 100)) / 100;
 }

 //tas pats
 function myFunction(a) {
    return Number(a.toFixed(2));
  }

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
    return a % 2 === 0 ? true : false;
 }
 //tas pats 
 function myFunction(a) {
    return a % 2 === 0
  }

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
    const func = x => x.replace('%','');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
  }

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

function myFunction(x, y) {
    while (x % y !== 0) x++;
    return x;
  }

//ir sitie du turetu veikti
function myFunction(x, y) {
    return Math.floor((x + y - 1) / y) * y;
    
 }

 //(Math.ceil x / y) * y



// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
 function myFunction(a) {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
          return myFunction(++a);
        }
      }
      return a;
 }

 //taip pat: 
 function myFunction( a ) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
   let n = a;
   while (!isPrime(n)) n++;
  return n
  }

  //sita su jai padarem:
  function myFunction(a) {
    const isPrime = (n) => {
      const prime = 0;
      for (let i = 2; i* i <= n; i ++){
        if (n % i === 0) {
          prime ++;
        }
      }
      return prime > 0 ? false : true;
    }
    while(!isPrime(a)) a++;
    return a;
   }
  


// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word


function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('');
}


//tas pats: 
function myFunction(str) {
    return [...str].reduce((p, v) => p + String.fromCharCode(v.charCodeAt(0) + 1), '')
  }

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
    return [...a+''].map(v => +v)
  }

//tas pats: 

function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}



// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    return a.split('').reverse().map((c, index) => {    return index % 3 == 2 ? b + c : c  }).reverse().join('')
}

//tas pats: 
function myFunction(a, b) {
    let result = [];
    let rest = a;
    while (rest.length) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
 }




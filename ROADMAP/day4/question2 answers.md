
/*a.Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let oddNumbers = array.filter(num => num % 2 != 0);
console.log(oddNumbers);
output:[ 1, 3, 5, 7, 9 ]
b.Convert all the strings to title caps in a string array
let array = ["hello", "world"]; 
let result = array.map(str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
console.log(result); 
output: ['Hello', 'World']

c.Sum of all numbers in an array
let array = [1, 2, 3, 4, 5]; 
let sum = array.reduce((total, value) => total + value, 0);
console.log(sum); 
output:15
d.Return all the prime numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

let primes = array.filter(isPrime);

console.log(primes); 
output: [ 2, 3, 5, 7 ]

e.Return all the palindromes in an array
let array = ["mom", "hello", "dad", "world", "radar"]; // your array

let isPalindrome = str => {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

let palindromes = array.filter(isPalindrome);

console.log(palindromes); 
output:[mom,dad,radar]
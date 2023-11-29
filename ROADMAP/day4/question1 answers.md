a. Print odd numbers in an array 
(function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Your array
    array.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})();
output: 1 3 5 7 9
 
 
b.Convert all the strings to title caps in a string array

let stringArray = ['hello', 'world', 'this', 'is', 'a', 'test'];

(function(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/\b\w/g, function(l){ return l.toUpperCase() });
    }
    console.log(arr);
})(stringArray);
output:[ 'Hello', 'World', 'This', 'Is', 'A', 'Test' ]


c.Sum of all numbers in an array
let numbers = [1, 3,6 , 4, 5]; 

let sum = (function(arr) {
    return arr.reduce(function(a, b){
        return a + b;
    }, 0);
})(numbers);

console.log(sum); 
output: 19

d.Return all the prime numbers in an array
(function() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var primes = array.filter(function(num) {
        for(var i = 2; i < num; i++)
            if(num % i === 0) return false;
        return num > 1;
    });
    console.log(primes);
})();
output:[ 2, 3, 5, 7, 11, 13 ]

e.Return all the palindromes in an array

(function(arr) {
    var palindromes = arr.filter(function(item) {
        var reversedItem = item.split('').reverse().join('');
        return item === reversedItem;
    });
    console.log(palindromes);
})(['mom', 'dad', 'noon', 'dear']);
output:[ 'mom', 'dad', 'noon' ]

f.Return median of two sorted arrays of the same size.
let medianOfTwoSortedArrays = (function() {
    return function(arr1, arr2) {
        let merged = [...arr1, ...arr2].sort((a, b) => a - b);
        let mid = Math.floor(merged.length / 2);
        return merged.length % 2 !== 0 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2;
    };
})();

console.log(medianOfTwoSortedArrays([1, 3, 5], [2, 4, 6]));  

output: 3.5

g.Remove duplicates from an array
let array = [1, 2, 2, 3, 4, 4, 5]; 

let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(array);

console.log(uniqueArray);
output: [1, 2, 3, 4, 5]

h.Rotate an array by k times
(function(arr, k) {
    var rotate = function(arr, k) {
        k = k % arr.length;
        return arr.slice(-k).concat(arr.slice(0, -k));
    };
    console.log(rotate(arr, k));
})([1, 2, 3, 4, 5], 2);
output:[ 4, 5, 1, 2, 3 ]


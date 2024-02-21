function squareNumbers(numbers) {
    return numbers.map(number=>number ** 2);
}
function calculateAverage(numbers, callback) {
    let squares = callback(numbers);
    return (squares.reduce((p, c) => p + c) /numbers.lenght);
}
let result = calculateAverage([1, 2, 3, 4, 5], squareNumbers);
console.log(result);
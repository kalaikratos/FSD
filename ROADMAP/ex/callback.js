function subraction(x, y){
    return x - y;
}
function division(x, y) {
    return x % y;
}
function getResults(x, y, operate) {
    return operate(x, y);
}
console.log(getResults(2, 5, subraction));
console.log(getResults(2, 5, division));
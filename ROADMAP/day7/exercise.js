/*let numbers = [3, 7, 4, 6, 9, 2];
function cuber(value, index, array) {
    return value ** 3;
}
let cube = numbers.map(cuber);
console.log(cube);
------------------------------------------------------

let prices = [2, 3, 4, 6, 8, 9];
let discountedPrice = prices.map (price=> {
    if (price < 5) {
        return price * 0.9;
    } else if(price >5){
        return price * 0.8;
    }
        else {
        return price;
        }
});
console.log(discountedPrice);
--------------------------------------------
let numbers = [3, 7, 4, 6, 10, 2, 11, 5];
let divisbleFilter = (value, index, array) => {
    if (value % 3 == 0) return true;
}
let divisibleNumbers = numbers.filter(divisbleFilter);
console.log(divisibleNumbers);
let prices = [2, 3, 4, 6, 8, 9];

const XMLHttpRequest = require('xhr2');

//require the emoji-flags library 

const emojiFlags = require('emoji-flags');
let xhr = new XMLHttpRequest();

// open the connection

       xhr.open('GET','https://restcountries.com/v2/all', true);

       // send the http request

       xhr.send();

       // function to handle the response from the web server

       xhr.onload = function(){

       // convert the json string response xhr.responseText 
    // to a javascript object

       var data = JSON.parse(xhr.response);

       //use forEach function to print details 

           data.forEach((value) => {
            let countryEmoji = emojiFlags.countryCode(value.alpha2Code);
                console.log("country name =>",value.name,",capital =>",value.capital,",flag =>",countryEmoji.emoji);
    })}


*/

 let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3/all', true);
xhr.send();
xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    data.forEach(country => {
        if (country.currencies && country.currencies.USD) {
            console.log(`Country: ${country.name.common}`);
        }
    });
}

    
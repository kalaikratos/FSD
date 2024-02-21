
// require the library xhr2
let XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// function to handle the response from the web server
xhr.onload = function () {
    // convert the json string response xhr.responseText 
    // to a javascript object
    
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].flag);
    }
}

// send the http request
xhr.send();
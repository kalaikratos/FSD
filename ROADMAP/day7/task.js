//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//a.)Get all the countries from Asia continent /region using Filter function

//require the library xhr2

const XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class

let xhr = new XMLHttpRequest();

//open the connection

xhr.open('GET', 'https://restcountries.com/v3.1/all');

// send the http request

xhr.send();

// function to handle the response from the web server

xhr.onload = function () {

     // convert the json string response xhr.responseText 
       // to a javascript object

    const countries = JSON.parse(xhr.response);

    //print countries in asian region

    console.log(countries.filter(country => {
        if (country.region == 'Asia') {
            return true;
        }
    }).map(country => country.name.common));    
}

//b.)Get all the countries with a population of less than 2 lakhs using Filter function


//require the library xhr2

const XMLHttpRequest = require('xhr2');

// create an object to the XMLHttpRequest class

 let xhr = new XMLHttpRequest();

 //open the connection

       xhr.open('GET','https://restcountries.com/v3.1/all', true);

       //send the http request

       xhr.send();

       // function to handle the response from the web server
      
       xhr.onload = function(){

         // convert the json string response xhr.responseText 
       // to a javascript object

       var countries = JSON.parse(xhr.response);

         //print all the countries with population less than 2lakhs

   console.log(countries.filter(country => {
        if (country.population <200000) {
            return true;
        }
    }).map(country => country.name.common));}

//c.)Print the following details name, capital, flag, using forEach function


   // require the library xhr2

const XMLHttpRequest = require('xhr2');
       let xhr = new XMLHttpRequest();
       xhr.open('GET','https://restcountries.com/v3.1/all', true);
       xhr.send();
       xhr.onload = function(){
       var data = JSON.parse(xhr.response);
       data.forEach((value)=>{
           console.log("country name =>",value.name,",capital =>",value.capital,",flag =>",value.flag);
          
    })}
//d.)Print the total population of countries using reduce function


 //require library xhr2

  const XMLHttpRequest = require('xhr2');

  // create an object to the XMLHttpRequest class

 let xhr = new XMLHttpRequest();

 //open the connection

       xhr.open('GET','https://restcountries.com/v3.1/all', true);

       //send http request

       xhr.send();

       // function to handle the response from the web server

       xhr.onload = function(){

        // convert the json string response xhr.responseText 
    // to a javascript object
    
       var data = JSON.parse(xhr.response);
         const population=data.reduce((previous,current)=>{
                return previous+current.population;
            },0)
    console.log(population);}

//e.)Print the country that uses US dollars as currency.
    

const XMLHttpRequest = require('xhr2');
 let xhr = new XMLHttpRequest();
       xhr.open('GET','https://restcountries.com/v3.1/all', true);
       xhr.send();
xhr.onload = function () {
    var data = JSON.parse(xhr.response);
         
  data.forEach(country => {
        if (country.currencies && country.currencies.USD) {
            console.log(`Country: ${country.name.common}`);
        }
    });
}
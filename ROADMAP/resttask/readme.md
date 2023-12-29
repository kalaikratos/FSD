# Rest Countries and Weather using fetch API
## Overview

This is a basic website which lists all the major countries and also shows the exact weather of the location. It is built on HTML, CSS, Javascript, Bootstrap. Used DOM Maipulation for creating HTML elements and fetch() API to retrieve data from the resources given below.

### Built with

- HTML
- DOM Manipulation
- CSS custom properties
- fetch() API
- Bootstrap

### What I learned

```html
<div class="card-text">
  <p>Capital: ${objData.capital == undefined ? "N/A" : objData.capital}</p>
  <p>Region: ${objData.region}</p>
  <p>Country Code: ${objData.cioc ? objData.cioc : "N/A"}</p>
  <p>
    Lat: ${objData.latlng == undefined ? "N/A" : objData.latlng[0]} Long:
    ${objData.latlng ==undefined ? "N/A" : objData.latlng[1]}
  </p>
  <p>Population: ${objData.population}</p>
</div>
```

```CSS
@media screen and (min-width: 768px) and (min-height: 1024px) {
    .card-img-top {
        height  : 20vh;
    }
}
```
### Links

- Solution URL: https://github.com/kalaikratos/FSD/tree/master/ROADMAP/resttask
- Live Site URL:https://fsd-lac.vercel.app/ROADMAP/resttask/weather.html



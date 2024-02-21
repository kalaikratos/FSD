
let divElement = document.createElement('div');


divElement.classList.add('container');
document.body.appendChild(divElement);
let h1Element = document.createElement('h1');
h1Element.textContent = 'DOM Tasks';

divElement.appendChild(h1Element);
let pElement = document.createElement('p');
pElement.textContent = 'All Dom Tasks will be added here!';
divElement.appendChild(pElement);
let ButtonElement = document.createElement('button');
ButtonElement.textContent = 'Click Me!';
divElement.appendChild(ButtonElement);
let ulElement = document.createElement('ul');
divElement.appendChild(ulElement);
let liElement = document.createElement('li');
liElement.textContent = 'List Item';
ulElement.appendChild(liElement);
let liElement2 = document.createElement('li');    
liElement2.textContent = 'List Item2';
ulElement.appendChild(liElement2);
let liElement3 = document.createElement('li');
liElement3.textContent = 'List Item3';
ulElement.appendChild(liElement3);
let liElement4 = document.createElement('li');
liElement4.textContent = 'List Item4';
ulElement.appendChild(liElement4);
let liElement5 = document.createElement('li');
liElement5.textContent = 'List Item5';
ulElement.appendChild(liElement5);
let liElement6 = document.createElement('li');
pElement.style.fontSize = '20px';
pElement.style.color = 'red';
ButtonElement.style.backgroundColor = 'green';
ButtonElement.style.color = 'white';
let imgElement = document.createElement('img');
imgElement.id = 'image';
imgElement.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
imgElement.style.width = '100px';
imgElement.style.height = '100px';
divElement.appendChild(imgElement);
let tableElement = document.createElement('table');
let trElement = document.createElement('tr');
let thElement = document.createElement('th');
thElement.textContent = 'Name';
let thElement2 = document.createElement('th');
thElement2.textContent = 'Age';
let thElement3 = document.createElement('th');
thElement3.textContent = 'Address';
trElement.appendChild(thElement);
trElement.appendChild(thElement2);
trElement.appendChild(thElement3);
tableElement.appendChild(trElement);
divElement.appendChild(tableElement);



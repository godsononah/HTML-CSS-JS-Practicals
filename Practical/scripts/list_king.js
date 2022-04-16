// Select the element and store it in a variable.
var el = document.getElementById('one');

// Change the value of the class attribute.
//el.className = 'cool';

// Using the setAttribute method
el.setAttribute('class', 'cool');

/*var position = document.getElementsByTagName('ul')[0];
var newEl = document.createElement('li');
var newText = document.createTextNode('Just a test...');
newEl.appendChild(newText);
position.appendChild(newEl);*/

/*var el = document.getElementById('four');
el.textContent = 'Just testing...';*/

/*var firstItem = document.getElementById('one');

if (firstItem.hasAttribute('class')) {
    var attr = firstItem.getAttribute('class');

    var el = document.createElement('p');
    el.setAttribute('id', 'scriptResults');

    el.innerHTML = 'The first item has a class name: ' + attr;

    var main = document.getElementById('main');
    main.appendChild(el);
}*/

// ADDING ITEMS TO START AND END OF LIST
var list = document.getElementsByTagName('ul')[0];      // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');         // Create element
var newTextLast = document.createTextNode('cream');     // Create text node
newItemLast.appendChild(newTextLast);                   // Add text node to element
list.appendChild(newItemLast);                          // Add element end of list

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');        // Create element
var newTextFirst = document.createTextNode('kale');     // Create text node
newItemFirst.appendChild(newTextFirst);                 // Add text node to element
list.insertBefore(newItemFirst, list.firstChild);       // Add element to list

var listItems = document.querySelectorAll('li');        // All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < listItems.length; i++) {            // Loop through elements
    listItems[i].className = 'cool';                    // Change class to cool
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');             // h2 element
var headingText = heading.firstChild.nodeValue;         // h2 text
var totalItems = listItems.length;                      // Number of <li> elements
var newHeading = headingText + " (<span id='totalItems'>" + totalItems + '</span>)';   // Content
heading.innerHTML = newHeading;                       // Update h2

/*alert(document.getElementById('totalItems').innerHTML);*/
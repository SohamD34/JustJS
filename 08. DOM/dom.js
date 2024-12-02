/* 
DOM - DOCUMENT OBJECT MODEL

                         window
                           |
                        document
                           |
                          html
            _______________|_________________
           |                                 |
         head                               body
         * meta                             * script
         * title                            * div - h1, h2, p, img
         * link                             

You can access HTML entities in windows.document object.
This object is the root of the DOM tree.

*/


// This will show the document object in the console.
// console.dir(document.head);

function changeContent() {
    const title = document.getElementById('title');
    title.textContent = 'New Color';

    const description = document.getElementById('description');
    description.style.color= 'red';
    description.textContent = 'This is a description in new color';
}

const button = document.getElementById('changeButton');
button.addEventListener('click', changeContent);


// Types of element access
// 1. getElementById
// 2. getElementsByClassName _______,--> returns a collection/array 
// 3. getElementsByTagName   ----'
// 4. querySelector   -- 1st element (h1, h2, p, .className, #Id)
// 5. querySelectorAll -- all elements (h1, h2, p, .className)

// Properties of elements
// 1. textContent
// 2. innerHTML
// 3. innerText
// 4. style
// 5. tagName -- BUTTON, DIV, H1, H2, P, IMG, etc.

// Children
// 1. firstElementChild - first child element
// 2. lastElementChild - last child element
// 3. children - all children elements
// 4. childNodes - all children nodes (text, comment, element)

// Parent
// 1. parentElement - parent element

// Siblings
// 1. nextElementSibling - next sibling element

// Attributes
// 1. getAttribute('attributeName')
// 2. setAttribute('attributeName', 'attributeValue')
// 3. removeAttribute('attributeName')


let div = document.querySelector("div");
console.log(div.getAttribute("id"));

div.setAttribute("id", "newBox");
console.log(div.getAttribute("id"));

// Change the color of the div

let color = div.style.color;
console.log(color);

div.style.color = "red";
color = div.style.color;
console.log(color);


// Create a new element on clicking a button
// This will keep adding new text as we keep clicking the button

const addbutton = document.getElementById('addButton');

addbutton.addEventListener('click', function() {

    let newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph";
    newElement.style.color = "blue";
    newElement.style.fontSize = "20px";

    document.body.appendChild(newElement);
});
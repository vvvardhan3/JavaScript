// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// Adding a new element

// 1. Create the new element

let newAnchorElement = document.createElement("a");

newAnchorElement.textContent = 'This leads to the google!';
newAnchorElement.href = "https://google.com";

// 2. Get access to the parent element that should hold the new element

let firstParaGraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParaGraph.append(newAnchorElement);


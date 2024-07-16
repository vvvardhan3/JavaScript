// document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// Adding a new element
// A. Create the new element

let newAnchorElement = document.createElement("a");

newAnchorElement.textContent = "This leads to the google!";
newAnchorElement.href = "https://google.com";

// B. Get access to the parent element that should hold the new element

let firstParaGraph = document.querySelector("p");

// C. Insert the new element into the parent element content

firstParaGraph.append(newAnchorElement);

// Removing element
// A. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// B. Remove it

firstH1Element.remove();

// InnerHTML

// InnerHTML is Different to textContent function.

firstParaGraph.innerHTML = 'Hi EveryOne, A <strong>small reminder</strong> to everyOne around here!'

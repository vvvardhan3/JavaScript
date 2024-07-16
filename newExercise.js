let h1Element = document.body.children[0];

console.log(h1Element)


console.dir(h1Element.parentElement);


console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById("h1-tag");
console.dir(h1Element);

let pTag = document.querySelector(".p-tag");
console.dir(pTag);



pTag.textContent = 'Here is the, Link';

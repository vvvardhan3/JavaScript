// Sum of the Numbers starting from zero

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNameInputElement = document.querySelector("#user-number");
  const enteredNumber = userNameInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.querySelector("#calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Highlight links
const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Display user data

const dummyUserData = {
  firstName: "Vishnu Vardhan",
  LastName: "Vankayalapati",
  Age: "25",
};

const displayUserDataButtonElement = document.querySelector("#user-data");

function displayUserData() {
  const outputDataElement = document.querySelector("#output-user-data");

  outputDataElement.innerHTML = '';

  for (const key in dummyUserData) {
    const newUserData = document.createElement("li");
    const outputText = key + ": " + dummyUserData[key].toUpperCase();
    newUserData.textContent = outputText;
    outputDataElement.append(newUserData);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

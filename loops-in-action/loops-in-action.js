// Sum of the Numbers starting from zero

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
    const userNameInputElement = document.querySelector('#user-number');
    const enteredNumber = userNameInputElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i <=enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.querySelector('#calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener("click", calculateSum);

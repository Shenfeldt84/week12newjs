let weightInput = document.getElementById("wrapper-input1");
let heightInput = document.getElementById("wrapper-input2");
let resultBMI = document.getElementById("wrapper-result");
let buttonBMI = document.getElementById("wrapper-btn");

function calculateBMI() {
  let weight = weightInput.value;
  let height = heightInput.value;

  let number1 = parseFloat(weight);
  let number2 = parseFloat(height);

  let result = number1 / Math.pow(number2 / 100, 2).toFixed(2);

  resultBMI.innerHTML = result;
}

buttonBMI.addEventListener("click", calculateBMI);
//  или такое решение

let weightInput = document.getElementById("wrapper-input1");
let heightInput = document.getElementById("wrapper-input2");
let resultBMI = document.getElementById("wrapper-result");
let buttonBMI = document.getElementById("wrapper-btn");

function calculateBMI() {
  let weight = weightInput.value;
  let height = heightInput.value;

  let number1 = Number(weight);
  let number2 = Number(height);

  let result = number1 / Math.pow(number2 / 100, 2).toFixed(2);

  resultBMI.innerHTML = result;
}

buttonBMI.addEventListener("click", calculateBMI);

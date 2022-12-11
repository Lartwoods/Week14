function addition() {
  let num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  let result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function substraction() {
  let num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  let result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}

function division() {
  let num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  let result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}
function multiplication() {
  let num1 = document.getElementById("number1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("number2").value;
  num2 = parseInt(num2);
  let result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}

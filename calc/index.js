var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operation');
var input_value = document.querySelector('#input');
var button_c = document.querySelector('#button_c');
var buttonEquality = document.querySelector('.Equality');
var firsNumberInput = 0;
var secondNumberInput = 0;
var sign;
var flag = true;

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', onbuttonNumberClick);
}

for (var j = 0; j < operations.length; j++) {
  var operation = operations[j];
  operation.addEventListener('click', onbuttonOperationClick);
}

function onbutton_cClick() {
  input_value.value = null;
}

function onbuttonNumberClick(e) {
  input_value.value += this.value;
  if (flag) {
    firsNumberInput = input_value.value;
  } else {
    secondNumberInput = input_value.value;
  }
}

function onbuttonOperationClick(e) {
  sign = this.value;
  onbutton_cClick();
  flag = false;
}

function onbuttonEqualityClick() {

  if (sign === "+") {
    var summ = +firsNumberInput + +secondNumberInput;
  } else if (sign === "-") {
    summ = +firsNumberInput - +secondNumberInput;
  } else if (sign === "/") {
    summ = +firsNumberInput / +secondNumberInput;
  } else if (sign === "*") {
    summ = +firsNumberInput * +secondNumberInput;
  }
  input_value.value = summ;
  flag = true;
  firsNumberInput = summ;

}

input_vaule = document.querySelector('#input').onkeypress = function getChar(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    return false;
  }
}

button_c.addEventListener('click', onbutton_cClick);
buttonEquality.addEventListener('click', onbuttonEqualityClick);
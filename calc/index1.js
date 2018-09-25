function Calc() {
  this.numbers = null;
  this.operations = null;
  this.input_value = null;
  this.button_c = null;
  this.buttonEquality = null;
  this.firsNumberInput = null;
  this.secondNumberInput = null;
  this.sign = null;
  this.flag = null,
  this.el = null;

  this.render = function (id) {

    this.el = document.querySelector(id);
    this.el.innerHTML = `
      <p>
      <input id="input">
    </p>
  
    <p>
      <span>
        <button value="c" id="button_c" class="operation">c</button>
        <button value="/" class="operation button1">/</button>
      </span>
    </p>
  
    <span>
      <button value="1" class="number">1</button>
      <button value="2" class="number">2</button>
      <button value="3" class="number">3</button>
      <button value="*" class="operation">*</button>
    </span>
  
    <hr />
  
    <span>
      <button value="4" class="number">4</button>
      <button value="5" class="number">5</button>
      <button value="6" class="number">6</button>
      <button value="-" class="operation">-</button>
    </span>
  
    <hr />
  
    <span>
      <button value="7" class="number">7</button>
      <button value="8" class="number">8</button>
      <button value="9" class="number">9</button>
      <button value="+" class="operation">+</button>
    </span>
  
    <hr />
  
    <p>
      <span>
        <button value="0" class="number">0</button>
        <button value="=" class="Equality button1">=</button>
      </span>
    </p>`;
    this.numbers = this.el.querySelectorAll('.number');
    this.operations = this.el.querySelectorAll('.operation');
    this.input_value = this.el.querySelector('#input');
    this.button_c = this.el.querySelector('#button_c');
    this.buttonEquality = this.el.querySelector('.Equality');
    this.firsNumberInput = 0;
    this.secondNumberInput = 0;
    this.sign = 0;
    this.flag = true;

  };

  this.start = function () {

    this.input_vaule = this.el.querySelector('#input').onkeypress = function getChar(event) {
      if (event.keyCode < 48 || event.keyCode > 57) {
        return false;
      }
    };

    this.button_c.addEventListener('click', this.onbutton_cClick.bind(this));
    this.buttonEquality.addEventListener('click', this.onbuttonEqualityClick.bind(this));
  };

  this.init = function () {

    for (var i = 0; i < this.numbers.length; i++) {
      var number = this.numbers[i];
      number.addEventListener('click', this.onbuttonNumberClick.bind(this));
    }

    for (var j = 0; j < this.operations.length; j++) {
      var operation = this.operations[j];
      operation.addEventListener('click', this.onbuttonOperationClick.bind(this));
    }
  };

  this.onbutton_cClick = function () {

    this.input_value.value = null;
    this.firsNumberInput = 0;
    this.secondNumberInput = 0;
    this.flag = true;

  };

  this.onbutton_ceClick = function () {

    this.input_value.value = null;
  };

  this.onbuttonNumberClick = function (e) {

    this.input_value.value += e.currentTarget.value;
    if (this.flag) {
      this.firsNumberInput = this.input_value.value;
    } else {
      this.secondNumberInput = this.input_value.value;
    }
  };

  this.onbuttonOperationClick = function (e) {

    this.sign = e.currentTarget.value;
    this.onbutton_ceClick();
    this.flag = false;
  };

  this.onbuttonEqualityClick = function () {

    if (this.sign === "+") {
      var summ = +this.firsNumberInput + +this.secondNumberInput;
    } else if (this.sign === "-") {
      summ = +this.firsNumberInput - +this.secondNumberInput;
    } else if (this.sign === "/") {
      summ = +this.firsNumberInput / +this.secondNumberInput;
    } else if (this.sign === "*") {
      summ = +this.firsNumberInput * +this.secondNumberInput;
    }
    this.input_value.value = summ;
    this.flag = true;
    this.firsNumberInput = summ;
  };


};


var calc1 = new Calc();
var calc2 = new Calc();

calc1.render('#calc1');
calc2.render('#calc2');
calc1.init();
calc2.init();
calc1.start();
calc2.start();



















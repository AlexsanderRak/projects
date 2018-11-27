import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(){
    super();
    this.state={
      inputIner: 0,
      firstNumber: 0,
      operator: "",
      labelEROR: "",
      result: 0,
    }
  }
  onPressNumber(e) {
    let numer = e.currentTarget.name;
    this.setState({ labelEROR: this.state.labelEROR = "" });
    if (this.state.inputIner == "0") {
      this.setState({ inputIner: this.state.inputIner = numer });
    } else {
      this.setState({ inputIner: this.state.inputIner += numer });
    }
  }
  onOperationBtnPress(e) {
    let operation = e.currentTarget.name;
    this.setState({labelEROR: this.state.labelEROR = ""});
    switch (operation) {
      case "c": 
        this.setState({inputIner: this.state.inputIner = 0});
        this.state.firstNumber = 0;
        break;
      case "del":
        if (this.state.inputIner.length == 1 || this.state.inputIner == 0) {
          this.setState({inputIner: this.state.inputIner = 0 });
        } else {
          this.setState({ inputIner: String(this.state.inputIner).slice(0, -1)});
        }
        break;
      case "+/-":
        if(this.state.inputIner >= "0"){
          this.setState({ inputIner: this.state.inputIner = "-" + this.state.inputIner });
        }else{
          this.setState({ inputIner: this.state.inputIner = String(this.state.inputIner).slice(1,this.state.inputIner.length) });
        }
        
        break;
      case ",":
       if(~String(this.state.inputIner).indexOf(".")){

       }else{
          this.setState({ inputIner: this.state.inputIner += "."});
       }
        
        break;
      default:
        if (this.state.firstNumber !== 0) {
          this.onClickEqually();
        } else {
          this.state.firstNumber = this.state.inputIner;
          this.state.operator = operation;
          this.setState({inputIner: this.state.inputIner = 0 });
        }
    }

  }
  onClickEqually(e){
    switch(this.state.operator){
      case "/":
      if(this.state.inputIner == 0){
        this.setState({ labelEROR: this.state.labelEROR = "cannot be divided by zero" });
      }else{
        this.state.result = Number(this.state.firstNumber) / Number(this.state.inputIner);
        this.setState({ inputIner: this.state.inputIner = this.state.result });
      }
      break;
      case "*":
      this.state.result = Number(this.state.firstNumber) * Number(this.state.inputIner);
      this.setState({ inputIner: this.state.inputIner = this.state.result });
      break;
      case "+":
      this.state.result = Number(this.state.firstNumber) + Number(this.state.inputIner);
      this.setState({ inputIner: this.state.inputIner = this.state.result });
      break;
      case "-":
      this.state.result = Number(this.state.firstNumber) - Number(this.state.inputIner);
      this.setState({ inputIner: this.state.inputIner = this.state.result });
      break; 
    }
    this.state.firstNumber = 0;
  }

  render() {
    return (
      <div className="calculator">
        <input value={this.state.inputIner} readOnly ></input>
        <label>{this.state.labelEROR}</label>
        <div className="controlers">
          <div className="numbersPlase">
            <button className="number" name="c" onClick={this.onOperationBtnPress.bind(this)}>C</button>
            <button className="number" name="/" onClick={this.onOperationBtnPress.bind(this)}>/</button>
            <button className="number" name="*" onClick={this.onOperationBtnPress.bind(this)}>*</button>
            <button className="number" name="7" onClick={this.onPressNumber.bind(this)}>7</button>
            <button className="number" name="8" onClick={this.onPressNumber.bind(this)}>8</button>
            <button className="number" name="9" onClick={this.onPressNumber.bind(this)}>9</button>
            <button className="number" name="4" onClick={this.onPressNumber.bind(this)}>4</button>
            <button className="number" name="5" onClick={this.onPressNumber.bind(this)}>5</button>
            <button className="number" name="6" onClick={this.onPressNumber.bind(this)}>6</button>
            <button className="number" name="1" onClick={this.onPressNumber.bind(this)}>1</button>
            <button className="number" name="2" onClick={this.onPressNumber.bind(this)}>2</button>
            <button className="number" name="3" onClick={this.onPressNumber.bind(this)}>3</button>
            <button className="numberNull" name="0" onClick={this.onPressNumber.bind(this)}>0</button>
            <button className="number" name="," onClick={this.onOperationBtnPress.bind(this)}>,</button>
          </div>
          <div className="operators">
            <button className="number" name="del" onClick={this.onOperationBtnPress.bind(this)}>del</button>
            <button className="number" name="+" onClick={this.onOperationBtnPress.bind(this)}>+</button>
            <button className="number" name="-" onClick={this.onOperationBtnPress.bind(this)}>-</button>
            <button className="number" name="+/-" onClick={this.onOperationBtnPress.bind(this)}>+/-</button>
            <button className="number" name="=" onClick={this.onClickEqually.bind(this)}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

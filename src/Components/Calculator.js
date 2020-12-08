import React, { Component } from 'react'
import './Calculator.css';

export class Calculator extends Component {

    state = {
        input: '',
        decimalFlag: false,
        displayValue: ''
    }

    firstValue = 0;
    secondValue = 0;
    operand = ""
    
    clearInputHandler = () => {
        console.log('clicked');
        this.firstValue = 0;
        this.secondValue = 0;
        this.setState({ input: '', displayValue: '', decimalFlag: false });
    }

    changeInputHandler = (event) => {
        this.setState({ input: event.target.value });
    }

    addNumberBtnHandler = (event) => {
        if (event.target.name === '.' && this.state.decimalFlag === false && this.state.input !== "") {
            event.preventDefault();
            this.setState({ decimalFlag: true });
            this.setState({ input: this.state.input + '.' })
        }

        this.setState({ input: this.state.input + event.target.name, displayValue: '' })
    }

    OperationHandler = (event) => {

        if (event.target.name === '+') {
            console.log('Inside Add operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.operand = "+"
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === '-') {
            console.log('Inside Subtract operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.operand = "-";
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === '*') {
            console.log('Inside Multiply operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.operand = "*"
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === '/') {
            console.log('Inside Divide operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.operand = "/";
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === '%') {
            console.log('Inside Percentage operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.firstValue = this.firstValue / 100;
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === 'sqrt') {
            console.log('Inside square root operation');
            console.log(event.target.name);
            this.firstValue = this.firstValue + +this.state.input;
            console.log("Previous Value", this.firstValue);
            this.firstValue = Math.sqrt(this.firstValue);
            this.setState({ input: "", decimalFlag: false, displayValue: this.firstValue });
        }
        else if (event.target.name === '=') {
            console.log("inside equal ");
            this.secondValue = this.state.input;
            console.log("Current Value", this.secondValue);
            if (this.operand === "+") {
                this.firstValue = this.firstValue + +this.secondValue;
                console.log("total Sum", this.firstValue)
            }
            else if (this.operand === "-") {
                this.firstValue = this.firstValue - +this.secondValue;
                console.log("total difference", this.firstValue)
            }
            else if (this.operand === "*") {
                this.firstValue = this.firstValue * +this.secondValue;
                console.log("total product", this.firstValue)
            }
            else if (this.operand === "/") {
                this.firstValue = this.firstValue / +this.secondValue;
                console.log("total product", this.firstValue)
            }
            // this.setState({input:this.firstValue})
            // console.log("Input Value",this.state.input);
            this.setState({ input: '', displayValue: this.firstValue, decimalFlag: false })
            this.secondValue = 0;
        }
    }
    backspaceHandler = (event) => {
        //console.log(this.state.input.slice(0,this.state.input.length-1));   
        if (this.state.input !== "") {
            this.setState({ input: this.state.input.slice(0, this.state.input.length - 1) })
        }
        else {
            this.setState({ displayValue: (this.state.displayValue).toString().slice(0, this.state.displayValue.length - 1) })
        }
    }
    render() {
        return (
            <div className="center-align">
                <div className="card">
                    <input disabled type="number" className="number-input" placeholder="0" value={(this.state.displayValue !== "") ? this.state.displayValue : this.state.input} onChange={this.changeInputHandler} />
                    <div className="row">
                        <button className="number-btn" onClick={this.clearInputHandler}>Clear</button>
                        <button className="number-btn" onClick={this.backspaceHandler}>Del</button>
                        <button className="number-btn" name="%" onClick={this.OperationHandler}>%</button>
                        <button className="number-btn" name="sqrt" onClick={this.OperationHandler}>SqRoot</button>
                    </div>
                    <div className="row">
                        <button className="number-btn" name="7" onClick={this.addNumberBtnHandler}>7</button>
                        <button className="number-btn" name="8" onClick={this.addNumberBtnHandler}>8</button>
                        <button className="number-btn" name="9" onClick={this.addNumberBtnHandler}>9</button>
                        <button className="number-btn sign" name="/" onClick={this.OperationHandler}>/</button>
                    </div>
                    <div className="row">
                        <button className="number-btn" name="4" onClick={this.addNumberBtnHandler}>4</button>
                        <button className="number-btn" name="5" onClick={this.addNumberBtnHandler}>5</button>
                        <button className="number-btn" name="6" onClick={this.addNumberBtnHandler}>6</button>
                        <button className="number-btn sign" name="*" onClick={this.OperationHandler} >*</button>
                    </div>
                    <div className="row">
                        <button className="number-btn" name="1" onClick={this.addNumberBtnHandler}>1</button>
                        <button className="number-btn" name="2" onClick={this.addNumberBtnHandler}>2</button>
                        <button className="number-btn" name="3" onClick={this.addNumberBtnHandler}>3</button>
                        <button className="number-btn sign" name="-" onClick={this.OperationHandler}>-</button>
                    </div>
                    <div className="row">
                        <button className="number-btn sign" name="=" onClick={this.OperationHandler}>=</button>
                        <button className="number-btn sign" name="." disabled={this.state.decimalFlag} onClick={this.addNumberBtnHandler}>.</button>
                        <button className="number-btn" name="0" onClick={this.addNumberBtnHandler}>0</button>
                        <button className="number-btn sign" name="+" onClick={this.OperationHandler}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator

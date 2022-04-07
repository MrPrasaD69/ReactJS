import { useState } from "react";

function App() {
  const [calc, setCalc]=useState("");
  const [result, setResult]=useState("");
  const ops=['/','*','+','-','.'];

  const updateCalc=value=>{
    //checking if the value is entered and if an operator is entered.
    if(
      ops.includes(value) && calc==='' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);

    //after the values are entered, evaluate the expression
    if(!ops.includes(value))
    {
      setResult(eval(calc+value).toString());
    }
  }

  //function to create buttons with a loop
  const createDigits=()=>{
    const digits=[];
    for(let i=1;i<10;i++)
    {
      digits.push(<button onClick={()=> updateCalc(i.toString())} key={i}>{i}</button>)
    }
    return digits;
  }

  //function to return all the calculations 
  const calculate=()=>{
    setCalc(eval(calc).toString());
  }

  //delete last values
  const deleteLast=()=>{
    if(calc=='')
    {
      return;
    }
    const value=calc.slice(0,-1);
    setCalc(value);

    //return the last value after Del pressed
    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        
        <div className="display">
            {result ? <span> ({result}) </span>: ""}{calc || "0"} &nbsp;
        </div>

        <div className="operator">
          <button onClick={()=> updateCalc('/')} >/</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('+')} >+</button>
          <button onClick={()=> updateCalc('-')} >-</button>
          <button onClick={deleteLast} >DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
        <button onClick={()=> updateCalc('0')} >0</button>
        <button onClick={()=> updateCalc('.')} >.</button>
        <button onClick={calculate} >=</button>
        </div>

      </div>
    </div>
  );
}

export default App;

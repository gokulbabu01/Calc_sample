import React, { useState } from "react";
import "./calc.css";
const Calculator = () => {
    const [num1, setnum1]= useState();
    const [num2, setnum2]= useState();
    const [result, setresult]= useState();

    const updateNum1= (event1) => {
      setnum1(event1.target.value)
    }

    const updateNum2= (event2) => {
      setnum2(event2.target.value)      
    }

    const addCalc = () => {
      const newResult= parseInt(num1) + parseInt(num2);
      setresult(newResult);
      setnum1("");
      setnum2("");
    }

    const subCalc = () => {
      const newResult= parseInt(num1) - parseInt(num2);  
      setresult(newResult);
      setnum1("");
      setnum2("");   
    }



    return (
      <div>
        <div>
          <input
            value={num1}
            placeholder="Number1"
            onChange={updateNum1}
          />         
        </div>
        <div>
          <input
            value={num2}
            placeholder="Number2"
            onChange={updateNum2}
          />         
        </div>
        <button onClick={addCalc}>Addition</button>
        <button onClick={subCalc}>Subtract</button>
        <p>Result is {result}</p>
        
      </div>

    );
};
export default Calculator;
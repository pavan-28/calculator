import React, { useState } from "react";
import './App.css';
const App = () => {
  const [result, setResult] = useState("");
  const changeHandler = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <div>
      <center>
        <h1>Calculator</h1>
        <form action="">
        <input type="text" value={result} />
          <button onClick={clear}>clr</button>
        </form>
          <br />
          <button name="1" onClick={changeHandler} >
            1
        
          </button>
          <button name="2" onClick={changeHandler}>
            2
          </button>
          <button name="3" onClick={changeHandler}>
            3
          </button>
          <button name="/" onClick={changeHandler}>
            &divide;
          </button>
          <br/>
          <button name="4" onClick={changeHandler}>
            4
          </button>
          <button name="5" onClick={changeHandler}>
            5
          </button>
          <button name="6" onClick={changeHandler}>
            6
          </button>
          <button name="-" onClick={changeHandler}>
            &ndash;
          </button>
          <br />
          <button name="7" onClick={changeHandler}>
            7
          </button>
          <button name="8" onClick={changeHandler}>
            8
          </button>
          <button name="9" onClick={changeHandler}>
            9
          </button>
          <button name="+" onClick={changeHandler}>
            +
          </button>
          <br />
          <button name="." onClick={changeHandler}>
            .
          </button>
          <button name="0" onClick={changeHandler}>
            0
          </button>
          <button onClick={calculate}>=</button>
          <button name="*" onClick={changeHandler}>
            &times;
          </button>
          <br />
        
      </center>
    </div>
  );
};
export default App;
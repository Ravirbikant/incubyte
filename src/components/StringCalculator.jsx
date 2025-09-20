import { useState } from "react";
import { add } from "../utils/add.js";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    try {
      const calculatedResult = add(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setResult(null);
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <p>
        Enter comma-separated numbers or use newlines to calculate their sum.
      </p>

      <div>
        <label htmlFor="numbers-input">Numbers:</label>
        <textarea
          id="numbers-input"
          value={input}
          onChange={handleInputChange}
          placeholder="e.g., 1,2,3"
          rows={3}
          cols={30}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>

      {result !== null && (
        <div>
          <h3>Result:</h3>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
}

export default StringCalculator;

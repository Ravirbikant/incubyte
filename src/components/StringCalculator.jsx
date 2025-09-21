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

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const isError =
    result && typeof result === "string" && result.startsWith("Error");

  return (
    <div className="string-calculator">
      <h1>String Calculator</h1>
      <p className="description">
        Enter comma-separated numbers or use newlines to calculate their sum.
      </p>

      <div className="input-section">
        <label htmlFor="numbers-input">Numbers:</label>
        <textarea
          id="numbers-input"
          value={input}
          onChange={handleInputChange}
          placeholder="e.g., 1,2,3 or //;\n1;2;3"
          rows={3}
          cols={30}
        />
        <div className="button-group">
          <button onClick={handleCalculate} className="calculate-btn">
            Calculate
          </button>
          <button onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
      </div>

      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <div className={`result-value ${isError ? "error" : ""}`}>
            {result}
          </div>
        </div>
      )}
    </div>
  );
}

export default StringCalculator;

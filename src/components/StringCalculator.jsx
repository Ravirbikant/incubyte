function StringCalculator() {
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
          placeholder="e.g., 1,2,3"
          rows={3}
          cols={30}
        />
        <button>Calculate</button>
      </div>

      <div>
        <h3>Result:</h3>
        <div>0</div>
      </div>
    </div>
  );
}

export default StringCalculator;

import { evaluate } from "mathjs";
import { useState, useEffect } from "react";
import Button from "../Button";
import History from "../History";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  /* Load history from localStorage */
  useEffect(() => {
    const savedHistory = localStorage.getItem("calcHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  /* Save history to localStorage */
  useEffect(() => {
    localStorage.setItem("calcHistory", JSON.stringify(history));
  }, [history]);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = evaluate(input);
      const newEntry = `${input} = ${result}`;

      setHistory((prev) => [newEntry, ...prev]);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  /* Clear History */
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("calcHistory");
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || "0"}</div>

        <div className="buttons">
          <Button label="7" click={handleClick} />
          <Button label="8" click={handleClick} />
          <Button label="9" click={handleClick} />
          <Button label="/" click={handleClick} />

          <Button label="4" click={handleClick} />
          <Button label="5" click={handleClick} />
          <Button label="6" click={handleClick} />
          <Button label="*" click={handleClick} />

          <Button label="1" click={handleClick} />
          <Button label="2" click={handleClick} />
          <Button label="3" click={handleClick} />
          <Button label="-" click={handleClick} />

          <Button label="0" click={handleClick} />
          <Button label="." click={handleClick} />
          <Button label="C" click={clear} />
          <Button label="+" click={handleClick} />

          <button className="equals" onClick={calculate}>
            =
          </button>
        </div>
      </div>

      <History history={history} clearHistory={clearHistory} />
    </div>
  );
};

export default Calculator;

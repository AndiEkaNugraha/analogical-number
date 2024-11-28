import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleFib = () => {
    var a = 0;
    var b = 1;
    var result;
    for (let i = 2; i <= input; i++) {
      [a, b] = [b, a + b];
    }
    result = input > 0 ? b : a;
    setResult(result);
  };

  useEffect(() => {
    // alert("program berjalan");
  }, []);

  function handleInput(value) {
    try {
      if (!/^\d*$/.test(value)) {
        throw new Error("input berupa angka tanpa simbol");
      }
      setInput(value);
    } catch (e) {
      alert(e.message);
    }
  }
  function handleClick() {
    try {
      if (!input) {
        throw new Error("Input tidak boleh kosong");
      }
      const reverse = parseInt(input.split("").reverse().join(""));
      const diff = Math.abs(parseInt(input) - reverse);
      setResult(diff);
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }

  return (
    <div className="App">
      <div>
        Number:{" "}
        <input value={input} onChange={(e) => handleInput(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleFib}>Fib</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}

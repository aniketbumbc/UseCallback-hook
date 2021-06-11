import React, { useState, useMemo } from 'react';

function Usememodemo() {
  const [number, setNumber] = useState(0);
  const squreNumber = useMemo(() => {
    return calSqure(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  const onChangeHandler = (event) => {
    setNumber(event.target.value);
  };

  const counterHander = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Use Memo Demo</h3>
      <input type='number' value={number} onChange={onChangeHandler}></input>
      <div>OUTPUT: {squreNumber}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
}

function calSqure(number) {
  console.log('Calculate Squre');
  return Math.pow(number, 2);
}

export default Usememodemo;

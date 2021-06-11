import React, { useState, useCallback } from 'react';
import List from './List';
import Usememodemo from './Usememodemo';
function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : 'yellow',
    color: dark ? 'red' : 'green',
  };
  return (
    <>
      <div style={theme}>
        <h4> Use Callback hooks</h4>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((preDark) => !preDark)}>Toggle</button>
        <List getItems={getItems} />
      </div>
      <Usememodemo />
    </>
  );
}

export default App;
